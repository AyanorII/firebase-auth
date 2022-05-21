import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Button,
  Divider,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useContext, useState } from "react";
import { UserContext } from "../../pages/_app";
import SignOutButton from "../auth/SignOutButton";
import UserAvatar from "../UserAvatar";

type MenuType = {
  anchorEl: any;
  open: boolean;
};

const HeaderUserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<MenuType>({
    open: false,
    anchorEl: null,
  });

  const handleMenu = (e: any): void => {
    setIsMenuOpen((prevState: MenuType) => ({
      anchorEl: e.currentTarget,
      open: !prevState.open,
    }));
  };

  const closeMenu = (): void => {
    setIsMenuOpen({
      anchorEl: null,
      open: false,
    });
  };

  const user: any = useContext(UserContext);
  const { anchorEl, open } = isMenuOpen;

  return (
    <Stack direction="row" className="header__user">
      {user && (
        <>
          <UserAvatar />
          <Button onClick={(e) => handleMenu(e)}>
            <Stack direction="row" alignItems="center">
              {user.displayName && (
                <Typography variant="body1" textTransform="capitalize">
                  {user.displayName}
                </Typography>
              )}
              {/* If user logged with email, then display email */}
              {!user.displayName && (
                <Typography variant="body1" textTransform="lowercase">
                  {user.email}
                </Typography>
              )}
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDown />}
            </Stack>
          </Button>
        </>
      )}
      <Menu
        open={open}
        onClose={closeMenu}
        anchorEl={anchorEl}
        sx={{ marginTop: "0.5rem" }}
      >
        <MenuItem>
          <Link href="/edit">My Profile</Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <SignOutButton />
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export default HeaderUserMenu;
