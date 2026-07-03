import { RouterProvider } from "react-router-dom";
import router from "./router/AppRouter";

import { Toaster } from "react-hot-toast";
import { toasterOptions } from "./utils/toaster";
import AuthProvider from "./components/auth/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <Toaster {...toasterOptions} />
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
