import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, Settings, Person } from "@mui/icons-material";

const BottomNav = () => {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  React.useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#6200ea",
        borderRadius: 2,
      }}
    >
      <BottomNavigationAction
        component={Link}
        to="/home"
        label="בית"
        value="/home"
        icon={<Home />}
        sx={{
          "& .MuiBottomNavigationAction-label": {
            fontSize: "1.2rem",
            fontWeight: "bold",
          },
        }}
      />
      <BottomNavigationAction
        component={Link}
        to="/settings"
        label="הגדרות"
        value="/settings"
        icon={<Settings />}
        sx={{
          "& .MuiBottomNavigationAction-label": {
            fontSize: "1.2rem",
            fontWeight: "bold",
          },
        }}
      />
      <BottomNavigationAction
        component={Link}
        to="/profile"
        label="פרופיל"
        value="/profile"
        icon={<Person />}
        sx={{
          "& .MuiBottomNavigationAction-label": {
            fontSize: "1.2rem",
            fontWeight: "bold",
          },
        }}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
