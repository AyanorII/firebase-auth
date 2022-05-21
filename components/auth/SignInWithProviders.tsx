import FacebookIcon from "@mui/icons-material/Facebook";
import GithubIcon from "@mui/icons-material/Github";
import GoogleIcon from "@mui/icons-material/Google";
import { Stack, Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import {
  auth,
  facebookAuthProvider,
  githubAuthProvider,
  googleAuthProvider,
} from "../../lib/firebase";

type Props = {};

const SignInWithProviders = (props: Props) => {
  const providers = [
    {
      icon: <GoogleIcon />,
      provider: googleAuthProvider,
    },
    {
      icon: <FacebookIcon />,
      provider: facebookAuthProvider,
    },
    {
      icon: <GithubIcon />,
      provider: githubAuthProvider,
    },
  ];

  return (
    <>
      <Typography variant="body1">
        or continue with these social profile
      </Typography>
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        direction="row"
      >

        {providers.map((prov, index) => {
          const { icon, provider } = prov;

          return (
            <Fab
              key={index}
              color="primary"
              size="medium"
              onClick={() => signInWith(provider)}
            >
              {icon}
            </Fab>
          );
        })}
      </Stack>
    </>
  );
};

export default SignInWithProviders;

const signInWith = async (provider: any) => {
  await auth.signInWithPopup(provider);
};
