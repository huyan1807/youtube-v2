import "./header.css";
import images from "../../../../assets/images";
import { Link, json } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../../../../pages/Search";
function Header() {
  const [search, setSearch] = useState("");
  // useEffect(() => {
  window.localStorage.setItem("search_value", JSON.stringify(search));

  return (
    <div className="header">
      <div className="header_menu">
        <img className="menu_hover" src={images.menu} alt="" />

        <div className="header_logo">
          <img src={images.logo} alt=""></img>
          <span>VN</span>
        </div>
      </div>
      <div className="header_search">
        <div className="header_search_total">
          <input
            type="text"
            className="header_search_input"
            alt=""
            placeholder="Tìm kiếm"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
          <img
            className="header_keyboard"
            src="//www.gstatic.com/inputtools/images/tia.png"
            alt=""
          ></img>
        </div>
        {/* <Link to={`/search?search_query=${search}`}> */}
        <Link to={"/search"}>
          <button className="header_search_btn">
            <img
              className="header_search_icon"
              src={images.search}
              alt="seacrh"
            ></img>
          </button>
        </Link>
        {/* </Link> */}
        <img className="header_micro" src={images.micro} alt=""></img>
      </div>
      <div className="header_infor">
        <img className="header_info_meet" src={images.meet} alt="" />
        <img
          className="header_info_notification"
          src={images.Notification}
          alt=""
        />
        <img
          className="header_info_profile"
          src="https://yt3.ggpht.com/GjartrTLhQvp96ZhPEoP-gnyujfVOQMID3uyEuQv3OgPy-MFVo2chpJVrJjVgYyFAvARF-1DDaI=s88-c-k-c0x00ffffff-no-rj"
          alt=""
        />
      </div>
    </div>
  );
}
export default Header;
