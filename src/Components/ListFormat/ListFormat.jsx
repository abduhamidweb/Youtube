import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import ListItem from "../Sidebar-List-Item/ListItem";
const ListFormat = () => {
  return (
    <>
      <ul className="List-wrapper">
        <ListItem
          ListClass="aa"
          LinkIcon="bi bi-house-door"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " ";
          }}
          textCss="text1"
          text="Home"
          street="/tests"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " ";
          }}
          LinkIcon="bi bi-explicit"
          textCss="text1"
          text="Explores"
          street="/tests2"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " ";
          }}
          LinkIcon="bi bi-fast-forward-circle"
          textCss="text1"
          text="Shorts"
          street="/tests3"
        />
      </ul>
      <span className="bloc"></span>
      <ul className="List-wrapper">
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-collection-play"
          textCss="text1"
          text="library"
          street="/tests5"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " ";
          }}
          LinkIcon="bi bi-clock-history"
          textCss="text1"
          text="history"
          street="/tests26"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-play-btn"
          textCss="text1"
          text="your videos"
          street="/tests3786"
        />{" "}
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-stopwatch"
          textCss="text1"
          text="watch later"
          street="/tests378"
        />{" "}
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-hand-thumbs-up"
          textCss="text1"
          text="like video"
          street="/tests379"
        />
      </ul>
      <span className="bloc"></span>
      <h6 className="subscriptions">Subscriptions</h6>
      <ul className="List-wrapper">
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-github"
          textCss="text1"
          text="Github"
          street="/tests54"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " ";
          }}
          LinkIcon="bi bi-linkedin"
          textCss="text1"
          text="Linkedin"
          street="/tests269"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-twitter"
          textCss="text1"
          text="twitter "
          street="/tests37860"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-instagram"
          textCss="text1"
          text="instagram"
          street="/tests3785"
        />{" "}
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-telegram"
          textCss="text1"
          text="Telegram"
          street="/tests3794"
        />
      </ul>
      <span className="bloc"></span>
      <h6 className="subscriptions">Explore</h6>
      <ul className="List-wrapper">
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-github"
          textCss="text1"
          text="trending"
          street="/tests545"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " ";
          }}
          LinkIcon="bi bi-music-note"
          textCss="text1"
          text="Music"
          street="/tests269"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-activity"
          textCss="text1"
          text="Live "
          street="/tests37860"
        />{" "}
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-controller"
          textCss="text1"
          text="gaming"
          street="/tests3785"
        />{" "}
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-newspaper"
          textCss="text1"
          text="news"
          street="/tests37945w"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-award"
          textCss="text1"
          text="sports"
          street="/tests37948"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-lightbulb"
          textCss="text1"
          text="learning"
          street="/tests37946"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-bag"
          textCss="text1"
          text="fashion & beauty"
          street="/tests37945"
        />
        
      </ul>
    </>
  );
};
export default ListFormat;
