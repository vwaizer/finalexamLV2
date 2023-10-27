import { createContext, useState } from "react";
import "./App.css";
import Content from "./component/Content";
export const DataContext = createContext([]);
function App() {
  window.localStorage.setItem("data",[]);
  return (
    
      <Content></Content>
    
  );
}

export default App;
