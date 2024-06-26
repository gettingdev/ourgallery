import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/aside.css";

export default function Aside() {

  const navigate = useNavigate()

  const [asideDown, setAsideDown] = useState(false);

  function HandleAsideDown() {
    setAsideDown(!asideDown);
  }

  function logout() {
    if(confirm("are you sure want to logout?")) {
      localStorage.clear()
      navigate('/login')
    }
  }

  return (
    <>
      <aside>
        <div
          className="aside-header"
          style={
            asideDown
              ? { width: "45px", transition: "0.2s" }
              : { width: "210px", transition: "0.2s" }
          }
        >
          <div className="menu">
            <div className="menu-icon">
              <svg
                width="29"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>file_png [#1765]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-300.000000, -1239.000000)"
                    fill="rgba(240, 248, 255, 0.588)"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M264,1085.8377 L264,1088.1047 C264,1088.6567 263.526,1089.0007 262.973,1089.0007 L262.947,1089.0007 C262.394,1089.0007 262,1088.6567 262,1088.1047 L262,1087.0007 L257.893,1087.0007 C256.788,1087.0007 256,1086.2097 256,1085.1047 L256,1081.0007 L246.893,1081.0007 C246.341,1081.0007 246,1081.5527 246,1082.1047 L246,1088.1047 C246,1088.6567 245.526,1089.0007 244.973,1089.0007 L244.947,1089.0007 C244.394,1089.0007 244,1088.6567 244,1088.1047 L244,1081.1047 C244,1080.0007 244.788,1079.0007 245.893,1079.0007 L257.443,1079.0007 C257.717,1079.0007 258.006,1079.1647 258.195,1079.3637 L263.671,1085.1487 C263.848,1085.3347 264,1085.5817 264,1085.8377 L264,1085.8377 Z M255.973,1091.0007 C255.969,1091.0007 255.965,1091.0037 255.96,1091.0037 C255.955,1091.0037 255.951,1091.0007 255.947,1091.0007 L255.973,1091.0007 Z M257,1092.1047 L257,1098.1047 C257,1098.6567 256.445,1099.0007 255.893,1099.0007 L255.202,1099.0007 C255.013,1099.0007 254.893,1098.9457 254.808,1098.7767 L253,1095.1047 L253,1098.1047 C253,1098.6567 252.526,1099.0007 251.973,1099.0007 L251.947,1099.0007 C251.394,1099.0007 251,1098.6567 251,1098.1047 L251,1092.1047 C251,1091.5527 251.341,1091.0007 251.893,1091.0007 L252.584,1091.0007 C252.773,1091.0007 253,1091.1597 253.085,1091.3287 L255,1095.1047 L255,1092.1047 C255,1091.5577 255.415,1091.0127 255.96,1091.0037 C256.507,1091.0127 257,1091.5577 257,1092.1047 L257,1092.1047 Z M262.973,1095.0007 C262.969,1095.0007 262.965,1095.0037 262.96,1095.0037 C262.955,1095.0037 262.951,1095.0007 262.947,1095.0007 L262.973,1095.0007 Z M264,1092.0267 L264,1092.0527 C264,1092.6047 263.445,1093.0007 262.893,1093.0007 L262,1093.0007 C261.004,1093.0007 260.134,1093.7337 259.974,1094.7167 C259.77,1095.9697 261,1097.1047 262,1097.1047 L262,1096.1047 C262,1095.5577 262.415,1095.0127 262.96,1095.0037 C263.507,1095.0127 264,1095.5577 264,1096.1047 L264,1098.1047 C264,1098.6567 263.445,1099.0007 262.893,1099.0007 L262.065,1099.0007 C259.976,1099.0007 258.11,1097.4727 257.912,1095.3937 C257.684,1093.0077 259.554,1091.0007 261.893,1091.0007 L262.893,1091.0007 C263.445,1091.0007 264,1091.4747 264,1092.0267 L264,1092.0267 Z M246.893,1095.1047 L245.893,1095.1047 L245.893,1093.1047 L246.893,1093.1047 C247.445,1093.1047 247.893,1093.5527 247.893,1094.1047 C247.893,1094.6567 247.445,1095.1047 246.893,1095.1047 L246.893,1095.1047 Z M246.723,1091.0007 L244.893,1091.0007 C244.341,1091.0007 244,1091.5527 244,1092.1047 L244,1098.1047 C244,1098.6567 244.394,1099.0007 244.947,1099.0007 L244.973,1099.0007 C245.526,1099.0007 246,1098.6567 246,1098.1047 L246,1097.0007 L246.893,1097.0007 C248.603,1097.0007 249.979,1095.5697 249.889,1093.8387 C249.804,1092.2167 248.348,1091.0007 246.723,1091.0007 L246.723,1091.0007 Z"
                        id="file_png-[#1765]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div
              className="menu-text"
              style={asideDown ? { display: "none" } : { display: "block" }}
            >
              Our Gallery
            </div>
            <button onClick={HandleAsideDown}>
              <svg
                fill="rgba(240, 248, 255, 0.588)"
                width="10"
                viewBox="-8.5 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>left</title>
                <path d="M7.094 15.938l7.688 7.688-3.719 3.563-11.063-11.063 11.313-11.344 3.531 3.5z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="aside-menu">
          <div className="menu">
            <Link to="/" className="menu-link"></Link>
            <div className="menu-icon">
              <svg
                width="21"
                viewBox="0 -0.5 21 21"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>gallery_grid_view [#1403]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-339.000000, -680.000000)"
                    fill="rgba(240, 248, 255, 0.588)"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M301.9,537 C301.9,537.552 301.4296,538 300.85,538 L297.7,538 C297.1204,538 296.65,537.552 296.65,537 L296.65,534 C296.65,533.448 297.1204,533 297.7,533 L300.85,533 C301.4296,533 301.9,533.448 301.9,534 L301.9,537 Z M301.9,531 L296.65,531 C295.48975,531 294.55,531.895 294.55,533 L294.55,538 C294.55,539.105 295.48975,540 296.65,540 L301.9,540 C303.06025,540 304,539.105 304,538 L304,533 C304,531.895 303.06025,531 301.9,531 L301.9,531 Z M301.9,526 C301.9,526.552 301.4296,527 300.85,527 L297.7,527 C297.1204,527 296.65,526.552 296.65,526 L296.65,523 C296.65,522.448 297.1204,522 297.7,522 L300.85,522 C301.4296,522 301.9,522.448 301.9,523 L301.9,526 Z M301.9,520 L296.65,520 C295.48975,520 294.55,520.895 294.55,522 L294.55,527 C294.55,528.105 295.48975,529 296.65,529 L301.9,529 C303.06025,529 304,528.105 304,527 L304,522 C304,520.895 303.06025,520 301.9,520 L301.9,520 Z M290.35,537 C290.35,537.552 289.8796,538 289.3,538 L286.15,538 C285.5704,538 285.1,537.552 285.1,537 L285.1,523 C285.1,522.448 285.5704,522 286.15,522 L289.3,522 C289.8796,522 290.35,522.448 290.35,523 L290.35,537 Z M290.35,520 L285.1,520 C283.93975,520 283,520.895 283,522 L283,538 C283,539.105 283.93975,540 285.1,540 L290.35,540 C291.51025,540 292.45,539.105 292.45,538 L292.45,522 C292.45,520.895 291.51025,520 290.35,520 L290.35,520 Z"
                        id="gallery_grid_view-[#1403]"
                      >
                        {" "}
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div
              className="menu-text"
              style={asideDown ? { display: "none" } : { display: "flex" }}
            >
              Photos
            </div>
          </div>  
          <div className="menu">
            <Link to={'albums'} className="menu-link"></Link>
            <div className="menu-icon">
              <svg
                width="21"
                viewBox="0 -0.5 21 21"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>gallery_grid_view [#1405]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-259.000000, -680.000000)"
                    fill="rgba(240, 248, 255, 0.588)"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M209.3,538 L206.15,538 C205.5704,538 205.1,537.552 205.1,537 C205.1,536.448 205.5704,536 206.15,536 L209.3,536 C209.8796,536 210.35,536.448 210.35,537 C210.35,537.552 209.8796,538 209.3,538 L209.3,538 Z M210.35,534 L205.1,534 C203.93975,534 203,534.895 203,536 L203,538 C203,539.105 203.93975,540 205.1,540 L210.35,540 C211.51025,540 212.45,539.105 212.45,538 L212.45,536 C212.45,534.895 211.51025,534 210.35,534 L210.35,534 Z M220.85,524 L217.7,524 C217.1204,524 216.65,523.552 216.65,523 C216.65,522.448 217.1204,522 217.7,522 L220.85,522 C221.4296,522 221.9,522.448 221.9,523 C221.9,523.552 221.4296,524 220.85,524 L220.85,524 Z M221.9,520 L216.65,520 C215.48975,520 214.55,520.895 214.55,522 L214.55,524 C214.55,525.105 215.48975,526 216.65,526 L221.9,526 C223.06025,526 224,525.105 224,524 L224,522 C224,520.895 223.06025,520 221.9,520 L221.9,520 Z M221.9,537 C221.9,537.552 221.4296,538 220.85,538 L217.7,538 C217.1204,538 216.65,537.552 216.65,537 L216.65,531 C216.65,530.448 217.1204,530 217.7,530 L220.85,530 C221.4296,530 221.9,530.448 221.9,531 L221.9,537 Z M221.9,528 L216.65,528 C215.48975,528 214.55,528.895 214.55,530 L214.55,538 C214.55,539.105 215.48975,540 216.65,540 L221.9,540 C223.06025,540 224,539.105 224,538 L224,530 C224,528.895 223.06025,528 221.9,528 L221.9,528 Z M210.35,529 C210.35,529.552 209.8796,530 209.3,530 L206.15,530 C205.5704,530 205.1,529.552 205.1,529 L205.1,523 C205.1,522.448 205.5704,522 206.15,522 L209.3,522 C209.8796,522 210.35,522.448 210.35,523 L210.35,529 Z M210.35,520 L205.1,520 C203.93975,520 203,520.895 203,522 L203,530 C203,531.105 203.93975,532 205.1,532 L210.35,532 C211.51025,532 212.45,531.105 212.45,530 L212.45,522 C212.45,520.895 211.51025,520 210.35,520 L210.35,520 Z"
                        id="gallery_grid_view-[#1405]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div
              className="menu-text"
              style={asideDown ? { display: "none" } : { display: "flex" }}
            >
              Albums
            </div>
          </div>
          <div className="menu cihuy" onClick={logout} style={{cursor: "pointer"}}>
            {/* <Link to="/albums" className="menu-link"></Link> */}
            <div className="menu-icon">
              <svg
                width="21"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>emoji_happy_square_round [#427]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-100.000000, -6279.000000)"
                    fill="rgba(240, 248, 255, 0.588)"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M56,6126 C56,6125.448 56.448,6125 57,6125 L59,6125 C59.552,6125 60,6125.448 60,6126 L60,6128 C60,6128.552 59.552,6129 59,6129 L57,6129 C56.45,6129 56,6128.55 56,6128 L56,6126 Z M52,6127 C52,6127.552 51.552,6128 51,6128 L49,6128 C48.448,6128 48,6127.552 48,6127 C48,6126.448 48.448,6126 49,6126 L51,6126 C51.552,6126 52,6126.448 52,6127 L52,6127 Z M51.092,6130.399 C51.787,6133.314 56.213,6133.314 56.908,6130.399 C57.02,6129.932 57.412,6129.585 57.892,6129.585 C58.508,6129.585 59.01,6130.137 58.891,6130.741 C57.877,6135.866 50.123,6135.866 49.109,6130.741 C48.99,6130.137 49.492,6129.585 50.108,6129.585 C50.588,6129.585 50.98,6129.932 51.092,6130.399 L51.092,6130.399 Z M62,6136 C62,6136.552 61.552,6137 61,6137 L47,6137 C46.448,6137 46,6136.552 46,6136 L46,6122 C46,6121.448 46.448,6121 47,6121 L61,6121 C61.552,6121 62,6121.448 62,6122 L62,6136 Z M64,6121 C64,6119.895 63.105,6119 62,6119 L46,6119 C44.895,6119 44,6119.895 44,6121 L44,6137 C44,6138.105 44.895,6139 46,6139 L62,6139 C63.105,6139 64,6138.105 64,6137 L64,6121 Z"
                        id="emoji_happy_square_round-[#427]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div
              className="menu-text"
              style={asideDown ? { display: "none" } : { display: "flex" }}
            >
              Friends
            </div>
          </div>
        </div>

        <footer style={asideDown ? { display: "none" } : { display: "inline" }}>
          <div className="footer-top">
            <a href="">FAQ</a>
            <a href="">Help</a>
            <a href="">Privacy Policy</a>
          </div>
          <div className="footer-bottom">
            <p>© 2023 Jundia Anwari</p>
          </div>
        </footer>
      </aside>
      <div
        className="aside-bottom"
        style={
          asideDown
            ? { width: "75px", transition: "0.2s" }
            : { width: "240px", transition: "0.2s" }
        }
      ></div>
    </>
  );
}
