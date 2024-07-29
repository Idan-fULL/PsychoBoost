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
  Divider,
} from "@mui/material";
import BottomNav from "../components/BottomNav";
import "../styles/HebrewWordsPage.css";

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

const HebrewWordsPage = () => {
  const units = [
    "יחידה 1",
    "יחידה 2",
    "יחידה 3",
    "יחידה 4",
    "יחידה 5",
    "יחידה 6",
    "יחידה 7",
    "יחידה 8",
    "יחידה 9",
    "יחידה 10",
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
          <Typography variant="h4" component="h1" gutterBottom>
            יחידות לימוד בעברית
          </Typography>
          <Divider sx={{ my: 2 }} />
          {units.map((unit, index) => (
            <Card
              component={Link}
              to={`/unit/hebrew/${index + 1}`}
              className="unit-card"
              key={index}
            >
              <CardContent className="unit-card-content">
                <Typography variant="h5" component="div">
                  {unit}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
      <BottomNav />
    </ThemeProvider>
  );
};

export default HebrewWordsPage;
