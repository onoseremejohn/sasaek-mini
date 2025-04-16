import "./AppSectionRight.css";
import Tents from "../../assets/tents.png";
import {
  MobileIcon,
  BellWithNotifications,
  MobileMenu,
  MobileChevronRight,
  MobileChevronRight2,
  StarIcon,
  PenIcon,
} from "../../icons";
import Mould from "../../assets/mould.png";
import LazyLoadBackground from "../LazyLoadBackground";

const AppSectionRight = () => {
  return (
    <div className="app-section-right">
      <LazyLoadBackground
        backgroundImage={Tents}
        backgroundFallback="#949191"
        className="phone-up"
      >
        <div>
          <div className="mobile-header">
            <div>
              <MobileIcon />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <BellWithNotifications />
              <MobileMenu />
            </div>
          </div>
          <div className="mobile-nav">
            <ul
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: 400,
              }}
            >
              <li style={{ fontWeight: 600 }}>NOW</li>
              <li>커뮤니티</li>
              <li>문화•행사</li>
              <li>서포터</li>
              <li>멤버십</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="phone-up-footer-up">
            몽골 밤하늘의 <br />
            쏟아지는 별을 보며
          </p>
          <div
            style={{
              fontWeight: 400,
              display: "flex",
              //   gap: "27px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "8px" }}>
              테마여행 - 별과 인문학이 함께하는 아름다운 경험
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontWeight: 400,
                marginRight: "4px",
              }}
            >
              <span>1 | 3</span>
              <MobileChevronRight />
            </p>
          </div>
        </div>
      </LazyLoadBackground>
      <div className="phone-down">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <p style={{ fontWeight: 700, fontSize: "16px", color: "black" }}>
            오늘의 향기 <br />
            <span
              style={{ color: "#6B7280", fontWeight: 400, fontSize: "10px" }}
            >
              2025년 1월 10일 금요일
            </span>
          </p>
          <MobileChevronRight2 />
        </div>
        <div className="phone-down-down">
          <div
            style={{
              borderRadius: "10px",
              height: "200px",
            }}
          >
            <img
              src={Mould}
              alt="Mould Pic"
              style={{
                borderRadius: "10px",
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              loading="lazy"
            />
          </div>
          <div className="footer-icon">
            <PenIcon />
          </div>
          <div
            style={{
              padding: "16px",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <p
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                fontWeight: 700,
                fontSize: "12px",
                marginBottom: "6px",
              }}
            >
              <StarIcon />
              명언의 발견
            </p>
            <p style={{ fontSize: "12px", color: "#6B7280", fontWeight: 400 }}>
              당신이 만일 생각하지 않는 사람이라면 <br />
              당신은 무엇을 위한 인간이란 말인가.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSectionRight;
