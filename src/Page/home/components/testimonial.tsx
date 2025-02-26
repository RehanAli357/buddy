import { Card, CardContent, Typography, Stack } from "@mui/material";
import { useMobileView } from "../../../common/hook/responsie-hook";

const testimonials = [
  {
    name: "Alex Johnson",
    feedback:
      "This platform has completely changed the way I manage my finances. Highly recommended!",
  },
  {
    name: "Sophia Carter",
    feedback:
      "I love how easy it is to set and track my savings goals. The reminders are a lifesaver!",
  },
  {
    name: "Michael Brown",
    feedback:
      "A simple and effective way to improve financial habits. Great for beginners and pros alike!",
  },
];

const Testimonial = () => {
  const isMobileView = useMobileView();
  return (
    <Stack my={10} alignItems="center">
      <Typography
        variant={isMobileView ? "h4" : "h2"}
        color="secondary.main"
        textAlign="center"
        mb={4}
      >
        What Our Users Say
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={3}
        px={2}
      >
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            sx={{
              width: isMobileView ? "90%" : "50%",
              p: 2,
              borderRadius: 3,
              boxShadow: 3,
              backgroundColor: "primary.main",
            }}
          >
            <CardContent>
              <Typography
                variant={isMobileView ? "h5" : "h6"}
                fontWeight="bold"
                textAlign="center"
                color="secondary.main"
              >
                {testimonial.name}
              </Typography>
              <Typography
                variant={isMobileView ? "h6" : "body1"}
                color="text.secondary"
                textAlign="center"
                mt={1}
              >
                "{testimonial.feedback}"
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};

export default Testimonial;
