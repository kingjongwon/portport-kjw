import { useEffect, useState } from "react";
import Aimg from "../media/about-bg.jpg";

export default function About() {
  const txt = "이제 막 첫걸음을 떼기 시작한 신입 프론트엔드 입니다.";
  const [Info, setInfo] = useState("");
  const [Count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setInfo(Info + txt[Count]);
      setCount(Count + 1);
    }, 100);
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
          <h2>FRESH MAN</h2>
        </div>
        <div className="about_info">
          <p>{Info}</p>
        </div>
      </div>
    </div>
  );
}
