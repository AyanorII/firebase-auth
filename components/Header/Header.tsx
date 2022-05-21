import { Box, Container, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Logo from "../Logo";
import HeaderUserMenu from "./HeaderUserMenu";

const Header = () => {
  return (
    <header>
      <AppBar color="transparent" position="relative">
        <Box py={2}>
          <Container>
            <Stack direction="row" justifyContent="space-between">
              <Logo />
              <HeaderUserMenu />
            </Stack>
          </Container>
        </Box>
      </AppBar>
    </header>
  );
};

export default Header;
