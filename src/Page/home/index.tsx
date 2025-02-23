import { Stack,  } from "@mui/material";
import { HomePageStyle } from "./home-page.style";
import HomeBanner from "./components/home-banner";
import StartButton from "./components/start-button";
import Features from "./components/features";
import HowItWork from "./components/how-it-work";
import Testimonial from "./components/testimonial";

const HomePage = () => {
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
