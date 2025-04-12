import "./SingleSupporter.css";

interface SingleSupporterProps {
  logo: string;
  title: string;
  text: string;
}

const SingleSupporter: React.FC<SingleSupporterProps> = ({
  logo,
  title,
  text,
}) => {
  return (
    <div className="single-supporter">
      <img src={logo} alt={title} className="supporter-logo" />
      <div>
        <p className="supporter-title">{title}</p>
        <p className="supporter-details">{text}</p>
      </div>
    </div>
  );
};

export default SingleSupporter;
