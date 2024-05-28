import images from "../../../../assets/images";
import "./sidebar.css";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="grid_row">
        <div className="grid_column_sidebar">
          <ul className="sidebar_list">
            <li className="sidebar_item ">
              <a href="/" className="sidebar_item_link active">
                <div className="sidebar_icon default ">
                  <img src={images.home} alt=""></img>
                  <span className="sidebar_text ">Trang chủ</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.short} alt=""></img>
                  <span className="sidebar_text">Shorts</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.subcriber} alt=""></img>
                  <span className="sidebar_text">Kênh đăng kí</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="hr"></div>
          {/* /1/ */}
          <ul className="sidebar_list">
            <li className="sidebar_item ">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <h4>Bạn</h4>
                  <img className="check" src={images.check} alt=""></img>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.short} alt=""></img>
                  <span className="sidebar_text">Kênh của bạn</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.wathlater1} alt=""></img>
                  <span className="sidebar_text">Video đã xem</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.playlist} alt=""></img>
                  <span className="sidebar_text">Danh sách phát</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.video} alt=""></img>
                  <span className="sidebar_text">Video của bạn</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.wathlater} alt=""></img>
                  <span className="sidebar_text">Xem sau</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.like} alt=""></img>
                  <span className="sidebar_text">Video đã thích</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="hr"></div>
          {/* 2 */}
          <ul className="sidebar_list">
            <a href="/" className="sidebar_item_link_none">
              <div className="sidebar_icon">
                <h4>Kênh đăng kí</h4>
              </div>
            </a>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img
                    className="subcriber_chanel"
                    src="https://yt3.ggpht.com/ytc/AIdro_kt-sUf4kFDrZ4iaFcyK4EHwVz-jlvQBwjZSA6hQ9ogPEg=s88-c-k-c0x00ffffff-no-rj"
                    alt=""
                  ></img>
                  <span className="sidebar_text">Trực tiếp game</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img
                    className="subcriber_chanel"
                    src="https://yt3.ggpht.com/CpVnHmlKoVMQZlTbZc6QXW4ablSX27txilXZ7qHzRpzPfIUBdmwiGh0qQuW1RyPAHl3WENxa=s88-c-k-c0x00ffffff-no-rj"
                    alt=""
                  ></img>
                  <span className="sidebar_text">LoL Esports</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.menu2} alt=""></img>
                  <span className="sidebar_text">Tất cả kênh đăng kí</span>
                </div>
              </a>
            </li>
          </ul>
          {/* 3 */}
          <div className="hr"></div>
          <ul className="sidebar_list">
            <a href="/" className="sidebar_item_link_none">
              <div className="sidebar_icon">
                <h4>Khám phá</h4>
              </div>
            </a>

            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.trend} alt=""></img>
                  <span className="sidebar_text">Thịnh hành</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.music} alt=""></img>
                  <span className="sidebar_text">Âm nhạc</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.game} alt=""></img>
                  <span className="sidebar_text">Trò chơi</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.new} alt=""></img>
                  <span className="sidebar_text">Tin tức</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.sport} alt=""></img>
                  <span className="sidebar_text">Thể thao</span>
                </div>
              </a>
            </li>
          </ul>
          {/* 4 */}
          <div className="hr"></div>
          <ul className="sidebar_list">
            <a href="/" className="sidebar_item_link_none">
              <div className="sidebar_icon">
                <h4>Dịch vụ khác của Youtube</h4>
              </div>
            </a>

            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.youtube1} alt=""></img>
                  <span className="sidebar_text">Youtube Premium</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.youtube2} alt=""></img>
                  <span className="sidebar_text">Youtube Studio</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.youtube3} alt=""></img>
                  <span className="sidebar_text">Youtube Music</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.youtube4} alt=""></img>
                  <span className="sidebar_text">Youtube Kids</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="hr"></div>
          {/* 5 */}
          <ul className="sidebar_list">
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.setting} alt=""></img>
                  <span className="sidebar_text">Cài đặt</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.flag} alt=""></img>
                  <span className="sidebar_text">Nhật kí báo cáo</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.support} alt=""></img>
                  <span className="sidebar_text">Trợ giúp</span>
                </div>
              </a>
            </li>
            <li className="sidebar_item">
              <a href="/" className="sidebar_item_link">
                <div className="sidebar_icon">
                  <img src={images.feedback} alt=""></img>
                  <span className="sidebar_text">Gửi ý kiến phản hồi</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="hr"></div>

          <div className="footer_text">
            <ul className="coppyright_list">
              <li className="coppyright_list_item">
                <a href="/">Giới thiệu</a>
              </li>
              <li className="coppyright_list_item">
                <a href="/">Báo chí</a>
              </li>
              <li className="coppyright_list_item">
                <a href="/">Bản quyền</a>
              </li>
            </ul>
            <ul className="coppyright_list">
              <li className="coppyright_list_item">
                <a href="/">Liên hệ với chúng tôi</a>
              </li>
            </ul>
            <ul className="coppyright_list">
              <li className="coppyright_list_item">
                <a href="/">Người sáng tạo</a>
              </li>
              <li className="coppyright_list_item">
                <a href="/">Quảng cáo</a>
              </li>
            </ul>
            <ul className="coppyright_list">
              <li className="coppyright_list_item">
                <a href="/">Nhà phát triển</a>
              </li>
            </ul>
            <ul className="coppyright_list last">
              <li className="coppyright_list_item">
                <a href="/">Điều khoản</a>
              </li>
              <li className="coppyright_list_item">
                <a href="/">Quyền riêng tư</a>
              </li>
            </ul>
            <ul className="coppyright_list">
              <li className="coppyright_list_item">
                <a href="/">Chính sách và an toàn</a>
              </li>
            </ul>
            <ul className="coppyright_list">
              <li className="coppyright_list_item">
                <a href="/">Cách Yutobe hoạt động</a>
              </li>
            </ul>
            <ul className="coppyright_list">
              <li className="coppyright_list_item">
                <a href="/">Thử các tính năng mới</a>
              </li>
            </ul>
            <div className="coppyright_text">© 2024 Google LLC</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
