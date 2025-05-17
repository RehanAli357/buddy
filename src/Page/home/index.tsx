import { Stack } from "@mui/material";
import { HomePageStyle } from "./home-page.style";
import HomeBanner from "./components/home-banner";
import StartButton from "./components/start-button";
import Features from "./components/features";
import HowItWork from "./components/how-it-work";
import Testimonial from "./components/testimonial";
import { useGetUser } from "../../apis/user-hook/query";
import { toast } from "react-toastify";
import useAuthStore from "../../store/auth-store/store";
import { useEffect } from "react";

const HomePage = () => {
  const { getAuthToken, addUser } = useAuthStore();
  const token = getAuthToken();
  const { data, error } = useGetUser(token ? token : "");

  useEffect(() => {
    if (error) {
      toast("No user found");
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      addUser(
        data._id,
        data.username,
        data.firstname,
        data.lastname,
        data.email,
        data.usertype,
        data.password
      );
    }
  }, [data, addUser]);

  return (
    <>
      <Stack alignItems={"center"} width={"100%"}>
        <HomePageStyle>
          <HomeBanner />
          <StartButton/>
        </HomePageStyle>
      </Stack>
      <Features/>
      <HowItWork/>
      <Testimonial/>
    </>
  );
};

export default HomePage;
