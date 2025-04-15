import "./Footer.css";
import { ArrowRight } from "../../icons";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div>
          <img src="/logo2.svg" alt="Logo" className="footer-logo" />
          <p
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
            className="footer-info-links"
          >
            <span className="fw-6">개인정보 처리방침</span>
            <span className="fw-6">이용약관</span>
            <span style={{ color: "#7C7C7C" }}>
              고객센터 평일 08:00~19:00 (주말 및 공휴일 휴무)
            </span>
          </p>
          <div
            style={{ fontSize: "12px" }}
            className="footer-info-details white-opacity-80"
          >
            <div>
              <p>사단법인 사색의향기</p>
              <p className="dark-white">
                <span>이사장</span>
                오덕균
              </p>
              <p className="dark-white">
                <span>고유번호</span>
                355-82-00129
              </p>
            </div>
            <div>
              <p className="dark-white">
                <span>주소</span>
                서울시 강남구 테헤란로 19길 28 이림빌딩3층(역삼동)
              </p>
              <p className="dark-white">
                <span>전화</span>
                02-539-5101
              </p>
              <p className="dark-white">
                <span>팩스</span>
                070-8668-5091
              </p>
              <p className="dark-white">
                <span>이메일</span>
                culppy@culppy.com
              </p>
            </div>
            <p>Copyright ⓒ 2025 사색의향기. All Rights Reserved</p>
          </div>
        </div>
        <div className="footer-right-side">
          <p>뉴스레터 구독하기</p>
          <p>
            이메일 구독을 통해 사색의향기의 최신 소식과 교육 및 이벤트 소식을
            빠르게 받아보실 수 있습니다.
          </p>
          <button
            type="button"
            style={{
              color: "#fff",
              justifyContent: "space-between",
              width: "100%",
              border: "1px solid #fff",
            }}
            className="donation-button"
          >
            이메일 구독신청
            <ArrowRight />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
