import "./App.css";
import CustomHook from "./Hooks/CustomHook";
import UseCallback from "./Hooks/UseCallback";
import { UseContext } from "./Hooks/UseContext/UseContext";

import UseEffect from "./Hooks/UseEffect";
import UseMemo from "./Hooks/UseMemo";
import UseReducer from "./Hooks/UseReducer";
import UseRef from "./Hooks/UseRef";
import UseState from "./Hooks/UseState";
import Prop from "./propes/Prop";

function App() {
  return (
    <>
      {/* <Prop surname={{sur:"bhalala"}} occ="web"/> */}
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <UseContext/> */}
      {/* <UseReducer/> */}
      {/* <UseCallback /> */}
      {/* <UseMemo/> */}
      {/* <UseRef/> */}
      <CustomHook/>
    </>
  );
}

export default App;
