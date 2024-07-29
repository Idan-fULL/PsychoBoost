// src/pages/LoginPage.js
import React from "react";
import { signInWithGoogle } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Typography,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

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
      fontSize: "2rem",
      fontWeight: "bold",
    },
    button: {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
  },
  shape: {
    borderRadius: 16,
  },
});

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/home"); // Navigate to home page after successful login
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box sx={{ my: 4, textAlign: "center" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            PsychoBoost
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{ borderRadius: 2 }}
          >
            התחברות עם גוגל
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
