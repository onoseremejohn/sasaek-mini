import "./BelowSpeakers.css";
import SingleAd from "../SingleAd/SingleAd";
import AdPic1 from "../../assets/adpic1.png";
import AdPic2 from "../../assets/adpic2.png";
import AdPic3 from "../../assets/adpic3.png";
import AdPic4 from "../../assets/adpic4.png";

function BelowSpeakers() {
  return (
    <section className="below-speakers">
      <h2 className="below-speakers-title">
        함께하는 일 <span>우리의 흔적</span>
      </h2>
      <div className="ads-container">
        <SingleAd
          textPosition="right"
          smallText="깊은 사유와 따뜻한 대화가 어우러진 시간
마음을 울리는 문학과 인문학의 이야기"
          bigText="인문학 콘서트"
          image={AdPic1}
          alt="Speaker in Room"
        />
        <SingleAd
          textPosition="left"
          smallText="지역의 숨결을 느끼며 함께 웃는 하루
소박한 만남속에 커지는 온기"
          bigText="지역 축제"
          image={AdPic2}
          alt="Yellow"
        />
        <SingleAd
          textPosition="right"
          smallText="행복이 전해지는 물건들,
그 속의 이야기들"
          bigText="나눔 바자회"
          image={AdPic3}
          alt="In a library with books"
        />
        <SingleAd
          textPosition="left"
          smallText="작은 나눔이 모여 큰 울림이 됩니다
사색의향기와 함께 만들어가는 더 나은 내일"
          bigText="따뜻한 후원"
          image={AdPic4}
          alt="Love in hands"
        />
      </div>
    </section>
  );
}

export default BelowSpeakers;
