import * as React from "react";

interface IVideoDetailProps {
    description: string;
    title: string;
}

const VideoDetail: React.SFC<IVideoDetailProps> = ({description, title}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default VideoDetail;
