import "./Supporters.css";
import { ArrowLeft, ArrowRight } from "../../icons";
import SingleSupporter from "../SingleSupporter/SingleSupporter";
import { useRef } from "react";
import Supporter1 from "../../assets/supporter1.png";
import Supporter2 from "../../assets/supporter2.png";
import Supporter3 from "../../assets/supporter3.png";
import Supporter4 from "../../assets/supporter4.png";

const Supporters = () => {
  const allSupportersRef = useRef<HTMLDivElement | null>(null);

  const handlePrev = () => {
    if (allSupportersRef.current) {
      allSupportersRef.current.scrollBy({
        left: -allSupportersRef.current.clientWidth, // Scroll left by the width of the container
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  const handleNext = () => {
    if (allSupportersRef.current) {
      allSupportersRef.current.scrollBy({
        left: allSupportersRef.current.clientWidth, // Scroll right by the width of the container
        behavior: "smooth", // Smooth scrolling
      });
    }
  };
  return (
    <section className="supporters-container">
      <div className="supporters">
        <div className="supporters-slider-controller">
          <p>
            함께하는
            <br />
            이들
          </p>
          <div className="slider-controls">
            <button
              className="control-btn"
              onClick={handlePrev}
              type="button"
              aria-label="left"
            >
              <ArrowLeft />
            </button>
            <button
              className="control-btn"
              onClick={handleNext}
              type="button"
              aria-label="right"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="all-supporters-container" ref={allSupportersRef}>
          <SingleSupporter
            title="(주)행복한사람들"
            text="행복한 날, 행복한 사람들과 함께하는 특별한 날을 선사합니다."
            logo={Supporter1}
          />
          <SingleSupporter
            title="바른댓글 실천연대"
            text="바른댓글 정착으로 아름다운 사회를 만들어갑니다."
            logo={Supporter2}
          />
          <SingleSupporter
            title="아트리안"
            text="생활미술시장의 뉴 패러다임을 제안하는 상설 아트갤러리 프로젝트."
            logo={Supporter3}
          />
          <SingleSupporter
            title="대한민국위멘위원회"
            text="어린이를 위한 위대한 멘토, 위멘이
함께 합니다."
            logo={Supporter4}
          />
        </div>
      </div>
    </section>
  );
};

export default Supporters;
