import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";

import AuthProvider from "./components/auth/AuthProvider";
import router from "./router/AppRouter";
import { toasterOptions } from "./utils/toaster";

const App = () => {
  return (
    <AuthProvider>
      <Toaster {...toasterOptions} />
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
