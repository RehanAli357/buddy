import { Stack, Typography, Divider } from "@mui/material";
import Logo from "../../common/logo";

const Footer = () => {
  return (
    <Stack bgcolor="secondary.main" color="white" py={4} px={2} mt={10}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-around"
        textAlign="center"
        spacing={3}
      >
        <Stack alignItems={"center"}>
          <Typography variant="h6" color="text.secondary" fontWeight="bold">
            About Us
          </Typography>
          <Typography variant="body2" mt={1} fontFamily={"cursive"}>
            Our platform helps you track, save, and grow your finances
            effectively.
          </Typography>
          <Stack width={"fit-content"}>
          <Logo/>
          </Stack>
        </Stack>

        <Stack>
          <Typography variant="h6" color="text.secondary" fontWeight="bold">
            Quick Links
          </Typography>
          <Typography fontFamily={"cursive"} variant="body2" mt={1}>
            Home
          </Typography>
          <Typography fontFamily={"cursive"} variant="body2">
            Features
          </Typography>
          <Typography fontFamily={"cursive"} variant="body2">
            How It Works
          </Typography>
          <Typography fontFamily={"cursive"} variant="body2">
            Testimonials
          </Typography>
        </Stack>

        {/* Contact Section */}
        <Stack>
          <Typography variant="h6" fontWeight="bold" color="text.secondary">
            Contact
          </Typography>
          <Typography fontFamily={"cursive"} variant="body2" mt={1}>
            support@financebuddy.com
          </Typography>
          <Typography fontFamily={"cursive"} variant="body2">
            +1 234 567 890
          </Typography>
        </Stack>
      </Stack>

      {/* Divider */}
      <Divider sx={{ bgcolor: "white", my: 3 }} />

      {/* Disclaimer */}
      <Typography
        variant="body2"
        textAlign="center"
        px={2}
        fontSize="12px"
        fontFamily={"cursive"}
        color="text.secondary"
      >
        Disclaimer: The financial guidance provided on this platform is for
        informational purposes only. We do not guarantee specific financial
        outcomes. Please consult a financial expert before making major
        financial decisions.
      </Typography>

      {/* Copyright */}
      <Typography variant="body2" textAlign="center" mt={2}>
        © {new Date().getFullYear()} FinanceBuddy. All rights reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;
