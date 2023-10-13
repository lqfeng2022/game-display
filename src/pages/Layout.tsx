import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      {/* 7)add some padding here */}
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
