import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./component/header";
import { Main } from "./component/main";

createRoot(document.getElementById("root")).render(
  <>
    <div className="container">
      <Header />
      <Main />
    </div>
  </>
);
