import "./AppSection.css";
import { AppIcon, DownloadIcon } from "../../icons";
import AppSectionRight from "../AppSectionRight/AppSectionRight";

const AppSection = () => {
  return (
    <section className="app-section-container">
      <div className="app-section">
        <div className="app-section-left">
          <div>
            <div className="app-icon">
              <AppIcon />
            </div>
            <h3 className="app-title">
              더 나은 세상을 <br />
              만들어 가기 위한 노력.
            </h3>
          </div>
          <p className="app-description">
            바른 인성과 성품을 고양하며 함께 나누는 활동을 통해 세대와 나라를
            초월한 커뮤니티를 만들어나가려고 노력하고 있습니다. 작은 담소와 삶의
            지혜가 필요하신 모든 분들을 환영합니다. <br /> <br />
            삶의 어려운 고충이 있으신 분들에게 작은 도움을 드립니다.
            법률적이거나 개인적으로 해결하기 어려운 문제들이 있으시다면 소담
            서포터즈에게 도움을 요청해주세요.
          </p>
          <p className="app-date">
            2025. 6. 출시 예정 <span>커뮤니티 APP ‘소소담담’</span>
          </p>
          <button type="button" className="donation-button">
            앱 다운로드 <DownloadIcon />
          </button>
        </div>
        <AppSectionRight />
      </div>
    </section>
  );
};

export default AppSection;
