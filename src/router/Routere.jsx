import React from "react";
import { Routes, Route } from "react-router-dom";
import Tests from "../Components/CardMineS/Tests";
import MainCard from "../Components/MainCard/MainCard";
const Routere = () => {
  return (
    <>
      <main>
        <section>
          <Routes>
            <Route path="/tests" element={<Tests />} />
            <Route path="" element={<MainCard />} />
          </Routes>
        </section>
      </main>
    </>
  );
};

export default Routere;
