import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Typography,
  useMediaQuery,
  // Card,
  // CardContent,
  // CardMedia,
  Skeleton,
  Container,
  Avatar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Color } from "../Theme/Color";
import { getDeviceDetails } from "../Redux/Actions/DeviceActions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "../Components/Footer/Footer";
const DeviceDetailsPage = ({ match }) => {
  const slug = match.params.slug;

  const theme = useTheme();

  let isScreenSmall = false;
  // let isScreenSmall2 = false;

  if (useMediaQuery(theme.breakpoints.down("sm"))) {
    isScreenSmall = true;
  }
  // if (useMediaQuery(theme.breakpoints.down("md"))) {
  //   isScreenSmall2 = true;
  // }

  const deviceInfo = useSelector((state) => state.deviceDetails);
  const { loading, error, device } = deviceInfo;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeviceDetails(slug));
  }, [dispatch, slug]);

  return (
    <div>
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
      <Container
        maxWidth="lg"
        style={{ minHeight: "100vh", paddingBottom: "5rem" }}
      >
        {loading || error ? (
          <Skeleton
            sx={{ bgcolor: "grey.400" }}
            variant="rectangular"
            width={isScreenSmall ? 150 : 170}
            height={230}
          />
        ) : (
          <>
            {device ? (
              <>
                <Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={12} lg={6} style={{ maxHeight: "38rem" }}>
                        <Avatar
                          variant="rounded"
                          src={device.data?.phone_images[0]}
                          style={{
                            maxWidth: "28rem",
                            maxHeight: "38rem",
                            width: "auto",
                            height: "auto",
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        lg={6}
                        style={{ maxHeight: isScreenSmall ? "14rem" : "38rem" }}
                      >
                        <Typography
                          variant={isScreenSmall ? "h5" : "h4"}
                          gutterBottom
                          style={{
                            color: Color.Heading,
                            paddingTop: isScreenSmall ? "0.5rem" : "1rem",
                          }}
                        >
                          {device.data?.brand} {device.data?.phone_name}
                        </Typography>
                        <Grid container>
                          <Typography
                            gutterBottom
                            style={{
                              color: Color.Text,
                              fontSize: isScreenSmall ? "0.8rem" : "0.9rem",
                              paddingTop: isScreenSmall ? "0.5rem" : "0.1rem",
                            }}
                          >
                            Brand: {device.data?.brand}
                          </Typography>
                          <Typography
                            gutterBottom
                            style={{
                              color: Color.Text,
                              fontSize: isScreenSmall ? "0.8rem" : "0.9rem",
                              paddingLeft: isScreenSmall ? "0.5rem" : "1.5rem",
                              paddingTop: isScreenSmall ? "0.5rem" : "0.1rem",
                            }}
                          >
                            Release Date: {device.data?.release_date}
                          </Typography>
                        </Grid>
                        <Grid>
                          <Typography
                            gutterBottom
                            style={{
                              color: Color.Heading2,
                              fontSize: isScreenSmall ? "1.2rem" : "1.5rem",
                              paddingTop: isScreenSmall ? "0.5rem" : "2rem",
                            }}
                          >
                            Details
                          </Typography>
                          {device.data.dimension ? (
                            <Typography
                              gutterBottom
                              style={{
                                color: Color.Text,
                                fontSize: isScreenSmall ? "0.8rem" : "1.2rem",
                                paddingTop: isScreenSmall ? "0.5rem" : "0.2rem",
                              }}
                            >
                              Dimension: {device.data?.dimension}
                            </Typography>
                          ) : (
                            <></>
                          )}
                          <Typography
                            gutterBottom
                            style={{
                              color: Color.Text,
                              fontSize: isScreenSmall ? "0.8rem" : "1.2rem",
                              paddingTop: isScreenSmall ? "0.5rem" : "0.1rem",
                            }}
                          >
                            Os: {device.data?.os}
                          </Typography>
                          <Typography
                            gutterBottom
                            style={{
                              color: Color.Text,
                              fontSize: isScreenSmall ? "0.8rem" : "1.2rem",
                              paddingTop: isScreenSmall ? "0.5rem" : "0.1rem",
                            }}
                          >
                            Storage: {device.data?.storage}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid container>
                      <Grid
                        item
                        xs={12}
                        lg={8}
                        style={{
                          minHeight: "50rem",
                          height: "auto",
                          paddingTop: "2rem",
                        }}
                      >
                        <Typography
                          style={{
                            color: Color.Heading2,
                            fontSize: isScreenSmall ? "1.2rem" : "1.5rem",
                            paddingTop: isScreenSmall ? "2rem" : "0.5rem",
                          }}
                        >
                          Specifications
                        </Typography>
                        <Grid container style={{ alignItems: "top" }}>
                          {device.data ? (
                            Object.keys(device.data?.specifications).map(
                              (item) => (
                                <>
                                  <Grid item xs={1} lg={1}>
                                    <Typography
                                      style={{
                                        color: Color.Subheading,
                                        fontSize: isScreenSmall
                                          ? "0.6rem"
                                          : "1.2rem",
                                        paddingTop: isScreenSmall
                                          ? "0.5rem"
                                          : "0.5rem",
                                      }}
                                    >
                                      {device.data?.specifications[item].title}
                                    </Typography>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={2}
                                    lg={2}
                                    style={{
                                      justifyContent: "left",
                                      display: "grid",
                                      paddingLeft: "1rem",
                                    }}
                                  >
                                    {Object.keys(
                                      device.data?.specifications[item].specs
                                    ).map((item2) => (
                                      <Grid>
                                        <Typography
                                          style={{
                                            color: Color.Text,
                                            fontSize: isScreenSmall
                                              ? "0.5rem"
                                              : "0.8rem",
                                            paddingTop: isScreenSmall
                                              ? "0.5rem"
                                              : "0.5rem",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          {
                                            device.data?.specifications[item]
                                              .specs[item2].key
                                          }
                                        </Typography>
                                      </Grid>
                                    ))}
                                  </Grid>
                                  <Grid item xs={9} lg={9}>
                                    {Object.keys(
                                      device.data?.specifications[item].specs
                                    ).map((item2) => (
                                      <Typography
                                        style={{
                                          color: Color.Text,
                                          fontSize: isScreenSmall
                                            ? "0.5rem"
                                            : "0.8rem",
                                          paddingTop: isScreenSmall
                                            ? "0.5rem"
                                            : "0.5rem",
                                        }}
                                      >
                                        {
                                          device.data?.specifications[item]
                                            .specs[item2].val
                                        }
                                      </Typography>
                                    ))}
                                  </Grid>
                                </>
                              )
                            )
                          ) : (
                            <></>
                          )}
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        lg={4}
                        style={{
                          minHeight: "50rem",
                          height: "auto",
                          paddingTop: "5rem",
                        }}
                      >
                        <Typography
                          style={{
                            color: Color.Heading2,
                            fontSize: isScreenSmall ? "1.2rem" : "1.5rem",
                            paddingTop: isScreenSmall ? "2rem" : "0.5rem",
                          }}
                        >
                          Related Device
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default DeviceDetailsPage;
