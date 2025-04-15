import "./Speakers.css";
import { ChevronRight } from "../../icons";
import Chairman from "../../assets/chairman.png";
import Signature from "../../assets/signature.jpg";
import Speaker1 from "../../assets/speaker1.png";
import Speaker2 from "../../assets/speaker2.png";
import Speaker3 from "../../assets/speaker3.png";
import SingleSpeaker from "../SingleSpeaker/SingleSpeaker";

function Speakers() {
  return (
    <section className="speakers-container">
      <div className="chairman-section">
        <div>
          <h2 className="chairman-title">이사장 인사말.</h2>
          <p className="chairman-write-up">
            안녕하세요, 사색의향기 이사장 오덕균 입니다. <br />
            사색의향기는 ‘행복한 문화 나눔’을 통해 더 나은 사회를 만들어가고자
            <br />
            노력해왔습니다. 앞으로도 문학과 인문학의 가치를 공유하며, 열린
            커뮤니티로서 함께 성장하겠습니다. <br />
            많은 관심과 응원 부탁드립니다. 감사합니다.
          </p>
          <div className="signature-container">
            <p>사단법인 사색의향기 이사장 오덕균</p>
            <img src={Signature} alt="Chairman Signature" />
          </div>
          <button
            type="button"
            style={{
              fontWeight: 500,
              fontSize: "18px",
              display: "flex",
              gap: "13px",
              alignItems: "center",
            }}
          >
            인터뷰 더 보기
            <span>
              <ChevronRight />
            </span>
          </button>
        </div>
        <div className="chairman-pic-container">
          <img src={Chairman} alt="Chairman" className="chairman-pic" />

          <div className="background-arc" />
        </div>
      </div>
      <div className="other-speakers">
        <SingleSpeaker
          name="오덕균 이사장"
          image={Speaker1}
          imageStyle={{ objectPosition: "20px 0" }}
        />
        <SingleSpeaker name="정준호 이사" image={Speaker2} />
        <SingleSpeaker
          name="권혁준 고문"
          image={Speaker3}
          imageclassName="mirror-image"
          imageStyle={{ objectPosition: "-1px 35px", scale: 1.4 }}
        />
      </div>
    </section>
  );
}

export default Speakers;
