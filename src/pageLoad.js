import { createHomePage } from "./home";
import { createHeader } from "./header";
import { createMenuPage } from "./menu";
import "./styles.css";
import "./assets/nav-logo.png";

export const initialPageLoad = () => {
  createHomePage();
  createHeader();
};
