import React from "react";
import { useQuery } from "@apollo/client";
import { DialogContent, Typography } from "@mui/material";
import { ColumnContainer, RowContainer } from "../utils";
import { QUERY_MOVIE_DETAIL } from "../../query";

const Detail = ({ id }: { id: number }) => {
  const { loading, error, data } = useQuery(QUERY_MOVIE_DETAIL, {
    variables: {
      where: {
        id: id,
      },
    },
  });

  if (loading) {
    return <p>loading ...</p>;
  }
  if (error) {
    return <p>error</p>;
  }

  const {
    title,
    vote_count,
    vote_average,
    popularity,
    release_date,
    runtime,
    overview,
  } = data?.findUniqueMovies || {};

  return (
    <DialogContent>
      <ColumnContainer>
        <Typography>{title}</Typography>
        <RowContainer>
          <Typography>{vote_count}</Typography>
          <Typography>{vote_average}</Typography>
          <Typography>{popularity}</Typography>
        </RowContainer>
        <RowContainer>
          <Typography>{release_date}</Typography>
          <Typography>{runtime}</Typography>
        </RowContainer>
        <Typography>{overview}</Typography>
      </ColumnContainer>
    </DialogContent>
  );
};
export default Detail;
