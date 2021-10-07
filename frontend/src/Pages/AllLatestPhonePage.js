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
import { latestPhones } from "../Redux/Actions/LatestPhoneActions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const AllLatestPhonePage = () => {
  const theme = useTheme();
  let isScreenSmall = false;
  let isScreenSmall2 = false;
  if (useMediaQuery(theme.breakpoints.down("sm"))) {
    isScreenSmall = true;
  }
  if (useMediaQuery(theme.breakpoints.down("md"))) {
    isScreenSmall2 = true;
  }

  const LatestPhoneList = useSelector((state) => state.latestPhonesList);
  const { loading, error, latestPhone } = LatestPhoneList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(latestPhones());
  }, [dispatch]);

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
      <Grid container style={{ marginTop: 20 }}>
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
            {latestPhone ? (
              Object.keys(latestPhone.data?.phones).map((item) => (
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
                  key={latestPhone?.data.phones[item].slug}
                >
                  <Card
                    sx={{
                      width: isScreenSmall ? "170px" : "170px",
                      height: "18rem",
                      boxShadow: "none",
                    }}
                  >
                    <Link to={`/${latestPhone?.data.phones[item].slug}`}>
                      <CardMedia
                        component="img"
                        height="230"
                        image={latestPhone?.data.phones[item].image}
                        alt="green iguana"
                      />
                    </Link>
                    <CardContent style={{ padding: "0.5rem" }}>
                      <Link
                        to={`/${latestPhone?.data.phones[item].slug}`}
                        style={{
                          textDecoration: "none",
                          color: "#000",
                        }}
                      >
                        <Typography align="center" style={{ fontSize: "1rem" }}>
                          {latestPhone?.data.phones[item].phone_name}
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
    </div>
  );
};

export default AllLatestPhonePage;
