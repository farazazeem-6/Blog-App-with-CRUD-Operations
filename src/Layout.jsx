import { Container } from "@mui/material";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </Container>
  );
}

export default Layout;
