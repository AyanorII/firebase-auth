import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import { auth } from "../../lib/firebase";

type Props = {};

const SignOutButton = (props: Props) => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <Button variant="text" color="error" onClick={() => signOut()} startIcon={<LogoutIcon />}>
      Logout
    </Button>
  );
};

export default SignOutButton;
