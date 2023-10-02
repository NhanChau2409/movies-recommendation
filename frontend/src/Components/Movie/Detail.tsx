import React from "react";
import { useQuery } from "@apollo/client";
import {
  Alert,
  Card,
  CardMedia,
  CircularProgress,
  DialogContent,
  Typography,
} from "@mui/material";
import { ColumnContainer, RowContainer } from "../utils";
import { QUERY_MOVIE_DETAIL } from "../../query";
import { POSTER_URL } from "../../constants";

const Detail = ({ id }: { id: number }) => {
  const { loading, error, data } = useQuery(QUERY_MOVIE_DETAIL, {
    variables: {
      where: {
        id: id,
      },
    },
  });

  if (loading) return <CircularProgress color="inherit" />;
  if (error || !data) return <Alert severity="error">Database Error</Alert>;

  const {
    title,
    vote_count,
    vote_average,
    popularity,
    release_date,
    runtime,
    overview,
    poster_path,
  } = data?.findUniqueMovies || {};

  return (
    <DialogContent sx={{ height: "50%" }}>
      <RowContainer>
        <Card>
          <CardMedia
            sx={(theme) => ({
              width: theme.poster_size.screen2K.width,
            })}
            image={POSTER_URL(poster_path as string)}
            loading="lazy"
            component={"img"}
          />
        </Card>
        <ColumnContainer
          sx={(theme) => ({
            width: theme.poster_size.screen2K.width * 1.5,
          })}
        >
          <Typography>{title}</Typography>
          <Typography>{overview}</Typography>
        </ColumnContainer>
      </RowContainer>
    </DialogContent>
  );
};
export default Detail;
