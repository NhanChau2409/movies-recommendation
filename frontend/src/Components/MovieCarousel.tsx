import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@apollo/client";
import { QUERY_MOVIE_POSTER } from "../query";
import Movie from "./Movie";
import { Movies } from "../types/gql/__generated__/graphql";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import Arrow from "./Arrow";
import { CenterBox, LeftBox } from "./utils";

const MovieCarousel = () => {
  const [open, setOpen] = useState(false);

  const { loading, data, error } = useQuery(QUERY_MOVIE_POSTER, {
    variables: { take: 20 },
  });
  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error :(</p>;

  const moviesArray = data.findManyMovies.map((movie) => (
    <Movie movie={movie as Movies} />
  ));

  return (
    <Box>
      <CenterBox
        onClick={() => {
          setOpen(true);
        }}
      >
        <Typography variant={"h4"}>Genre</Typography>
      </CenterBox>

      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        maxWidth={false}
      >
        <DialogTitle></DialogTitle>
        <DialogContent>
          <CenterBox sx={{ display: "block" }}>
            {[...Array(4)].map((_, rowIndex) => {
              return (
                <CenterBox sx={{ pt: 10, pb: 13 }}>
                  {[...Array(5)].map((_, colIndex) => {
                    const movieIndex = rowIndex * 5 + colIndex;
                    return movieIndex < moviesArray.length
                      ? moviesArray[movieIndex]
                      : null;
                  })}
                </CenterBox>
              );
            })}
          </CenterBox>
        </DialogContent>
      </Dialog>

      <Slider
        dots={false}
        infinite={true}
        speed={500}
        arrows={true}
        prevArrow={<Arrow isLeft={true} />}
        nextArrow={<Arrow isLeft={false} />}
        slidesToShow={1}
        slidesToScroll={1}
        centerMode={true}
        centerPadding="0px"
        variableWidth={true}
        adaptiveHeight={true}
      >
        {moviesArray}
      </Slider>
    </Box>
  );
};

export default MovieCarousel;
