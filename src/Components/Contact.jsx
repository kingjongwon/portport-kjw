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
            <strong>프론트엔드 개발자 김종원 입니다.</strong>
          </li>
          <li>📞 TEL : 010-9764-1177</li>
          <li>✉ MAIL : kjwon8@naver.com</li>
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
