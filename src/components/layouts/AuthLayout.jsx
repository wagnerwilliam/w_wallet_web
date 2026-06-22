import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1, background: "#10b981", color: "white" }}>
        <h1>💰 W's Wallet</h1>
        <p>Control de finanzas personales</p>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
