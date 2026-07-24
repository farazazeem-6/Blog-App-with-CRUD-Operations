import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <Box component="main" sx={{ minHeight: "calc(100vh - 180px)" }}>
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
}

export default Layout;
