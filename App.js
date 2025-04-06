import React from "react";
import SpinLuckGame from "./pages/SpinLuckGame";
import AdminPanel from "./admin/AdminPanel";

function App() {
  const isAdmin = window.location.pathname === "/admin";
  return isAdmin ? <AdminPanel /> : <SpinLuckGame />;
}

export default App;