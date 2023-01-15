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
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/system/Stack";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import BottomAppBar from "../components/BottomAppBar";
import { useUserContext } from "../Context/UserContext";
import useFetch from "../Hooks/useFetch";

const pages = ["Home", "Network", "Events"];
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
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
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
            <IconButton color="primary" key="home" onClick={handleCloseNavMenu}>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
