import { Stack, Typography } from "@mui/material";
import ChartImage from "../../../assets/chart.webp";
import HeroImage from "../../../assets/hero-image.webp";

const HomeBanner = () => {
  return (
    <>
      <Stack spacing={4} sx={{ padding: 3 }}>
        <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
          <Typography
            color="secondary.main"
            variant="h2"
            fontWeight="medium"
            sx={{ mr: 2 }}
          >
            With Buddy Save More
          </Typography>
          <img src={ChartImage} alt="chart" width={80} />
        </Stack>

        <Typography
          color="text.secondary"
          variant="h5"
          fontWeight={300}
          sx={{ lineHeight: 1.5, maxWidth: "600px" }}
        >
          Buddy helps you achieve all the savings you want, so you can save more
          and reach your financial goals effortlessly.
        </Typography>
      </Stack>
      <img
        src={HeroImage}
        alt="hero-image"
        width="100%"
        style={{ maxWidth: "600px", borderRadius: "16px" }}
      />
    </>
  );
};

export default HomeBanner;
