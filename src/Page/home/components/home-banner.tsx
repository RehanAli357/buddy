import { Stack, Typography } from "@mui/material";
import ChartImage from "../../../assets/chart.webp";
import HeroImage from "../../../assets/hero-image.webp";
import {
  useBigTabView,
  useMobileView,
  useSmallTabView,
} from "../../../common/hook/responsie-hook";

const HomeBanner = () => {
  const isBigTabView = useBigTabView();
  const isSmallTabView = useSmallTabView();
  const isMobileView = useMobileView();
  return (
    <>
      <Stack spacing={4} sx={{ padding: 3 }} alignItems={"center"}>
        <Stack
          sx={{
            flexDirection: isMobileView ? "column" : "row",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Typography
            color="secondary.main"
            variant={
              isBigTabView
                ? "h3"
                : isSmallTabView
                ? "h4"
                : isMobileView
                ? "h4"
                : "h2"
            }
            textAlign={"center"}
            fontWeight="medium"
          >
            With Buddy Save More
          </Typography>
          <img
            src={ChartImage}
            alt="chart"
            width={
              isBigTabView ? 60 : isSmallTabView ? 50 : isMobileView ? 55 : 80
            }
            style={{ marginLeft: "20px" }}
          />
        </Stack>

        <Typography
          color="text.secondary"
          variant={isSmallTabView || isMobileView ? "h5" : "h4"}
          fontWeight={300}
          textAlign={"center"}
          sx={{ lineHeight: 1.5, maxWidth: isMobileView ? "100%" : "80%" }}
        >
          Buddy helps you achieve all the savings you want, so you can save more
          and reach your financial goals effortlessly.
        </Typography>
      </Stack>
      <Stack alignItems={"center"} mt={isMobileView ?-2:-5}>
        <img
          src={HeroImage}
          alt="hero-image"
          width="100%"
          style={{ maxWidth: "38%", borderRadius: "16px" }}
        />
      </Stack>
    </>
  );
};

export default HomeBanner;
