import { Link as RouterLink } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";

const Signup = () => {
  return (
    <Auth submitLabel="Signup" onSubmit={async () => {}}>
      <MUILink
        component={RouterLink}
        to="/login"
        sx={{ alignSelf: "center" }}
      >
        Login
      </MUILink>
    </Auth>
  );
};

export default Signup;
