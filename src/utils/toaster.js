export const toasterOptions = {
  position: "top-center",
  reverseOrder: false,
  toastOptions: {
    duration: 5000, // quiza sea mucho validar y cambiar si hace falta.

    style: {
      borderRadius: "12px",
      background: "#fff",
      color: "#0f172a",
      border: "1px solid #e2e8f0",
      boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
    },

    success: {
      iconTheme: {
        primary: "#0F766E",
        secondary: "#fff",
      },
    },

    error: {
      iconTheme: {
        primary: "#DC2626",
        secondary: "#fff",
      },
    },
  },
};
