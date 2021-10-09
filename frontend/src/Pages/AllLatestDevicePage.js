import React, { useEffect } from "react";
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
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { getLatestDevice } from "../Redux/Actions/DeviceActions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "../Components/Footer/Footer";
const AlllatestDevicePage = () => {
  const theme = useTheme();
  let isScreenSmall = false;
  let isScreenSmall2 = false;
  if (useMediaQuery(theme.breakpoints.down("sm"))) {
    isScreenSmall = true;
  }
  if (useMediaQuery(theme.breakpoints.down("md"))) {
    isScreenSmall2 = true;
  }

  const latestDeviceList = useSelector((state) => state.latestDeviceList);
  const { loading, error, latestDevice } = latestDeviceList;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!latestDevice) {
      dispatch(getLatestDevice());
    }
  }, [dispatch, latestDevice]);

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
      <Typography
        variant={isScreenSmall ? "h6" : "h5"}
        gutterBottom
        style={{
          color: "#000",
          fontWeight: "bold",
          paddingTop: isScreenSmall ? "0.5rem" : "1rem",
        }}
      >
        All Latest Phones
      </Typography>
      <Grid container style={{ marginTop: 20, minHeight: "100vh" }}>
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
              Object.keys(latestDevice.data?.phones).map((item) => (
                <Grid
                  item
                  xs={6}
                  sm={3}
                  a
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
                      height: "18rem",
                      boxShadow: "none",
                    }}
                  >
                    <Link
                      to={`/device/${latestDevice?.data.phones[item].slug}`}
                    >
                      <CardMedia
                        component="img"
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
                        <Typography align="center" style={{ fontSize: "1rem" }}>
                          {latestDevice?.data.phones[item].phone_name}
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
      <Footer />
    </div>
  );
};

export default AlllatestDevicePage;
