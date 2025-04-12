import "./SingleAd.css";

interface SingleAdProps {
  textPosition: "left" | "right";
  smallText: string;
  bigText: string;
  image: string;
  alt: string;
}

const SingleAd: React.FC<SingleAdProps> = ({
  image,
  alt,
  textPosition,
  smallText,
  bigText,
}) => {
  return (
    <div className={`single-ad ${textPosition}`}>
      <img src={image} alt={alt} />
      <div className="single-ad-text">
        <p>{smallText}</p>
        <h3>{bigText}</h3>
      </div>
    </div>
  );
};

export default SingleAd;
