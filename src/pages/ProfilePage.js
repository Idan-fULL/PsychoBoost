import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app } from "../firebase"; // Ensure Firebase app is initialized
import "../styles/ProfilePage.css";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth(app); // Pass the app instance to getAuth
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  return (
    <div className="page-container">
      <button onClick={() => navigate(-1)} className="back-button">
        חזור
      </button>
      <div>
        {user ? (
          <div>
            <h1>Welcome, {user.displayName}</h1>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <p>Please sign in.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
