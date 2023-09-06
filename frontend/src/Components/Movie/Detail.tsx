import React from "react";
import { ApolloError } from "@apollo/client";
import { FindUniqueMoviesQuery } from "../../types/gql/__generated__/graphql";
import { DialogContent, Typography } from "@mui/material";
import { ColumnContainer, RowContainer } from "../utils";

interface DetailProps extends React.PropsWithChildren {
  loading: boolean;
  error: ApolloError | undefined;
  data: FindUniqueMoviesQuery | undefined;
}

const Detail: React.FC<DetailProps> = ({ loading, error, data }) => {
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
