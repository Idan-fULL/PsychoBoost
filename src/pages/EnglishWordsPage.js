import React from "react";
import { Link } from "react-router-dom";
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
  Grow,
  Divider,
} from "@mui/material";
import BottomNav from "../components/BottomNav";
import "../styles/EnglishWordsPage.css";

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

const EnglishWordsPage = () => {
  const units = [
    "Unit 1",
    "Unit 2",
    "Unit 3",
    "Unit 4",
    "Unit 5",
    "Unit 6",
    "Unit 7",
    "Unit 8",
    "Unit 9",
    "Unit 10",
  ];

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
              Units for English Words
            </Typography>
          </Grow>
          <Divider sx={{ my: 2 }} />
          {units.map((unit, index) => (
            <Grow in={true} timeout={1500 + index * 500} key={index}>
              <Card
                component={Link}
                to={`/unit/english/${index + 1}`}
                className="unit-card"
              >
                <CardContent className="unit-card-content">
                  <Typography variant="h5" component="div">
                    {unit}
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          ))}
        </Box>
      </Container>
      <BottomNav />
    </ThemeProvider>
  );
};

export default EnglishWordsPage;
