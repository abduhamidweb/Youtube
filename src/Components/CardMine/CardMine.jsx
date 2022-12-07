import React,{useEffect} from "react";
import { Link } from "react-router-dom";

const CardMine = ({ data }) => {
  let videoItems = data.snippet;
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card">
          <a
            target="_blank"
            href={`https://www.youtube.com/results?search_query=${data.id}`}
          >
            <img
              src={videoItems.thumbnails.medium.url}
              alt=""
              className="card-bg-img"
            />
          </a>
          <div className="card-bodys">
            <div className="card-channels-img">
              <img
                src="https://picsum.photos/40/40"
                alt="img"
                className="channel-wrapper"
              />
            </div>
            <div className="card-body-text">
              <h5 className="card-title">
                {videoItems.title.substring(0, 60)}
              </h5>
              <h6 className="card-channel-title">
                <span>{videoItems.channelTitle.substring(0, 20)}</span>
                <span>
                  <i className="bi bi-check-circle-fill"></i>
                </span>
              </h6>
              <h6 className="card-view">
                <span> 2,6k views</span>•<span>3 month ago</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMine;
