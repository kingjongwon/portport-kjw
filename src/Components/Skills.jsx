export default function Skills() {
  return (
    <div className="skill_box">
      <h2 className="skill_title">Skills</h2>
      <ul className="skill_gnb">
        <li className="s_list">
          <p> HTML5</p>
          <ul className="gage">
            <li>
              <div className="back">
                <span className="front" style={{ width: "90%" }}></span>
              </div>
              <strong>90%</strong>
            </li>
          </ul>
        </li>
        <li className="s_list">
          <p> CSS3</p>
          <ul className="gage">
            <li>
              <div className="back">
                <span className="front" style={{ width: "90%" }}></span>
              </div>
              <strong>90%</strong>
            </li>
          </ul>
        </li>
        <li className="s_list">
          <p> JAVA SCRIPT</p>
          <ul className="gage">
            <li>
              <div className="back">
                <span className="front" style={{ width: "70%" }}></span>
              </div>
              <strong>70%</strong>
            </li>
          </ul>
        </li>
        <li className="s_list">
          <p> JQUERY</p>
          <ul className="gage">
            <li>
              <div className="back">
                <span className="front" style={{ width: "70%" }}></span>
              </div>
              <strong>70%</strong>
            </li>
          </ul>
        </li>
        <li className="s_list">
          <p> REACT.JS</p>
          <ul className="gage">
            <li>
              <div className="back">
                <span className="front" style={{ width: "60%" }}></span>
              </div>
              <strong className="per">60%</strong>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
