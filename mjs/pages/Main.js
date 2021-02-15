import Layout from "./Layout.js";

const heroClass = b`
  display flex
  flex-direction column
  align-items center
  justify-content center
  text-align center
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
        m("p", "Fullstack Web Developer. Since 2010"),
        /*Array(50).fill("Test Test ").map((o, i) => {
          return m("p", o + i)
        })*/
      ])
    ]);
  }
}