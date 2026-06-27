import { RouterProvider } from "react-router-dom";
import router from "./router/AppRouter";
import Context from "./context/Context";
import { useState } from "react";

const App = () => {
  let [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <Context.Provider value={{ token, setToken }}>
      <RouterProvider router={router} />
    </Context.Provider>
  );
};

export default App;
