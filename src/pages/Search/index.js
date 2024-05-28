import { useEffect, useState } from "react";
// import { useParams, useSearchParams } from "react-router-dom";
import "./search.css";
// import images from "../../assets/images";
import { API_KEY } from "../../../src/components/api/data.js";

function Search() {
  const [video, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [searchValue, setSearchValue] = useState("");

  const [page, setPage] = useState(4);

  // }, [search]);
  const handleSrcoll = () => {
    // console.log("height", document.documentElement.scrollHeight);
    // console.log("top", document.documentElement.scrollTop);
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleSrcoll);

    return () => {
      window.removeEventListener("scroll", handleSrcoll);
    };
  }, []);
  // useEffect(() => {
  //   const search = () => {
  //     const params = new URLSearchParams(window.location.search);
  //     setSearchValue(params.get("search_query"));
  //   };
  //   search();
  // }, [searchValue]);

  // console.log(searchValue);
  const fetchData = async () => {
    const search_list = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${page}&q=${localStorage.getItem(
      "search_value"
    )}%20game&type=video&key=${API_KEY}`;

    fetch(search_list)
      .then((response) => response.json())
      .then((video) => {
        setVideos(video.items);
        setLoading(true);
      });
  };
  useEffect(() => {
    fetchData();
  }, [page, loading]);
  // console.log(localStorage.getItem("search_value"));
  // useEffect(() => {
  //   setLoading(false);
  // }, [loading]);
  return (
    <div className="search_content">
      {video.map((item, index) => {
        return (
          <div className="search_button" key={index}>
            <div className="search_video">
              <iframe
                width="935"
                height="526"
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
                title='PC CHƠI GAME AAA CÓ RAY TRACING CHỈ 9 TRIỆU VNĐ !?? Chúng tôi quyết tâm "khô máu" lần này !!!'
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="search_video_infor">
              <div className="search_video_title">{item.snippet.title}</div>
              <div className="search_video_view_time">
                <span className="view_time">111k views</span>
                <span className="dot">.</span>
                <span className="timewatch">18 hours ago</span>
              </div>

              {/* <div className="search_video_chanel">
                <img
                  className="search_video_mychanel"
                  alt=""
                  src="https://yt3.ggpht.com/ytc/AIdro_kt-sUf4kFDrZ4iaFcyK4EHwVz-jlvQBwjZSA6hQ9ogPEg=s88-c-k-c0x00ffffff-no-rj"
                ></img>
                <span className="name_chanel">Trực tiếp game</span>
                <img
                  className="search_video_chanel_icon"
                  alt=""
                  src={images.test3}
                ></img>
              </div> */}
              <div className="search_video_description">
                {item.snippet.description}
              </div>
            </div>
          </div>
        );
      })}
      {/*  */}
    </div>
  );
}
export default Search;
