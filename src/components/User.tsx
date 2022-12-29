import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";

function User() {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#fc427b" }} aria-label="recipe">
              FD
            </Avatar>
          }
          title="Francisco Donadio"
          subheader="Full stack developer"
        />
      </Card>
    </div>
  );
}

export default User;
