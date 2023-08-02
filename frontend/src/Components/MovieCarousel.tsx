import React from 'react';
import Carousel from 'react-material-ui-carousel'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const MovieCarousel = () => {
        return <Carousel
            NextIcon={<NavigateNextIcon/>}
            PrevIcon={<NavigateBeforeIcon/>}
            indicators={false}
            autoPlay={false}
            animation={'slide'}
        >
        {
            // Only render each child at a time
        }
    </Carousel>
}
export default MovieCarousel