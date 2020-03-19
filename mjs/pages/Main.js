import Layout from "./Layout.js";

const heroClass = b`
  display flex
  flex-direction column
  align-items center
  justify-content center
  min-height calc(100vh - 130px)
  text-align center
  padding 20px
`.$nest("figure img", b`
  border-radius 100%
`).$nest("*", b.p("10px 0 10px 0"))

export default class {
  view() {
    return m(Layout, {}, [
      m(""+heroClass, [
        m("h1"+b.fs(40).fw("bold"), [
          m("strong"+b.c("grey"), "Aris"),
          " ",
          m("strong"+b.c("green"), "Riswanto")
        ]),
        m("p", "Fullstack Web Developer. Since 2010")
      ])
    ]);
  }
}