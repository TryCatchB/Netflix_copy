import React, { FC } from "react";

interface IVideo {
  videoUrl: string;
  width: string;
  height: string;
}

const Video: FC<IVideo> = ({ videoUrl, width, height }) => {
  const videoId = videoUrl.split("v=")[1]?.split("&")[0];

  if (!videoId) return;

  return (
    <>
      <iframe
        width={width} // Set width of the video
        height={height} // Set height of the video
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
