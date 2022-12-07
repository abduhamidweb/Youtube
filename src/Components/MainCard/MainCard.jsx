import React, { useContext, useEffect, useState } from "react";
import CardMine from "../CardMine/CardMine";
import "./style.scss";
import context from "../../context/Context";
import API from "../../API/API";
const MainCard = () => {
  let { inputValue } = useContext(context);   

  
  const [videos, setVideos] = useState([]);
  const [videos2, setVideos2] = useState([]);
  const [load, setLoad] = useState(false);
  async function defolutVideo() {
    const res = await API.defaultVideo();
    setVideos2(res.items);
  }
  const [searchVideo, setSerachVideo] = useState([]);
  async function SearchVideo(searchVideoText) {
    const res = await API.searchVideo(searchVideoText);
    setSerachVideo(res.items);
  }
  useEffect(() => {
    defolutVideo();
    // SearchVideo(inputValue)
    // console.log(inputValue);
    SearchVideo(inputValue);
  });
  // console.log(searchVideo);
  return (
    <>
      <div className="row">
        {videos2.map((item, index) => {
          return <CardMine key={index} data={item} />;
        })}
      </div>
    </>
  );
};

export default MainCard;
