import * as React from "react";
import VideoListItem from "../components/VideoListItem";

interface IVideoListProps {
    movieList: any;
}

const VideoList: React.SFC<IVideoListProps> = ({movieList}) => {
    console.log("test", movieList);
    return (
      <div>
        <ul>
            {movieList.map((movie: any) => {
                return <VideoListItem key={movie.id} movieTitle={movie.title} movieImg={movie.poster_path} />;
            })}
        </ul>
      </div>
    );
};

export default VideoList;
