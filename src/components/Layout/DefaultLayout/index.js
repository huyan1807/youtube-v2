import Header from "./Header";
import SideBar from "./SideBar";
import Catergories from "./Catergories";
import "./defaultLayout.css";
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <SideBar />

        <div className="catergories_content">
          <Catergories />
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
}
export default DefaultLayout;
