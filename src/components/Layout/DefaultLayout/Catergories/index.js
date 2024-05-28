import images from "../../../../assets/images";
import "./catergories.css";
function Catergories() {
  return (
    <div className="grid_column_wrap">
      <div className="gird_column_catergories">
        <button className="catergories_item catergories_item_active">
          Tất cả
        </button>
        <button className="catergories_item catergories_item_hover">
          Âm nhạc
        </button>

        <button className="catergories_item catergories_item_hover">
          Trò chơi
        </button>

        <button className="catergories_item catergories_item_hover">
          Trực tiếp
        </button>
        <button className="catergories_item catergories_item_hover">
          Tin tức
        </button>

        <button className="catergories_item catergories_item_hover">
          Danh sách kết hợp
        </button>
        <button className="catergories_item catergories_item_hover">
          Trò chơi điện tử chủ đề thể thao
        </button>
        <button className="catergories_item catergories_item_hover">
          Trò chơi hành động phiêu lưu
        </button>
        <button className="catergories_item">Bóng đá</button>
        <img className="arrow_right" src={images.arrowright} alt=""></img>
      </div>
    </div>
  );
}
export default Catergories;
