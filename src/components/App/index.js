import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightMode, darkMode } from "../../styles/theme";
import Nav from "../Nav";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../Footer";
import {
  Loading,
  AppContainer,
  LoadingContainerLeft,
  LoadingContainerRight,
} from "./style";

const App = () => {
  const [visible, setVisible] = useState(true);
  const [sunrise, setSunrise] = useState(false);
  const [sunset, setSunset] = useState(false);
  const [hiddenBlock, setHiddenBlock] = useState(true);
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "dark") {
      window.localStorage.setItem("mode", "light");
      setSunrise(true);
      setSunset(false);
      setMode("light");
    } else {
      window.localStorage.setItem("mode", "dark");
      setSunset(true);
      setSunrise(false);
      setMode("dark");
    }
  };

  useEffect(() => {
    const localMode = window.localStorage.getItem("mode");
    localMode && setMode(localMode);
  }, []);

  useEffect(() => {
    const idTime = setTimeout(() => {
      setVisible(false);
    }, 2000);
    const idBack = setTimeout(() => {
      setHiddenBlock(false);
    }, 5000);
    return () => {
      clearTimeout(idTime);
      clearTimeout(idBack);
    };
  }, []);

  return (
    <ThemeProvider theme={mode === "dark" ? darkMode : lightMode}>
      <AppContainer>
        {visible && <Loading />}
        {hiddenBlock && (
          <>
            <LoadingContainerRight />
            <LoadingContainerLeft />
          </>
        )}
        <Nav
          toggleMode={toggleMode}
          mode={mode}
          sunrise={sunrise}
          sunset={sunset}
        />
        <Home hiddenBlock={hiddenBlock} />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
