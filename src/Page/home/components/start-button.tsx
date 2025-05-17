import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import FlyMoney from "../../../assets/moneyWing.webp";
import "../style.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../Routes/routes";
import useAuthStore from "../../../store/auth-store/store";
const StartButton = () => {
  const [rotate, setRotate] = useState(false);
  const { getAuthToken } = useAuthStore();
  const token = getAuthToken();
  const navigate = useNavigate();
  const handleClick = () => {
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
      if (token) {
        navigate(ROUTES.ONBOARD);
      } else {
        navigate(ROUTES.HOME);
      }
    }, 2000);
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
          animation: rotate
            ? "rotateCoin 2s ease-in-out"
            : "float 2s ease-in-out infinite",
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
