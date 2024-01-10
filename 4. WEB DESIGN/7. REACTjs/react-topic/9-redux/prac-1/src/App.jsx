import { Provider } from "react-redux"
import CakeContainer from "./Components/CakeContainer"
import store from "./Components/Redux/Store"
import HookCakeContainer from "./Components/HookCakeContainer"

function App() {

  return (
    <>
      <Provider store={store}>
        {/* <CakeContainer /> */}
        <HookCakeContainer/>
      </Provider>
    </>
  )
}

export default App
