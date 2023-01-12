import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardActionArea from "@mui/material/CardActionArea";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import IconButton from "@mui/material/IconButton";

type PostPropsType = {
  firstName: string;
  lastName: string;
  contentText: string;
  imageName?: string;
};

const Post: React.FC<PostPropsType> = ({
  firstName,
  lastName,
  contentText,
  imageName,
}) => {
  return (
    <div className="postCard">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              FD
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Francisco Donadio"
          subheader="Full stack developer"
        />
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`https://crombiegram-s3.s3.sa-east-1.amazonaws.com/${imageName}`}
            alt="foto"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Titulo
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {contentText}
            </Typography>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ChatBubbleIcon />
              </IconButton>
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Post;
