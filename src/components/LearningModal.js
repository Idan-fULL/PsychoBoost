import React from "react";
import { Box, Modal, Typography, Button } from "@mui/material";
import "../styles/LearningModal.css";

const LearningModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="learning-modal"
    >
      <Box className="modal-content">
        <Typography id="modal-title" variant="h4" component="h2" gutterBottom>
          מצב לימוד
        </Typography>
        <Typography id="modal-description" variant="body1" gutterBottom>
          בחרו במצב הלימוד הרצוי.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert("FlashCards mode selected")}
          className="modal-button"
        >
          מצב כרטיסי פלאש
        </Button>
      </Box>
    </Modal>
  );
};

export default LearningModal;
