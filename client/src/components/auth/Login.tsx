import { Link as RouterLink } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";

const Login = () => {
  return (
    <>
      <Auth submitLabel="Login" onSubmit={async () => {}}>
        <MUILink
          component={RouterLink}
          to="/signup"
          sx={{ alignSelf: "center" }}
        >
          Signup
        </MUILink>
      </Auth>
    </>
  );
};

export default Login;
