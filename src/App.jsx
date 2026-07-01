import { RouterProvider } from "react-router-dom";
import router from "./router/AppRouter";
import Context from "./context/Context";
import { useState } from "react";

import { Toaster } from "react-hot-toast";
import { toasterOptions } from "./utils/toaster";

const App = () => {
  let [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <Context.Provider value={{ token, setToken }}>
      <Toaster {...toasterOptions} />
      <RouterProvider router={router} />
    </Context.Provider>
  );
};

export default App;
