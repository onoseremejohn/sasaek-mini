import React from "react";
import "./SingleSpeaker.css";

interface SingleSpeakerProps {
  image: string;
  name: string;
  imageclassName?: string;
  imageStyle?: React.CSSProperties;
}

const SingleSpeaker: React.FC<SingleSpeakerProps> = ({
  image,
  name,
  imageclassName,
  imageStyle,
}) => {
  return (
    <div className="single-speaker">
      <div className="single-speaker-image-container">
        <img
          src={image}
          alt={name}
          className={imageclassName}
          style={{ ...imageStyle }}
        />
      </div>
      <p className="single-speaker-name">{name}</p>
    </div>
  );
};

export default SingleSpeaker;
