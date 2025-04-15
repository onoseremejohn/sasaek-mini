import "./DonationSection.css";
import { HandShakeIcon } from "../../icons";

const DonationSection = () => {
  return (
    <section className="donation-section-container">
      <div className="donation-section">
        <h3 className="donation-section-title">
          기부를 통해 따뜻한 마음을 보내고 싶다면,
        </h3>
        <p className="donation-account-info">
          후원계좌 안내 <br />
          국민 924501-01-351204 / 사단법인 사색의향기
        </p>
        <div className="donation-buttons-container">
          <button type="button" className="donation-button">
            <HandShakeIcon />
            정기 후원
          </button>
          <button type="button" className="donation-button">
            일시 후원
          </button>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
