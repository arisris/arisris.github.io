import Layout from "./Layout.js";

const heroClass = b`
  display flex
  flex-direction column
  align-items center
  justify-content center
  text-align center
`.$nest("figure img", b`
  border-radius 100%
`).$nest("*", b.p("10px 0 10px 0")).$nest("p", b.fs(20))

export default class {
  view() {
    return m(Layout, {}, [
      m(""+heroClass, [
        m("h1"+b.fs(40).fw("bold").mb(0), [
          m("strong"+b.c("red"), "Aris"),
          " ",
          m("strong"+b.c("green"), "Riswanto")
        ]),
        m("i"+b.c("grey"), "Hi wellcome to my personal site"),
        m("figure", m("img[src=./img/aris.jpeg][alt=Aris Riswanto]")),
        m("p", "Fullstack Web Developer. Since 2010"),
        m("p", "This site is being development stage")
      ])
    ]);
  }
}