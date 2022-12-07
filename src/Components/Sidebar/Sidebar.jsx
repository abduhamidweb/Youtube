import React from "react";
import ListSidebar from "../ComponentaListSidebar/ListSidebar";
import ListFormat from "../ListFormat/ListFormat";
import ListItem from "../Sidebar-List-Item/ListItem";
import "./index.scss";
const Sidebar = () => {
  return (
    <>
        <div className="section-wrapper">
          <ListSidebar
            sectionClassName="Section-Pages"
            SectionComponent={<ListFormat />}
          />

        </div>
    </>
  );
};

export default Sidebar;
