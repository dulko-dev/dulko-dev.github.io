import React, { useState, useEffect } from "react";
import Nav from "../Nav";
import Home from "../Home";
import {
  Loading,
  AppContainer,
  LoadingContainerLeft,
  LoadingContainerRight,
} from "./style";

const App = () => {
  const [visible, setVisible] = useState(true);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const idTime = setTimeout(() => {
      setVisible(false);
    }, 2000);
    const idBack = setTimeout(() => {
      setHidden(false);
    }, 5000);
    return () => {
      clearTimeout(idTime);
      clearTimeout(idBack);
    };
  }, []);

  return (
    <AppContainer>
      {visible && <Loading />}
      {hidden && (
        <>
          <LoadingContainerRight />
          <LoadingContainerLeft />
        </>
      )}
      <Nav />
      <Home />
    </AppContainer>
  );
};

export default App;
