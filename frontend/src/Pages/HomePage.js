import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar/Navbar";
import {
  Box,
  Grid,
  List,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Carousel from "../Components/Carousel";
import { Link } from "react-router-dom";
import ViewListIcon from "@mui/icons-material/ViewList";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { getLatestDevice } from "../Redux/Actions/DeviceActions";
import { getNews } from "../Redux/Actions/NewsActions";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
const useStyles = makeStyles({
  links: {
    textDecoration: "none",
    color: "#000",
    display: "grid",
    justifyContent: "center",
    padding: "1rem",
    "&:hover": {
      background: "#2f4649",
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
  const latestDeviceList = useSelector((state) => state.latestDeviceList);
  const { loading, error, latestDevice } = latestDeviceList;
  const News = useSelector((state) => state.newsList);
  const { newsloading, newserror, news } = News;

  // {
  //   news
  //     ? Object.keys(news.data?.news).map((item) =>
  //         console.log("news1-----", news?.data.news[item].news_title)
  //       )
  //     : console.log("news-----", news);
  // }
  const dispatch = useDispatch();
  useEffect(() => {
    if (!latestDevice) {
      dispatch(getLatestDevice());
      dispatch(getNews());
    }
  }, [dispatch, latestDevice]);

  return (
    <div>
      <ScrollToTop
        smooth
        top={150}
        color="white"
        style={{
          backgroundColor: "#4d7277",
          right: "5px",
        }}
      />
      <Navbar />
      <Box style={{ flexGrow: 1, minHeight: "100vh" }}>
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
                  backgroundColor: "#416165",
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
                <Grid container style={{ padding: "0px 5px" }}>
                  <Grid item xs={11}>
                    <Typography
                      variant={isScreenSmall ? "h6" : "h5"}
                      gutterBottom
                      style={{
                        color: "#000",
                        fontWeight: "bold",
                        paddingTop: isScreenSmall ? "0.5rem" : "1rem",
                      }}
                    >
                      Latest Devices
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Link
                      to={`/latest`}
                      style={{ cursor: "pointer", textDecoration: "none" }}
                    >
                      <Typography
                        variant={isScreenSmall ? "h6" : "h5"}
                        gutterBottom
                        style={{
                          color: "#000",
                          fontSize: isScreenSmall ? "0.8rem" : "1rem",
                          paddingTop: "1rem",
                          textAlign: "end",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "end",
                        }}
                      >
                        <ViewListIcon />
                        ViewAll
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
                <Grid container>
                  {loading || error ? (
                    <>
                      {(isScreenSmall
                        ? [0, 1]
                        : isScreenSmall2
                        ? [0, 1, 2, 3]
                        : [0, 1, 2, 3, 4, 5]
                      ).map((i) => (
                        <Grid
                          item
                          xs={6}
                          sm={3}
                          md={3}
                          lg={2}
                          style={{
                            display: "grid",
                            justifyContent: "center",
                          }}
                          key={i}
                        >
                          <Skeleton
                            sx={{ bgcolor: "grey.400" }}
                            variant="rectangular"
                            width={isScreenSmall ? 150 : 170}
                            height={230}
                          />
                          <Skeleton
                            sx={{
                              bgcolor: "grey.400",
                              marginLeft: "2rem",
                            }}
                            variant="text"
                            width={100}
                            height={20}
                          />
                        </Grid>
                      ))}
                    </>
                  ) : (
                    <>
                      {latestDevice ? (
                        Object.keys(latestDevice.data?.phones)
                          .slice(0, 6)
                          .map((item) => (
                            <Grid
                              item
                              xs={6}
                              sm={3}
                              md={3}
                              lg={2}
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                              key={latestDevice?.data.phones[item].slug}
                            >
                              <Card
                                sx={{
                                  width: isScreenSmall ? "170px" : "170px",
                                  height: "20rem",
                                  boxShadow: "none",
                                }}
                              >
                                <Link
                                  to={`/device/${latestDevice?.data.phones[item].slug}`}
                                >
                                  <CardMedia
                                    component="img"
                                    width="120"
                                    height="230"
                                    image={latestDevice?.data.phones[item].image}
                                    alt="green iguana"
                                  />
                                </Link>
                                <CardContent style={{ padding: "0.5rem" }}>
                                  <Link
                                    to={`/device/${latestDevice?.data.phones[item].slug}`}
                                    style={{
                                      textDecoration: "none",
                                      color: "#000",
                                    }}
                                  >
                                    <Typography
                                      align="center"
                                      style={{ fontSize: "1rem" }}
                                    >
                                      {
                                        latestDevice?.data.phones[item]
                                          .phone_name
                                      }
                                    </Typography>
                                  </Link>
                                </CardContent>
                              </Card>
                            </Grid>
                          ))
                      ) : (
                        <></>
                      )}
                    </>
                  )}
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
                <Grid container style={{ padding: "0px 5px" }}>
                  <Grid item xs={11}>
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
                  <Grid item xs={1}>
                    <Link
                      to={`/news`}
                      style={{ cursor: "pointer", textDecoration: "none" }}
                    >
                      <Typography
                        variant={isScreenSmall ? "h6" : "h5"}
                        gutterBottom
                        style={{
                          color: "#000",
                          fontSize: isScreenSmall ? "0.8rem" : "1rem",
                          paddingTop: "1rem",
                          textAlign: "end",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "end",
                        }}
                      >
                        <ViewListIcon />
                        ViewAll
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
                <Grid container>
                  {newsloading || newserror ? (
                    <>
                      {(isScreenSmall
                        ? [0, 1]
                        : isScreenSmall2
                        ? [0, 1, 2, 3]
                        : [0, 1, 2, 3, 4, 5]
                      ).map((i) => (
                        <Grid
                          item
                          xs={6}
                          sm={3}
                          md={3}
                          lg={2}
                          style={{
                            display: "grid",
                            justifyContent: "center",
                          }}
                          key={i}
                        >
                          <Skeleton
                            sx={{ bgcolor: "grey.400" }}
                            variant="rectangular"
                            width={isScreenSmall ? 150 : 170}
                            height={230}
                          />
                          <Skeleton
                            sx={{
                              bgcolor: "grey.400",
                              marginLeft: "2rem",
                            }}
                            variant="text"
                            width={100}
                            height={20}
                          />
                        </Grid>
                      ))}
                    </>
                  ) : (
                    <>
                      {news ? (
                        Object.keys(news.data?.news)
                          .slice(0, 6)
                          .map((item) => (
                            <Grid
                              item
                              xs={12}
                              sm={6}
                              md={6}
                              lg={4}
                              xl={3}
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                              key={news?.data.news[item].news_title}
                            >
                              <Card
                                sx={{
                                  width: isScreenSmall ? "340px" : "370px",
                                  height: "32rem",
                                  minHeight: "28rem",
                                  boxShadow: "none",
                                }}
                              >
                                {/* <Grid container>
                                  <Grid item xs={7} md={7}> */}
                                    <Link to={`/${news?.data.news[item].slug}`}>
                                      <CardMedia
                                        component="img"
                                        width="auto"
                                        height="300"
                                        image={news?.data.news[item].image}
                                        alt="green iguana"
                                      />
                                    </Link>
                                  {/* </Grid>
                                  <Grid item xs={5} md={5}> */}
                                    <CardContent style={{ padding: "0.5rem" }}>
                                      <Link
                                        to={`/${news?.data.news[item].slug}`}
                                        style={{
                                          textDecoration: "none",
                                          color: "#000",
                                        }}
                                      >
                                        <Typography
                                          align="center"
                                          style={{
                                            fontSize: "0.9rem",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          {news?.data.news[item].news_title}
                                        </Typography>
                                      </Link>
                                      <Typography
                                        align="center"
                                        style={{
                                          fontSize: "0.8rem",
                                          textAlign: "left",
                                        }}
                                      >
                                        {news?.data.news[item].description}
                                      </Typography>
                                      <Tooltip title="Review Date">
                                        <Typography
                                          align="center"
                                          style={{
                                            fontSize: "0.8rem",
                                            textAlign: "right",
                                            opacity: "0.6",
                                            display: "flex",
                                            justifyContent: "end",
                                          }}
                                        >
                                          <AccessTimeIcon fontSize="small" />
                                          {news?.data.news[item].reviewDate}
                                        </Typography>
                                      </Tooltip>
                                    </CardContent>
                                  {/* </Grid>
                                </Grid> */}
                              </Card>
                            </Grid>
                          ))
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default HomePage;
