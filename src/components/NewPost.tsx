import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { ChangeEventHandler, useRef, useState, useEffect } from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
// import fetchAPI from "../lib/apiFetch";
import useFetch from "../Hooks/useFetch";

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const NewPost = () => {
  const [open, setOpen] = useState(false);

  const inputFile = useRef<any>(null);
  const [file, setFile] = useState<File | null>();
  console.log(file);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    setFile(e.target.files[0]);
  };

  // useEffect(() => {
  //   // fetchAPI("/post", {
  //   //   method: "POST",
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   // }).then((data) => {
  //   //   console.log(data);
  //   // });
  //   fetchAPI("/post").then((data) => {
  //     console.log(data);
  //   });
  // }, []);

  const handleImage = () => {
    let formData = new FormData(); //formdata object

    formData.append("file", "ABC"); //append the values with key, value pair

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
  };

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Crear Post"
        sx={{
          position: "fixed",
          bottom: 20,
          right: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500}>John Doe</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          {file && (
            <img
              src={URL.createObjectURL(
                new Blob([file], { type: "application/zip" })
              )}
              alt=""
              width={200}
              height={200}
            />
          )}
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <IconButton>
              <EmojiEmotions color="primary" />
            </IconButton>
            <input
              style={{ display: "none" }}
              type="file"
              onChange={handleChange}
              ref={inputFile}
            />

            <IconButton onClick={() => inputFile.current!.click()}>
              <Image color="secondary" />
            </IconButton>

            <IconButton>
              <PersonAdd color="error" />
            </IconButton>
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Crear</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default NewPost;