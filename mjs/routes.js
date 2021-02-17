import Main from  "./pages/Main.js";
import Errors from "./pages/Error.js";
import AboutMe from "./pages/AboutMe.js";

export default {
  "/": Main,
  "/about-me": AboutMe,
  "/:error...": Errors
}