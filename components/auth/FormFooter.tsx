import { Link as MUILink, Typography } from "@mui/material";
import NextLink from "next/link";
import { AuthType } from "../../lib/types";

const FormFooter = ({ method }: AuthType) => {
  return (
    <Typography variant="body1">
      {method === "login"
        ? "Don't have an account yet? "
        : "Already a member? "}
      <NextLink href={method === "login" ? "/signin" : "/login"} passHref>
        <MUILink>
          {method === "login" ? "Register" : "Login"}
        </MUILink>
      </NextLink>
    </Typography>
  );
};

export default FormFooter;
