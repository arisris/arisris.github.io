import Layout from "./Layout.js";

export default class {
  view() {
    return m(Layout, {}, m(""+b`
      display flex
      flex-direction column
      align-items center
      justify-content center
      min-height 240px
    `.$nest("*", b.pb(20)), [
      m("h1"+b.fs(40).fw("bold"), "404 Page Not Found"),
      m("p", "The page you are requested was not found."),
      m(m.route.Link, {
        href: "/"
      }, "Back To Home")
    ]));
  }
}