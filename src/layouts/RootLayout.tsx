import Sidebar from "../pages/Sidebar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import axiosInstance from "../lib/axios";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "../stores";
import { SET_LOGIN } from "../stores/slice/authSlice";
import Profile from "../pages/Profile";
import Suggestion from "../components/Suggestion";
import Footer from "../components/Footer";

interface RootLayoutProps {
  isFull?: boolean;
}

const RootLayout: React.FC<RootLayoutProps> = ({ isFull }) => {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const checkToken = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const res = await axiosInstance.get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(SET_LOGIN({ user: res.data.data, token }));
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    checkToken();
  }, []);

  return (
    <Box
      display="flex"
      sx={{
        backgroundColor: "#1d1d1d",
      }}
    >
      {/* Fixed Sidebar */}
      <Box
        position="fixed"
        p={{ base: "1%", lg: "1%" }}
        ml={{base: '8px', lg: "0px"}}
        width={{ base: "60px", lg: "300px" }}
        backgroundColor="#1d1d1d"
        zIndex={1}
      >
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Box
        ml={{ base: "70px", lg: "300px" }}
        flex={2.5}
        borderLeftWidth={2}
        borderRightWidth={2}
        borderColor="#3F3F3F"
        overflowY="auto"
        height="100vh"
        style={{ scrollbarWidth: "none" }}
      >
        <Outlet />
      </Box>

      <Box flex={1.5} p="1%" display={{ base: "none", lg: "block" }}>
        {isFull ? (
          <>{auth.user && <Profile />}</>
        ) : (
          <>
            {auth.user && <Suggestion />}
            {auth.user && <Footer />}
          </>
        )}
      </Box>
    </Box>
  );
};

export default RootLayout;
