import "./style.css";
import React from "react";

const ListSidebar = ({ sectionClassName, SectionComponent }) => {
  return (
    <>
      <section className={sectionClassName}>{SectionComponent}</section>
    </>
  );
};

export default ListSidebar;
