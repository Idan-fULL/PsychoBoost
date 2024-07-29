// LearningOverlay.js
import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import SchoolIcon from "@mui/icons-material/School";
import QuizIcon from "@mui/icons-material/Quiz";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import "../styles/LearningOverlay.css";

const LearningOverlay = ({ show, onClose }) => {
  return (
    <div className={`overlay-background ${show ? "show" : ""}`}>
      <div className={`overlay ${show ? "show" : ""}`}>
        <Box className="overlay-content">
          <Typography variant="h6" component="div">
            איך נלמד היום?
          </Typography>
          <Divider sx={{ my: 2 }} />
          <List>
            <ListItem button>
              <ListItemIcon>
                <FlashOnIcon />
              </ListItemIcon>
              <ListItemText primary="פלאשקארד" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="למידה" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <QuizIcon />
              </ListItemIcon>
              <ListItemText primary="מבחן" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CompareArrowsIcon />
              </ListItemIcon>
              <ListItemText primary="התאמה" />
            </ListItem>
          </List>
          <Button
            variant="contained"
            color="secondary"
            onClick={onClose}
            sx={{ mt: 2 }}
          >
            סגור
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default LearningOverlay;
