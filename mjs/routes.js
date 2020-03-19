import Main from  "./pages/Main.js";
import Errors from "./pages/Error.js";

export default {
  "/": Main,
  "/:error...": Errors
}