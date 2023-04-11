import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardWrapper } from "./style";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { handleAddToCart } from "../Home/reducer";
import ImageCarousal from "./imageCarousal";

export default function CardContainer(props) {
  const [count, setCount] = useState(0);
  const items = props.value;
  const index = props.index;
  const cartItems = useSelector((state) => state.cardReducer.cartItem);
  const dispatch = useDispatch();
  const hideCartBtn = useSelector((state) => state.cardReducer.buttonVisible);
  const hide = cartItems.find((e) => e.title == items.title);

  return (
    <CardWrapper>
      <Card sx={{ padding: "10px" }} className="card-main">
        <ImageCarousal sx={{ height: "240px" }} cardImage={items} />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="title-card"
            >
              {items.title}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="title-price"
            >
              ${items.price}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            className="description"
          >
            {items.description}
          </Typography>
        </CardContent>
        <CardActions>
          {
            // !hide &&
            <Button
              size="small"
              sx={{ padding: "8px" }}
              disabled={cartItems.find((e) => e.title == items.title)}
              onClick={(e) => dispatch(handleAddToCart(items, index))}
              variant="contained"
            >
              Add to Cart
            </Button>
            //  :
            // <Button>asdasdasasdads</Button>
          }
        </CardActions>
      </Card>
    </CardWrapper>
  );
}
