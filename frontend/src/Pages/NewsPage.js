import React, { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import Navbar from "../Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Tooltip,
  Container,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { getNews } from "../Redux/Actions/NewsActions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "../Components/Footer/Footer";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

const NewsPage = ({ location }) => {
  const theme = useTheme();
  let isScreenSmall = false;
  let isScreenSmall2 = false;
  if (useMediaQuery(theme.breakpoints.down("sm"))) {
    isScreenSmall = true;
  }
  if (useMediaQuery(theme.breakpoints.down("md"))) {
    isScreenSmall2 = true;
  }

  const News = useSelector((state) => state.newsList);
  const { newsloading, newserror, news } = News;

  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews(page));
  }, [dispatch, page]);

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
      <Link
        to={`/`}
        style={{
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <Typography
          variant={isScreenSmall ? "h6" : "h5"}
          gutterBottom
          style={{
            color: "#000",
            fontSize: isScreenSmall ? "0.8rem" : "1rem",
            paddingTop: "1rem",
            paddingLeft: "1rem",
            textAlign: "end",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ArrowBackIcon />
          Back
        </Typography>
      </Link>
      <Container maxWidth="xl">
        <Typography
          variant={isScreenSmall ? "h6" : "h5"}
          gutterBottom
          style={{
            color: "#000",
            fontWeight: "bold",
            paddingTop: isScreenSmall ? "0.5rem" : "1rem",
          }}
        >
          All Latest news
        </Typography>
        <Grid container style={{ marginTop: 20, minHeight: "100vh" }}>
          {newsloading || newserror ? (
            <>
              {(isScreenSmall ? [0] : isScreenSmall2 ? [0, 1] : [0, 1, 2]).map(
                (i) => (
                  <Grid
                    item
                    xs={6}
                    sm={3}
                    md={3}
                    lg={4}
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
                    {/* <Skeleton
                    sx={{
                      bgcolor: "grey.400",
                      marginLeft: "2rem",
                    }}
                    variant="text"
                    width={100}
                    height={20}
                  /> */}
                  </Grid>
                )
              )}
            </>
          ) : (
            <>
              {news ? (
                Object.keys(news.data?.news).map((item) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    key={news?.data.news[item].news_title}
                  >
                    <Card
                      sx={{
                        width: isScreenSmall ? "370px" : "auto",
                        height: "auto",
                        minHeight: "22rem",
                        boxShadow: "none",
                      }}
                      key={news?.data.news[item].news_title}
                    >
                      <Grid container>
                        <Grid item xs={7} md={7}>
                          <Link to={`/${news?.data.news[item].slug}`}>
                            <CardMedia
                              component="img"
                              width="auto"
                              height="300"
                              image={news?.data.news[item].image}
                              alt="green iguana"
                            />
                          </Link>
                        </Grid>
                        <Grid item xs={5} md={5}>
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
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                ))
              ) : (
                <></>
              )}
            </>
          )}
        </Grid>
        <Grid item xs={12}>
          <Pagination
            page={page}
            count={news?.data.last_page}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "2rem 0rem",
            }}
            color="primary"
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`/news${item.page === 1 ? "" : `?page=${item.page}`}`}
                {...item}
              />
            )}
          />
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default NewsPage;
