import {CustomArrowProps} from "react-slick";
import React from "react";
import {Box} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface MySelfCustomArrowProps extends CustomArrowProps {
    isLeft?: boolean;
}

const Arrow: React.FC<MySelfCustomArrowProps> = ({ onClick, isLeft}) => {
    return (
        <Box
            sx={(theme) => ({
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                opacity: 0,
                transition: 'backgroundColor 0.3s ease, opacity 0.3s ease',
                '&:hover': {
                    opacity: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                },
                zIndex: 100,
                width: '77px', // Need customize
                height: theme.poster_size.screen4K.height,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: 0,
                left: isLeft ? 0 : 'unset',
                right: isLeft ? 'unset' : 0,
                mt: theme.spacing(5),
                mb: theme.spacing(13),
            })}
            onClick={onClick}
        >
            {isLeft ? <ArrowBackIosIcon fontSize={'large'}/> : <ArrowForwardIosIcon fontSize={'large'}/>}
        </Box>)
};

export default Arrow;