import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  CssBaseline,
  Card,
  CardContent,
  createTheme,
  ThemeProvider,
  Divider,
} from "@mui/material";
import BottomNav from "../components/BottomNav";
import BackButton from "../components/BackButton";
import "../styles/UnitPage.css";

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

const UnitPage = () => {
  const { language, unitId } = useParams();

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
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            PsychoBoost
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className="page-container">
        <Box sx={{ my: 4, textAlign: "center" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            אופציות למידה - יחידה {unitId}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <BackButton />
          <Card
            component={Link}
            to={`/learn/${language}/${unitId}/comprehensive`}
            className="unit-card"
          >
            <CardContent className="unit-card-content">
              <Typography variant="h5" component="div">
                למידה כוללת
              </Typography>
            </CardContent>
          </Card>
          <Card className="unit-card">
            <CardContent className="unit-card-content">
              <Typography variant="h5" component="div">
                למידה יעילה
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
      <BottomNav />
    </ThemeProvider>
  );
};

export default UnitPage;
