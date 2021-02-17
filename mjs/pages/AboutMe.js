import Layout from "./Layout.js";

export default class {
  view() {
    return m(Layout, {},
      m("h3", "About me page in progress :D"),
      m(m.route.Link, {
        href: "/"
      }, "Back to the home")
    )
  }
}