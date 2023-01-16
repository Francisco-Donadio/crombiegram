import React from "react";
import Image from "mui-image";
import Box from "@mui/system/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Edit from "@mui/icons-material/Edit";

const Profile = () => {
  return (
    <Box>
      <Card
        sx={{
          borderRadius: 5,
          mt: 5,
          ml: "20%",
          mr: "20%",
        }}
        elevation={10}
      >
        <Image
          src="images/colors.png"
          height={250}
          width={1250}
          fit="fill"
          duration={0}
          easing="cubic-bezier(0.7, 0, 0.6, 1)"
          showLoading={false}
          errorIcon={true}
          shift={null}
          distance="100px"
          shiftDuration={900}
          bgColor="inherit"
        />
        <CardMedia
          image="images/Yo.JPG"
          sx={{
            height: 150,
            width: 150,
            borderRadius: 50,
            border: 5,
            borderColor: "#8e44ad",
            ml: 5,
            mt: 1,
          }}
          title="profile"
        />
        <Box sx={{ m: 5 }}>
          <Typography variant="h5">Francisco Donadio</Typography>
          <Typography>Full Stack Developer</Typography>
        </Box>
        <Fab
          color="primary"
          aria-label="edit"
          sx={{
            position: "relative",
            ml: "90%",
            mb: 1,
          }}
        >
          <Edit fontSize="small" />
        </Fab>
      </Card>
    </Box>
  );
};

export default Profile;
