import { useEffect, useState } from "react";
import Aimg from "../media/about-bg.jpg";

export default function About() {
  const txt = `이제 막 첫걸음을 떼기 시작한 신입 프론트엔드 입니다.

    즐거움이 제 인생의 모토 입니다.
    즐겁지 않았다면 이 선택 또한 하지 않았을 것 입니다.
    항상 도전을 즐기는 성실한 개발자가 되겠습니다.`;
  // const txt2 = "";
  // const txt3 = "";
  // const txt4 = "";

  const [Info, setInfo] = useState("");
  const [Count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setInfo(Info + txt[Count]);
      setCount(Count + 1);
    }, 40);
    if (Count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <div className="about">
      <div className="about_bg">
        <img src={Aimg} alt="배경이미지" />
      </div>
      <div className="about_txtbox">
        <div className="about_title">
          <h2>Enjoy The Challenge</h2>
        </div>
        <div className="about_info">
          <p>{Info}</p>
          {/* <p> */}
          {/* {otherTxt} */}
          {/* {txt2} <br /> {txt3} <br />
          </p> */}
          {/* <p>{txt4}</p> */}
        </div>
      </div>
    </div>
  );
}
