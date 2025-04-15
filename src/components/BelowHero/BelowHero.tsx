import "./BelowHero.css";
import CultureImage from "../../assets/culture-image.png";
// import { useState } from "react";

function BelowHero() {
  return (
    <section className="below-hero-container">
      <div className="below-hero">
        <div className="larger-text">
          <p>새로운 문화 나눔을 만들어갑니다.</p>
          <div style={{}} className="culture-image-text-container">
            <p>우리는</p>
            <img src={CultureImage} alt="Culture" className="culture-image" />
          </div>
          <p>사색의향기입니다.</p>
        </div>
        <p className="smaller-text">
          사색의향기는 문학인들의 커뮤니티로서 “행복한 문화 나눔"을 통한 사회
          공헌과 선진적이고 건전한 사회 문화를 만들어나가기 위해 노력하는 비영리
          단체입니다.
        </p>
      </div>
    </section>
  );
}

export default BelowHero;
