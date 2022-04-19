import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Login from "./login";

const Auth = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0}>
        <Box
          sx={{
            mx: "auto",
            display: "flex",
            alignItems: "center",
            maxWidth: 320,
            height: "100%"
          }}
        >
          <Login />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Auth;
