"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type YTContainerProps = {
  youtubeLink: string;
};

const YTContainer = ({ youtubeLink }: YTContainerProps) => {
  const id = youtubeLink.split("=")[1];
  return (
    <div className="w-full">
      <LiteYouTubeEmbed id={id} title={youtubeLink} wrapperClass="aspect-video w-full rounded-sm yt-lite" />
    </div>
  );
};

export default YTContainer;
