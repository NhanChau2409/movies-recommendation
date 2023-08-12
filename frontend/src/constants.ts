const POSTER_URL = (url: string) => `https://image.tmdb.org/t/p/original/${url}`
const POSTER_SIZE_TO_PIXEL = {
    w92: {width: 92, height: 138},
    w154: {width: 154, height: 231},
    w185: {width: 185, height: 278},
    w342: {width: 342, height: 513},
    w500: {width: 500, height: 750},
    w780: {width: 780, height: 1170},
}

export {POSTER_SIZE_TO_PIXEL, POSTER_URL}
