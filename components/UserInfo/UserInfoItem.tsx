import { Box, Divider, Grid, ListItem, Typography } from "@mui/material";
import UserAvatar from "../UserAvatar";

type Props = {
  field: string;
  value?: string;
  avatar?: boolean;
};

const UserInfoItem = ({ field, value, avatar }: Props) => {
  return (
    <>
      <ListItem>
        <Box py={2} sx={{ width: "100%" }}>
          <Grid container alignItems="center">
            <Grid item xs={4}>
              <Typography
                variant="body2"
                component="h3"
                color="gray"
                textTransform="uppercase"
              >
                {field}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              {avatar && <UserAvatar />}
              <Typography variant="body2" component="p" gutterBottom>
                {value}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </ListItem>
      <Divider />
    </>
  );
};

export default UserInfoItem;
