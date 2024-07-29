import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} style={styles.backButton}>
      חזור
    </button>
  );
};

const styles = {
  backButton: {
    position: "absolute",
    top: "10px",
    left: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    zIndex: 1000,
  },
};

export default BackButton;
