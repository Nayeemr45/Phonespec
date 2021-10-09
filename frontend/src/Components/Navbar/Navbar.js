import React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { Color } from "../../Theme/Color";

const Navbar = () => {
  let isScreenMidium = false;
  const theme = useTheme();
  if (useMediaQuery(theme.breakpoints.down("md"))) {
    isScreenMidium = true;
  }
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
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
      [theme.breakpoints.up("sm")]: {
        width: "40ch",
        "&:focus": {
          width: "40ch",
        },
      },
    },
  }));
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Brands", "Latest", "News", "Contact"].map((text, index) => (
          <Link
            key={text}
            to={`/${text.toLowerCase()}`}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <ListItem button key={text}>
              {/* <ListItemIcon>
              {index === 0 ? (
                <InboxIcon />
              ) : index === 1 ? (
                <InboxIcon />
              ) : index === 2 ? (
                <InboxIcon />
              ) : index === 3 ? (
                <InboxIcon />
              ) : (
                <MailIcon />
              )}
            </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: Color.Primary }}>
          {" "}
          {/* #01424b */}
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              style={{
                marginRight: 2,
                display: isScreenMidium ? "block" : "none",
              }}
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
              <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {list("left")}
              </Drawer>
            </IconButton>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: { xs: 1, lg: 0.5 },
                  display: { xs: "none", sm: "block" },
                  cursor: "pointer",
                }}
              >
                Phonespec
              </Typography>
            </Link>
            <Box
              sx={{
                flexGrow: { md: 0.5, lg: 1 },
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Link
                to="/brands"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  sx={{ flexGrow: 0, cursor: "pointer", margin: "0px 30px" }}
                >
                  Brands
                </Typography>
              </Link>
              <Link
                to="/latest"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  sx={{ flexGrow: 0, cursor: "pointer", margin: "0px 30px" }}
                >
                  Latest
                </Typography>
              </Link>
              <Link
                to="/news"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  sx={{ flexGrow: 0, cursor: "pointer", margin: "0px 30px" }}
                >
                  News
                </Typography>
              </Link>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  sx={{ flexGrow: 0, cursor: "pointer", margin: "0px 30px" }}
                >
                  Contact
                </Typography>
              </Link>
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
