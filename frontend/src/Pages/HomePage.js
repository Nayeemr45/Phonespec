import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import {
  Box,
  Paper,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Carousel from "../Components/Carousel";
import { Link } from "react-router-dom";
import Image from "../Assets/Images/6.jpg";
const useStyles = makeStyles({
  links: {
    textDecoration: "none",
    color: "#000",
    display: "grid",
    justifyContent: "center",
    padding: "1rem",
    "&:hover": {
      background: "#01424b",
      color: "#fff",
    },
  },
});

const HomePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  let isScreenSmall = false;
  let isScreenSmall2 = false;
  let isScreenMedium = false;
  let isScreenMedium2 = false;
  if (useMediaQuery(theme.breakpoints.down("sm"))) {
    isScreenSmall = true;
  }
  if (useMediaQuery(theme.breakpoints.down("md"))) {
    isScreenSmall2 = true;
  }
  if (useMediaQuery(theme.breakpoints.up("lg"))) {
    isScreenMedium = true;
  }
  if (useMediaQuery(theme.breakpoints.down("lg"))) {
    isScreenMedium2 = true;
  }
  useEffect(() => {});
  return (
    <div>
      <Navbar />
      <Box style={{ flexGrow: 1 }}>
        <Grid container>
          <Grid
            item
            xs={2}
            style={{
              minHeight: "100vh",
              height: "auto",
              display: isScreenSmall2 ? "none" : "grid",
            }}
          >
            <Grid>
              <Grid
                item
                xs={12}
                style={{
                  backgroundColor: "grey",
                  color: "#fff",
                  height: "3rem",
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Top Brands
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <List>
                  <Link to={`/Samsung`} className={classes.links}>
                    Samsung
                  </Link>
                  <Link to={`/Apple`} className={classes.links}>
                    Apple
                  </Link>
                  <Link to={`/Apple`} className={classes.links}>
                    Xiomi{" "}
                  </Link>
                  <Link to={`/Apple`} className={classes.links}>
                    Google
                  </Link>
                  <Link to={`/Apple`} className={classes.links}>
                    HUAWEI
                  </Link>
                  <Link to={`/Apple`} className={classes.links}>
                    Asus
                  </Link>
                  <Link to={`/Apple`} className={classes.links}>
                    Nokia
                  </Link>
                </List>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={10} style={{ backgroundColor: "white" }}>
            <Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    lg={6}
                    sx={{
                      // height: isScreenSmall ? "29rem" : "29rem",
                      height: isScreenMedium
                        ? "29rem"
                        : isScreenSmall
                        ? "15rem"
                        : "29rem",
                      width: "auto",
                    }}
                  >
                    <Carousel />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={6}
                    sx={{
                      display: isScreenSmall
                        ? "none"
                        : isScreenMedium2
                        ? "none"
                        : "flex",
                      height: isScreenSmall ? "29rem" : "29rem",
                      width: "auto",
                    }}
                  >
                    <Typography
                      variant="h1"
                      gutterBottom
                      style={{
                        color: "#000",
                        textAlign: "center",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Welcome to Phonespec
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  backgroundColor: "white",
                  minHeight: "20rem",
                  height: "auto",
                }}
              >
                <Typography
                  variant={isScreenSmall ? "h6" : "h5"}
                  gutterBottom
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    paddingTop: isScreenSmall ? "0.5rem" : "1rem",
                  }}
                >
                  Latest Phones
                </Typography>

                <Grid container>
                  {[0, 1, 2, 3, 4, 5, 6,].map(() => (
                    <Grid
                      item
                      xs={6}
                      sm={3}
                      md={3}
                      lg={2}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Card
                        sx={{
                          width: isScreenSmall ? "170px" : "170px",
                          height: "18rem",
                          boxShadow: "none",
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="230"
                            image={Image}
                            alt="green iguana"
                          />
                          <CardContent style={{ padding: "0.5rem" }}>
                            <Typography
                              align="center"
                              style={{ fontSize: "1rem" }}
                            >
                              Samsung S21 ultra
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  minHeight: "20rem",
                  height: "auto",
                }}
              >
                <Typography
                  variant={isScreenSmall ? "h6" : "h5"}
                  gutterBottom
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    paddingTop: isScreenSmall ? "0.5rem" : "1rem",
                  }}
                >
                  News
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
