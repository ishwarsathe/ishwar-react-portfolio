import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem" }}>
        <section id="about"><AboutMe /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="companies" style={{ marginBottom: "2.5rem", textAlign: "left" }}>
          <h2>Companies I've Worked With</h2>
          <ul>
            <li>
              <div className="projects-list-row">
                <span className="project-title">Globant (Current)</span>
              </div>
            </li>
            <li>
              <div className="projects-list-row">
                <span className="project-title">LTIMindtree</span>
              </div>
            </li>
            <li>
              <div className="projects-list-row">
                <span className="project-title">Anveshak Technologies</span>
              </div>
            </li>
            <li>
              <div className="projects-list-row">
                <span className="project-title">Mobile sutra</span>
              </div>
            </li>
          </ul>
        </section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
