import React, { useState, useEffect } from "react";
import Nav from "../Nav";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import {
  Loading,
  AppContainer,
  LoadingContainerLeft,
  LoadingContainerRight,
} from "./style";

const App = () => {
  const [visible, setVisible] = useState(true);
  const [hiddenBlock, setHiddenBlock] = useState(true);

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
    <AppContainer>
      {visible && <Loading />}
      {hiddenBlock && (
        <>
          <LoadingContainerRight />
          <LoadingContainerLeft />
        </>
      )}
      <Nav />
      <Home hiddenBlock={hiddenBlock}/>
      <About />
      <Projects />
      <Contact/>
    </AppContainer>
  );
};

export default App;
