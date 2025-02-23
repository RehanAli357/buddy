import { Stack, Typography } from "@mui/material";
import FindImg from "../../../assets/findImg.webp";
import SaveImg from "../../../assets/SaveImg.webp";
import GrowImg from "../../../assets/chart.webp";
import {  useTabMobileView } from "../../../common/hook/responsie-hook";

const featuresData = [
  {
    img: FindImg,
    title: "Find",
    description:
      "Buddy will help you find and guide you on how to achieve your saving goals with smart strategies.",
  },
  {
    img: SaveImg,
    title: "Save",
    description:
      "After finding ways to save, Buddy will regularly remind you and keep track of your savings to ensure consistency.",
  },
  {
    img: GrowImg,
    title: "Grow",
    description:
      "Once you've saved, Buddy will guide you on how to grow your savings through investments and smart financial planning.",
  },
];

const Features = () => {
  const isBigTabView = useTabMobileView()
  return (
    <Stack
      mt={isBigTabView?10:15}
      flexWrap="wrap"
      alignItems="center"
      flexDirection="row"
      justifyContent="center"
      gap={4}
    >
      {featuresData.map((feature, index) => (
        <Stack
          key={index}
          bgcolor="primary.main"
          width={250}
          alignItems="center"
          padding={2}
          borderRadius={2}
          boxShadow={3}
          minHeight={400}
        >
          <img src={feature.img} alt={`${feature.title}-icon`} width={150} />
          <Typography textAlign="center" variant="h4" fontWeight="bold" mt={1} color="text.secondary">
            {feature.title}
          </Typography>
          <Typography textAlign="center" variant="h6" mt={1} color="secondary.main">
            {feature.description}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default Features;
