import * as React from "react";

interface IVideoListItemProps {
    movieTitle: string;
    movieImg: string;
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w185/";

const VideoListItem: React.SFC<IVideoListItemProps> = ({movieTitle, movieImg}) => {
    return(
        <li>
            <img width="100px" src={`${IMAGE_BASE_URL}${movieImg}`} />
            <h3>{movieTitle}</h3>
        </li>
    );
};

export default VideoListItem;
