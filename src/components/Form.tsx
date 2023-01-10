import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import Input from "./Input";

const Form = (props: { isRegistered: boolean }) => {
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src="images/logo.png" alt="logo" className="logo" />

        <form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          {props.isRegistered === false && (
            <Input type="password" placeholder="Confirm Password" />
          )}
          <Button
            variant="contained"
            color={props.isRegistered ? "primary" : "secondary"}
          >
            {props.isRegistered ? "Login" : "Register"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Form;
