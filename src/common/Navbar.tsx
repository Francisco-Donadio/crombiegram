import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SwitchTheme from "../components/SwitchTheme";
import { useThemeColorContext } from "../Context/ColorModeContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/system/Stack";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import BottomAppBar from "../components/BottomAppBar";
import { useUserContext } from "../Context/UserContext";

import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { Button } from "@mui/material";
import useFetch from "../Hooks/useFetch";

const settings = ["Profile", "Account", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { mode } = useThemeColorContext();
  const { firstName, profileImage, token, handleSetValues } = useUserContext();

  const handleFetch = useFetch();
  useEffect(() => {
    if (token != "") {
      const jsonResponse = handleFetch({
        path: "user/me",
        method: "GET",
      }).then((res) => {
        const { user } = res;
        handleSetValues("firstName", user.firstName);
        handleSetValues("lastName", user.lastName);
        handleSetValues("email", user.email);
        handleSetValues("profileImage", user.profileImage);
      });
    }
  }, [token]);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const handleLogout = async () => {
    const jsonResponse = handleFetch({
      path: "auth/login",
      method: "DELETE",
    });
    localStorage.removeItem("token");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar src="images/crombie-logo.png" variant="square" />

          <Typography
            variant="h6"
            sx={{
              ml: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "VT323",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/home" style={{ color: "#FFF" }}>
              Crombiegram
            </Link>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <BottomAppBar />
          </Box>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "VT323",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              justifyContent: "center",
            }}
          >
            <Link to="/home" style={{ color: "#FFF" }}>
              Crombiegram
            </Link>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "right",
              gap: 2,
            }}
          >
            <IconButton
              color="primary"
              key="home"
              onClick={handleCloseNavMenu}
              href="/home"
            >
              <HomeIcon fontSize="large" />
            </IconButton>
            <IconButton
              color="primary"
              key="events"
              onClick={handleCloseNavMenu}
            >
              <CalendarMonthIcon fontSize="large" />
            </IconButton>
            <IconButton
              color="primary"
              key="network"
              onClick={handleCloseNavMenu}
            >
              <GroupIcon fontSize="large" />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Stack spacing={3} direction="row">
              <SwitchTheme />

              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={firstName}
                    src={
                      "https://crombiegram-s3.s3.sa-east-1.amazonaws.com/" +
                      profileImage
                    }
                  />
                </IconButton>
              </Tooltip>
            </Stack>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="profile" onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <Button href="/profile">Profile</Button>
                </Typography>
              </MenuItem>
              <MenuItem key="logout" onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <Button href="/" onClick={handleLogout}>
                    Logout
                  </Button>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
