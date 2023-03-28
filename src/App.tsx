import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomeIndexPage, AuthIndexPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeIndexPage />} />
      <Route path="/auth/*" element={<AuthIndexPage />} />
    </Routes>
  );
}

export default App