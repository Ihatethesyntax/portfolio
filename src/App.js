import React, { useEffect } from "react";
import "./styles/global.css";
import "./styles/typography.css";
import Header from "./features/header/Header";
import { debounce } from "lodash";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <section className="sectioneven"></section>
        <section className="sectionodd"></section>
        <section className="sectioneven"></section>
        <section className="sectionodd"></section>
        <section className="sectioneven"></section>
      </main>
    </div>
  );
}

export default App;
