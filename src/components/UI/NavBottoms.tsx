import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";

const NavBottoms: FC = () => {
  const [value, setValue] = useState<number>(0);
  const navigate = useNavigate();

  const handleSubmit = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate("/tvshows");
    } else if (newValue === 1) {
      navigate("/films");
    }
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleSubmit}
      showLabels={true}
      style={{ borderRadius: "5px" }}
    >
      <BottomNavigationAction
        label="TV shows"
        icon={<TvIcon />}
        sx={{
          color: "black",
          "&:hover": {
            color: "blue", // Hover text color
            backgroundColor: "rgba(0, 0, 0, 0.1)", // Hover background color
            transition: "0.3s background-color easy",
          },
        }}
      />
      <BottomNavigationAction
        label="Films"
        icon={<MovieIcon />}
        sx={{
          color: "black",
          "&:hover": {
            color: "blue", // Hover text color
            backgroundColor: "rgba(0, 0, 0, 0.1)", // Hover background color
            transition: "0.3s background-color easy",
          },
        }}
      />
    </BottomNavigation>
  );
};

export default NavBottoms;
