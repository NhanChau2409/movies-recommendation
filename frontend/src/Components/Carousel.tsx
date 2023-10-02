import React, { useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@apollo/client";
import { QUERY_MOVIE_POSTER } from "../query";
import Movie from "./Movie/Movie";
import { Movies } from "../types/gql/graphql";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { CenterBox, LeftBox } from "./utils";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface SelfCustomArrowProps extends CustomArrowProps {
  isLeft?: boolean;
}

const Arrow: React.FC<SelfCustomArrowProps> = ({ onClick, isLeft }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        opacity: 0,
        transition: "backgroundColor 0.3s ease, opacity 0.3s ease",
        "&:hover": {
          opacity: 1,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
        zIndex: 100,
        width: "77px", // Need customize
        height: theme.poster_size.screen4K.height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: isLeft ? 0 : "unset",
        right: isLeft ? "unset" : 0,
        mt: theme.spacing(5),
        mb: theme.spacing(13),
      })}
      onClick={onClick}
    >
      {isLeft ? (
        <ArrowBackIosIcon fontSize={"large"} />
      ) : (
        <ArrowForwardIosIcon fontSize={"large"} />
      )}
    </Box>
  );
};

const Carousel = ({ genre }: { genre: string }) => {
  const [open, setOpen] = useState(false); // dialog state management

  const { loading, data, error } = useQuery(QUERY_MOVIE_POSTER, {
    variables: {
      where: {
        movie_genres: {
          some: {
            genres: {
              is: {
                genre: {
                  in: [genre],
                },
              },
            },
          },
        },
      },
      take: 20,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error :(</p>;

  const moviesArray = data.findManyMovies.map((movie) => (
    <Movie movie={movie as Movies} />
  ));

  return (
    <Box>
      <LeftBox
        onClick={() => {
          setOpen(true);
        }}
      >
        <Typography variant={"h4"}>{genre}</Typography>
      </LeftBox>

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
                <CenterBox>
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

export default Carousel;
