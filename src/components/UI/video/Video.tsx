import React, { FC } from "react";

interface IVideo {
  videoUrl: string;
}

const Video: FC<IVideo> = ({ videoUrl }) => {
  const videoId = videoUrl.split("v=")[1]?.split("&")[0];

  if (!videoId) return;

  return (
    <>
      <iframe
        width="560" // Set width of the video
        height="400" // Set height of the video
        src={`https://www.youtube.com/embed/${videoId}`} // Embed the video using the video ID
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: "15px" }}
      />
    </>
  );
};

export default Video;
