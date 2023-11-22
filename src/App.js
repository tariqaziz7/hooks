import logo from './logo.svg';
import './App.css';
import State from './components/State';
import NoDependency from './components/useEffect/NoDependency';
import EmptyDependency from './components/useEffect/EmptyDependency';
import Dependency from './components/useEffect/Dependency';
import Clean from './components/useEffect/Clean';
import React, { createContext, useState } from "react";
import UseContextComp from './components/useContextComponent/useContextComp';
import RefRender from './components/Ref/RefRender';
import DOMFocus from './components/Ref/DOMFocus';
import StateChanges from './components/Ref/StateChanges';
import Reducer from './components/Reducer/Reducer';
import Callback from './components/Callback/Callback';
import Memo from './components/Memo/Memo';
import CustomHooks from './CustomHooks/CustomHooks';

export const Context = createContext("Default Value");

function App() {
  const [value, setValue] = useState("Hello");
  const [data, setData] = useState("World");
  return (
    // <Context.Provider value={{ value, data }}>
    <div className="App">
      {/* <State /> */}
      {/* UseEffect */}
      {/* <NoDependency /> */}
      {/* <EmptyDependency /> */}
      {/* <Dependency /> */}
      {/* <Clean /> */}
      {/* <UseContextComp /> */}
      {/* UseRef */}
        {/* <RefRender /> */}
        {/* <DOMFocus /> */}
        {/* <StateChanges /> */}
        {/* <Reducer /> */}
        {/* <Callback /> */}
        {/* <Memo /> */}
        <CustomHooks />
     </div>
    // </Context.Provider>
  );
}

export default App;
