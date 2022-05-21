import { Box, Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import { useContext } from "react";
import SignOutButton from "../components/auth/SignOutButton";
import Header from "../components/Header/Header";
import UserInfo from "../components/UserInfo/UserInfo";
import { UserContext } from "../pages/_app";

const Home: NextPage = () => {
  const user: any = useContext(UserContext);

  return (
    <>
      <Header />
      {user && (
        <Box mt={5}>
          <Container>
            <Typography variant="h3" component="h1" align="center" gutterBottom>
              Personal Info
            </Typography>
            <Typography variant="body1" color="GrayText" align="center">
              Basic info, like your name and photo
            </Typography>
            <UserInfo />
          </Container>
        </Box>
      )}
    </>
  );
};

export default Home;
