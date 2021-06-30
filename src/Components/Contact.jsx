import Prayimg from "../media/contact-img.jpg";

export default function Contact() {
  return (
    <div className="contact_box">
      <div className="contact_title">
        <h1>CONTACT</h1>
      </div>
      <div className="c_c_box">
        <div className="c_imgbox">
          <img src={Prayimg} alt="" className="c_img" />
        </div>
        <ul className="c_gnb">
          <li>
            <p>안녕하세요!</p> <br />
            <p>프론트엔드 개발자 김종원 입니다.</p>
          </li>
          <li>
            <strong>📞 TEL : 010-9764-1177</strong>{" "}
          </li>
          <li>
            <strong>
              ✉ MAIL : <a href="mailto:kjwon8@naver.com">kjwon8@naver.com</a>
            </strong>
          </li>
        </ul>
      </div>
      {/* <div className="contact_title">
        <h1>CONTACT</h1>
      </div>
      <div className="contact_call_box">
        <h2 className="contact_call">
          📞 TEL : <span className="contact_num">010-9764-1177</span>
        </h2>
      </div>
      <div className="contact_mail_box">
        <h2 className="contact_mail">
          ✉ MAIL : <span className="contact_addr">kjwon8@naver.com</span>
        </h2>
      </div> */}
    </div>
  );
}
