import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import words from "../data/words";
import BottomNav from "../components/BottomNav";
import BackButton from "../components/BackButton";
import LearningOverlay from "../components/LearningOverlay";
import { db } from "../firebase"; // Import db from firebase config
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import "../styles/ComprehensiveLearningPage.css";
import "../styles/LearningOverlay.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6200ea",
    },
    secondary: {
      main: "#03dac5",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h4: {
      fontSize: "1.5rem", // Adjusted for mobile
      fontWeight: "bold",
    },
    h5: {
      fontSize: "1.2rem", // Adjusted for mobile
      fontWeight: "bold",
    },
    body2: {
      fontSize: "0.875rem", // Adjusted for mobile
    },
  },
  shape: {
    borderRadius: 8,
  },
});

const ComprehensiveLearningPage = () => {
  const { language, unitId } = useParams();
  const unitKey = `unit${unitId}`;
  const unitWords = words[language]?.[unitKey] || [];
  const [filter, setFilter] = useState("all");
  const [knowledge, setKnowledge] = useState({});
  const [loading, setLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const docRef = doc(
            db,
            "users",
            user.uid,
            "progress",
            `${language}-${unitKey}`
          );
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setKnowledge(docSnap.data().knowledge);
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user, language, unitKey]);

  const handleKnowledgeChange = useCallback(
    async (word, status) => {
      const newKnowledge = { ...knowledge, [word]: status };
      setKnowledge(newKnowledge);

      if (user) {
        await setDoc(
          doc(db, "users", user.uid, "progress", `${language}-${unitKey}`),
          {
            knowledge: newKnowledge,
          }
        );
      }
    },
    [knowledge, user, language, unitKey]
  );

  const filteredWords = useMemo(() => {
    return unitWords.filter((word) => {
      if (filter === "all") return true;
      if (filter === "know") return knowledge[word.word] === "know";
      if (filter === "don't know") return knowledge[word.word] === "don't know";
      return true;
    });
  }, [unitWords, filter, knowledge]);

  const getRowStyle = (word) => {
    if (knowledge[word.word] === "know") {
      return { backgroundColor: "#b0f2b4" };
    }
    if (knowledge[word.word] === "don't know") {
      return { backgroundColor: "#f28b82" };
    }
    return {};
  };

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" style={{ background: "#6200ea" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                fontSize: "1.2rem",
                textAlign: "center",
              }}
            >
              PsychoBoost
            </Typography>
          </Toolbar>
        </AppBar>
        <Container className="loading-container">
          <CircularProgress />
        </Container>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" style={{ background: "#6200ea" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              fontSize: "1.2rem",
              textAlign: "center",
            }}
          >
            PsychoBoost
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={`page-container ${showOverlay ? "hidden" : ""}`}>
        <Box sx={{ my: 2, textAlign: "center" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            למידה כוללת - יחידה {unitId}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <BackButton />
          <Box className="button-group">
            <Button
              variant="contained"
              color={filter === "all" ? "secondary" : "primary"}
              onClick={() => setFilter("all")}
            >
              הצג הכל
            </Button>
            <Button
              variant="contained"
              color={filter === "know" ? "secondary" : "primary"}
              onClick={() => setFilter("know")}
            >
              יודע
            </Button>
            <Button
              variant="contained"
              color={filter === "don't know" ? "secondary" : "primary"}
              onClick={() => setFilter("don't know")}
            >
              לא יודע
            </Button>
          </Box>
          <TableContainer component={Paper} className="table-container">
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell className="table-cell">
                    <Typography variant="h6">מילה</Typography>
                  </TableCell>
                  <TableCell className="table-cell">
                    <Typography variant="h6">פירוש</Typography>
                  </TableCell>
                  <TableCell align="center" className="table-cell">
                    <Typography variant="h6">יודע</Typography>
                  </TableCell>
                  <TableCell align="center" className="table-cell">
                    <Typography variant="h6">לא יודע</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredWords.map((word, index) => (
                  <TableRow key={index} style={getRowStyle(word)}>
                    <TableCell className="table-cell">{word.word}</TableCell>
                    <TableCell className="table-cell">
                      {word.definition}
                    </TableCell>
                    <TableCell align="center" className="table-cell">
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        onClick={() => handleKnowledgeChange(word.word, "know")}
                      >
                        יודע
                      </Button>
                    </TableCell>
                    <TableCell align="center" className="table-cell">
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        onClick={() =>
                          handleKnowledgeChange(word.word, "don't know")
                        }
                      >
                        לא יודע
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Button
          variant="contained"
          color="primary"
          className="learn-button"
          onClick={() => setShowOverlay(true)}
        >
          נתחיל ללמוד?
        </Button>
      </Container>
      <BottomNav />
      <LearningOverlay
        show={showOverlay}
        onClose={() => setShowOverlay(false)}
      />
    </ThemeProvider>
  );
};

export default ComprehensiveLearningPage;
