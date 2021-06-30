import Vlogo from "../media/volvo-logo.png";
import Jlogo from "../media/jbl-logo.png";
import Mylogo from "../media/about-bg.jpg";
import Scroll from "react-scroll";

let Link = Scroll.Link;
export default function Works() {
  return (
    <div className="work_box">
      <h1>MY WORKS</h1>
      <div className="work_con_box">
        <div className="work_con1">
          <h2>#VOLVO</h2>
          <img src={Vlogo} alt="volvo로고" className="work_img" />
          <div className="work_tit_box">
            <h2 className="work_con_tit">제작</h2>
            <p>김종원</p>
            <hr />
          </div>
          <div className="work_tool_box">
            <h2 className="work_con_tool">활용도구 / 기술</h2>
            <p>HTML5, CSS3, JAVA SCRIPT, JQUERY</p>
            <hr />
          </div>
          <div className="work_info_box">
            <h2>주요기능</h2>
            <p>scroll animation, hover(filter) 효과. </p>
            <hr />
          </div>
          <div>
            <button className="work_btn">
              <a
                href="http://kjwon8.dothome.co.kr/volvo/main.html"
                target="_blank"
              >
                Go Web
              </a>
            </button>
          </div>
        </div>
        <div className="work_con2">
          <h2>#PortFolio</h2>
          <img src={Mylogo} alt="jbl로고" className="work_img" />
          <div className="work_tit_box">
            <h2 className="work_con_tit">제작</h2>
            <p>김종원</p>
            <hr />
          </div>
          <div className="work_tool_box">
            <h2 className="work_con_tool">활용도구 / 기술</h2>
            <p>REACT.JS</p>
            <hr />
          </div>
          <div className="work_info_box">
            <h2>주요기능</h2>
            <p>React Scroll을 이용한 Scroll movement.</p>
            <hr />
          </div>
          <div>
            <button className="work_btn">
              <Link to="About" offset={-230} duration={500}>
                This Page
              </Link>
            </button>
          </div>
        </div>
        <div className="work_con3">
          <h2>#JBL</h2>
          <img src={Jlogo} alt="jbl로고" className="work_img" />
          <div className="work_tit_box">
            <h2 className="work_con_tit">제작</h2>
            <p>김종원</p>
            <hr />
          </div>
          <div className="work_tool_box">
            <h2 className="work_con_tool">활용도구 / 기술</h2>
            <p>HTML5, CSS3, JAVA SCRIPT, JQUERY</p>
            <hr />
          </div>
          <div className="work_info_box">
            <h2>주요기능</h2>
            <p>javascript slider, position을 이용한 movement.</p>
            <hr />
          </div>
          <div>
            <button className="work_btn">
              <a
                href="http://kjwon8.dothome.co.kr/jbl/main.html"
                target="_blank"
              >
                Go Web
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
