import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        px: 2,
        mt: "auto",
        backgroundColor: "#2f4649",
        color: "#fff",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">Phonespec.</Typography>
        <Copyright />
      </Container>
    </Box>
  );
};
function Copyright() {
  return (
    <Typography variant="body2" color="#fff">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Phonespec
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default Footer;
