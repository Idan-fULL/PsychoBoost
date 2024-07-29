import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LearnWordsPage = lazy(() => import("./pages/LearnWordsPage"));
const HebrewWordsPage = lazy(() => import("./pages/HebrewWordsPage"));
const EnglishWordsPage = lazy(() => import("./pages/EnglishWordsPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const UnitPage = lazy(() => import("./pages/UnitPage"));
const ComprehensiveLearningPage = lazy(() =>
  import("./pages/ComprehensiveLearningPage")
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/learn-words" element={<LearnWordsPage />} />
          <Route path="/learn-words/hebrew" element={<HebrewWordsPage />} />
          <Route path="/learn-words/english" element={<EnglishWordsPage />} />
          <Route path="/unit/:language/:unitId" element={<UnitPage />} />
          <Route
            path="/learn/:language/:unitId/comprehensive"
            element={<ComprehensiveLearningPage />}
          />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
