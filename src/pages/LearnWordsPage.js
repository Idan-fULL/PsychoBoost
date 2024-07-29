import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  CssBaseline,
  Card,
  CardContent,
  CardActions,
  createTheme,
  ThemeProvider,
  Grow,
  Divider,
} from "@mui/material";
import BottomNav from "../components/BottomNav";
import "../styles/LearnWordsPage.css";

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

const LearnWordsPage = () => {
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
          <Grow in={true} timeout={1000}>
            <Typography variant="h4" component="h1" gutterBottom>
              במה תבחרו?
            </Typography>
          </Grow>
          <Divider sx={{ my: 2 }} />
          <Grow in={true} timeout={1500}>
            <Card className="learn-card">
              <CardContent className="learn-card-content">
                <Typography variant="h5" component="div">
                  למידת מילים בעברית
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  התחל בלמידת מילים בעברית לשיפור אוצר המילים שלך.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/learn-words/hebrew"
                  sx={{ borderRadius: 2 }}
                >
                  התחל ללמוד
                </Button>
              </CardActions>
            </Card>
          </Grow>
          <Grow in={true} timeout={2000}>
            <Card className="learn-card">
              <CardContent className="learn-card-content">
                <Typography variant="h5" component="div">
                  למידת מילים באנגלית
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  התחל בלמידת מילים באנגלית לשיפור אוצר המילים שלך.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/learn-words/english"
                  sx={{ borderRadius: 2 }}
                >
                  התחל ללמוד
                </Button>
              </CardActions>
            </Card>
          </Grow>
        </Box>
      </Container>
      <BottomNav />
    </ThemeProvider>
  );
};

export default LearnWordsPage;
