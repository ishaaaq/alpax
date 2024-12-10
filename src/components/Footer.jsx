import React from "react";
import {
  Box,
  Grid2,
  Typography,
  Link,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const Text = styled(Typography)({
  color: "rgba(217, 217, 217, 1)",
  fotWeight: 400,
  fontSize: ".875rem",
});

const ColumnHeader = styled(Typography)({
  color: " #4576D4",
  fontWeight: 500,
  fontSize: "1rem",
});

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: "#FFFFFF",
        padding: isMobile ? "20px" : "40px",
        borderRadius: ".75rem",
        mt: "1.5rem",
      }}
    >
      <Grid2 container spacing={6}>
        {/* Left Section */}
        <Grid2 item xs={12} sm={4}>
          <Typography sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
            ALPAX
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: ".75rem",
              maxWidth: "26.4rem",
              mb: "3rem",
              mt: "2.5rem",
            }}
          >
            AEC (Architecture Engineering Consultancy) Nigerian Company
            Established To Provide First-Class Professional Specialist
            Consultancy Services To Corporate And Individual Clients.
          </Typography>
          <Stack direction={"column"} gap={"1rem"} mt={""}>
            <Text>Office Address should be written here</Text>
            <Text>Phone Number</Text>
            <Text>Email</Text>
          </Stack>
        </Grid2>

        {/* Center Section */}

        <Grid2 item xs={6} sm={2} mt={"4.5rem"}>
          <ColumnHeader>ALPAX</ColumnHeader>
          <Stack direction={"column"} gap={"1rem"} sx={{ marginTop: "1.5rem" }}>
            {[
              "Home",
              "Services",
              "Testimonials",
              "Case Studies",
              "About Us",
              "Contact",
            ].map((item, index) => (
              <Text key={index}>
                <Link href="#" color="inherit" underline="hover">
                  {item}
                </Link>
              </Text>
            ))}
          </Stack>
        </Grid2>

        {/* Services Section */}
        {!isMobile && (
          <Grid2 item xs={6} sm={4} mt={"4.5rem"}>
            <ColumnHeader>Services</ColumnHeader>
            <Stack
              direction={"column"}
              gap={"1rem"}
              sx={{ marginTop: "1.5rem" }}
            >
              {[
                "Architecture",
                "Electrical Engineering",
                "Mechanical Engineering",
                "Petroleum and Pipeline Engineering",
                "Oil and Gas Services",
                "Quantity Surveying",
                "Project Management",
                "Procurement Services",
                "Mechanical, Electrical and Plumbing (MEP)",
                "ICT",
                "Financial Services",
                "Economic Affairs Consultancy",
                "Agricultural Engineering",
              ].map((item, index) => (
                <Text key={index}>
                  <Link href="#" color="inherit" underline="hover">
                    {item}
                  </Link>
                </Text>
              ))}
            </Stack>
          </Grid2>
        )}

        {/* Helpful Links Section */}
        <Grid2 item xs={6} sm={2} mt={"4.5rem"}>
          <ColumnHeader>Helpful Links</ColumnHeader>
          <Stack direction={"column"} gap={"1rem"} sx={{ marginTop: "1.5rem" }}>
            {["Privacy Policy", "Partnership", "Help Centre", "FAQ"].map(
              (item, index) => (
                <Text key={index}>
                  <Link href="#" color="inherit" underline="hover">
                    {item}
                  </Link>
                </Text>
              )
            )}
          </Stack>
        </Grid2>
      </Grid2>

      <Box
        sx={{
          borderTop: "1px solid #FFFFFF",
          marginTop: "4rem",
          paddingTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Text>© All Right Reserved</Text>

        <Text>2024 Terms and Conditions</Text>
      </Box>
    </Box>
  );
};

export default Footer;
