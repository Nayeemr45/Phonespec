import React from "react";
import CarouselMui from "react-material-ui-carousel";
import { Paper, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image1 from "../Assets/Images/1.jpg";
import Image2 from "../Assets/Images/2.jpg";
import Image3 from "../Assets/Images/3.jpg";
import Image4 from "../Assets/Images/4.jpg";
const Carousel = (props) => {
  let items = [
    {
      image: Image1,
    },
    {
      image: Image2,
    },
    {
      image: Image3,
    },
    {
      image: Image4,
    },
  ];

  return (
    <CarouselMui indicators={false} animation="slide" timeout={100}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </CarouselMui>
  );
};
function Item(props) {
  const theme = useTheme();
  let isScreenSmall = false;
  if (useMediaQuery(theme.breakpoints.down("sm"))) {
    isScreenSmall = true;
  }
  return (
    <Paper>
      <img
        src={props.item.image}
        alt={props.item.image}
        style={{
          width: "100%",
          height: isScreenSmall ? "15rem" : "29rem",
        }}
      />
    </Paper>
  );
}
export default Carousel;
