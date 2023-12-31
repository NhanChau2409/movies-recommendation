import * as React from "react";
import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  Typography,
} from "@mui/material";
import { POSTER_URL } from "../../constants";
import { Movies } from "../../types/gql/graphql";
import VideocamIcon from "@mui/icons-material/Videocam";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CenterBox } from "../utils";
import Detail from "./Detail";

const General: React.FC<{ movie: Movies }> = ({ movie }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Card
        sx={(theme) => ({
          mt: theme.spacing(5), // Important for card to scale up and visible
          mb: theme.spacing(13),
          ml: theme.spacing(0.5),
          mr: theme.spacing(0.5),
          display: "block",
          width: theme.poster_size.screen2K.width,
          height: "100%",
          transition:
            "transform 0.5s ease, box-shadow 0.5s ease , height 0.5s ease",
          "&:hover": {
            transform: "scale(1.1)", // Scale the card up by 10% on hover
            boxShadow: "0px 0px 8px 8px rgba(0, 0, 0, 0.7)",
            // height: "100%",
          },
          backgroundColor: theme.palette.background.default,
        })}
        onClick={() => {
          setOpen(true);
        }}
      >
        <CardMedia
          image={POSTER_URL(movie.poster_path as string)}
          loading="lazy"
          component={"img"}
        />

        <CardContent
          sx={(theme) => ({
            backgroundColor: theme.palette.background.default,
          })}
        >
          <CenterBox>
            <CenterBox>
              <FavoriteIcon fontSize={"small"} />
              <Typography>
                {parseFloat(movie.vote_average).toFixed(1)}
              </Typography>
            </CenterBox>

            <CenterBox>
              <VideocamIcon />
              <Typography>
                {new Date(movie.release_date).getFullYear()}
              </Typography>
            </CenterBox>
          </CenterBox>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        maxWidth={false}
      >
        <Detail id={movie.id} />
      </Dialog>
    </Box>
  );
};

export default General;
