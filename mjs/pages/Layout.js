const navbarClass = b`
  display flex
  align-items center
  justify-content space-between
  background whitesmoke
  width 100%
  height 56px
  padding 0 4px 0 4px
`
const asideClass = b`
  position fixed
  background whitesmoke
  top 60px
  padding 4px
  width 200px
  min-height calc(100vh - 120px)
  z-index 999
`
const asideMenuClass = b`
  display block
`.$nest("li", b`
  border-bottom .1px solid blue
`).$nest("a", b`
  display block
  padding 10px 0 10px 0
`)
const mainClass = b`
  padding 4px
  min-height calc(100vh - 120px)
  margin-top 4px
`
const footerClass = b`
  display flex
  background whitesmoke
  align-items center
  justify-content center
  height 56px
  margin-top 4px
`

export default class {
  constructor() {
    this.sideActive = false;
  }
  view(vnode) {
    let { sideActive } = vnode.state;
    return [
      m("header"+navbarClass, {}, [
        m("button"+b.d("block"), {
          onclick: () => (vnode.state.sideActive = !vnode.state.sideActive)
        }, (sideActive ? "<<-" : "->>")),
        m(""+b.d("flex").ai("center").$nest("a", b.d("block").p(10)), {}, [
          m("a[target=_blank][href=https://fb.me/arisfungratis]", {}, "Facebook"),
          m("a[target=_blank][href=https://github.com/arisris]", {}, "Github")
        ])
      ]),
      m("aside"+asideClass+b`
        display ${sideActive ? "block" : "none"}
      `, {}, m("ul"+asideMenuClass, [0,1,2,3].map(i => {
        return m("li", m(m.route.Link, {
          href: "/menu-"+i
        }, "Menu "+i))
      }))),
      m("main"+mainClass, {}, vnode.children),
      m("footer"+footerClass, {}, [
        m.trust("&copy; Kliksob"),
      ])
    ]
  }
}