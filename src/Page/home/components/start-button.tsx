import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import FlyMoney from "../../../assets/moneyWing.webp";
import "../style.css"
const StartButton = () => {
  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setRotate(true);
    setTimeout(() => setRotate(false), 2000); // Reset after animation
  };

  return (
    <>
      <Stack
        sx={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundImage: `url(${FlyMoney})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          animation: rotate ? "rotateCoin 2s ease-in-out" : "float 2s ease-in-out infinite",
          cursor: "pointer",
        }}
        alignItems={"center"}
        justifyContent={"center"}
        onClick={handleClick} 
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "gold",
            textShadow: "1px 1px 5px rgba(0,0,0,0.5)",
          }}
        >
          Let's Start
        </Typography>
      </Stack>      
    </>
  );
};

export default StartButton;
