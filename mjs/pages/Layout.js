export default class {
  constructor() {
    this.sideActive = false;
  }
  toggleBar() {
    
  }
  view(vnode) {
    let { sideActive } = vnode.state;
    return [
      m("nav.top-nav", {}, m(".container", [
        m(".top-nav-left", [
          m(".top-nav-burger"+(vnode.state.sideActive?".is-active":""), {
            onclick: (e) => {
              vnode.state.sideActive = !vnode.state.sideActive
            }
          }, [0, 1, 2].map(() => m("span"))),
          m(".top-nav-menu"+(vnode.state.sideActive?".is-active":""), [0, 1, 2, 3, 4].map(i => {
            return m("a[href=#].top-nav-item", "Menu "+i)
          })),
          (vnode.state.sideActive ? m(".top-nav-overlay", {
            onclick(e) {
              vnode.state.sideActive = !vnode.state.sideActive
            }
          }) : "")
        ]),
        m(".top-nav-right", [
          m("a.top-nav-item[target=_blank][href=https://fb.me/arisfungratis]", {}, "Facebook"),
          m("a.top-nav-item[target=_blank][href=https://github.com/arisris]", {}, "Github")
        ])
      ])),
      m("main", {}, vnode.children),
      m("footer", {}, [
        m.trust("&copy; Kliksob"),
      ])
    ]
  }
}