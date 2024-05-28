import "./video.css";
import images from "../../../assets/images";
import { value_converter } from "../../api/data.js";
import { Fragment, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchAllVideo } from "../../store/action.js";
function VideoLayout() {
  // const [data, setData] = useState([]);
  const [page, setPage] = useState(15);
  const dispath = useDispatch();
  const videoState = useSelector((state) => state.video);
  // console.log("dsad", videoState);
  const { videoList, isLoading, isError } = videoState;

  // const handletest = () => {
  //   dispath(fetchAllVideo());
  // };
  console.log(page);
  useEffect(() => {
    dispath(fetchAllVideo(page));
  }, [page]);

  // useEffect(() => {
  //   const fetchDate = async () => {
  //     const video_list = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CContentDetails%2Cstatistics&chart=mostPopular&maxResults=${page}&regionCode=US&key=${API_KEY}`;

  //     fetch(video_list)
  //       .then((response) => response.json())
  //       .then((data) => setData(data.items));
  //   };
  //   fetchDate();
  // }, [page]);

  const handleSrcoll = () => {
    // console.log("height", document.documentElement.scrollHeight);
    // console.log("top", document.documentElement.scrollTop);
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 2);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleSrcoll);

    return () => {
      window.removeEventListener("scroll", handleSrcoll);
    };
  }, []);

  // return (
  //   <div className="gird_column_videos">
  //     {videoList.items.map((item, index) => {
  //       return (
  //         <div className="gird_video" key={index}>
  //           <div className="img_wrap">
  //             <img alt="" src={item.snippet.thumbnails.medium.url}></img>
  //             {/* <span className="video_time">2:39</span> */}
  //             <div className="icon_video">
  //               <img alt="" src={images.test1}></img>
  //               {/* <img src={images.test2}></img> */}
  //             </div>
  //           </div>
  //           <div className="video_title_warp">
  //             <div className="img_chanel">
  //               <img
  //                 alt=""
  //                 src="https://yt3.ggpht.com/ytc/AIdro_kt-sUf4kFDrZ4iaFcyK4EHwVz-jlvQBwjZSA6hQ9ogPEg=s88-c-k-c0x00ffffff-no-rj"
  //               ></img>
  //             </div>
  //             <div className="video_infomation">
  //               <div className="video_title">{item.snippet.title}</div>
  //               <div className="video_chanel">{item.snippet.channelTitle}</div>
  //               <span className="view_time">
  //                 {value_converter(item.statistics.viewCount)}
  //                 views
  //               </span>
  //               <span className="dot">.</span>
  //               <span className="timewatch">18 hours ago</span>
  //             </div>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  return (
    <div className="gird_column_videos">
      {videoState.isLoading ? (
        <div>false</div>
      ) : (
        <Fragment>
          {videoState.videoList.items?.map((item, index) => {
            return (
              <div className="gird_video" key={index}>
                <div className="img_wrap">
                  <img alt="" src={item.snippet.thumbnails.medium.url}></img>
                  {/* <span className="video_time">2:39</span> */}
                  <div className="icon_video">
                    <img alt="" src={images.test1}></img>
                    {/* <img src={images.test2}></img> */}
                  </div>
                </div>
                <div className="video_title_warp">
                  <div className="img_chanel">
                    <img
                      alt=""
                      src="https://yt3.ggpht.com/ytc/AIdro_kt-sUf4kFDrZ4iaFcyK4EHwVz-jlvQBwjZSA6hQ9ogPEg=s88-c-k-c0x00ffffff-no-rj"
                    ></img>
                  </div>
                  <div className="video_infomation">
                    <div className="video_title">{item.snippet.title}</div>
                    <div className="video_chanel">
                      {item.snippet.channelTitle}
                    </div>
                    <span className="view_time">
                      {value_converter(item.statistics.viewCount)}
                      views
                    </span>
                    <span className="dot">.</span>
                    <span className="timewatch">18 hours ago</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Fragment>
      )}
    </div>
  );
  // );
}

export default VideoLayout;
