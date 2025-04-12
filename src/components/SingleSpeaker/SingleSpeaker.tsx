import "./SingleSpeaker.css";

interface SingleSpeakerProps {
  image: string;
  name: string;
  imageclassName?: string;
}

const SingleSpeaker: React.FC<SingleSpeakerProps> = ({
  image,
  name,
  imageclassName,
}) => {
  return (
    <div className="single-speaker">
      <div className="single-speaker-image-container">
        <img src={image} alt={name} className={imageclassName} />
      </div>
      <p className="single-speaker-name">{name}</p>
    </div>
  );
};

export default SingleSpeaker;
