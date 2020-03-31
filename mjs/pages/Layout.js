export default class {
  oncreate({ dom }) {
    this.dom = dom;
    this.prevNavPos = window.pageYOffset;
    const self = this;
    window.onscroll = () => {
      const currentPos = window.pageYOffset;
      if (self.prevNavPos > currentPos) {
        self.dom.style.top = 0
      } else {
        self.dom.style.top = "-60px";
      }
      self.prevNavPos = currentPos;
    }
  }
  toggleNav() {
    const self = this;
    const burger = this.dom.querySelector(".top-nav-burger");
    const menu = this.dom.querySelector(".top-nav-menu");
    const overlay = document.createElement("div");
    overlay.classList.add("top-nav-overlay");
    overlay.addEventListener("click", () => {
      self.toggleNav();
    }, { once: true });
    const anim = menu.animate([{
      transform: "translate3d(-100%, 0, 0)"
    }, {
      transform: "translate3d(0, 0, 0)"
    }], {
      easing: "ease-in-out",
      duration: 300
    });
    if (burger.classList.contains("is-active")) {
      anim.reverse();
      anim.onfinish = () => {
        menu.classList.remove("is-active");
        menu.nextElementSibling.remove();
        burger.classList.remove("is-active");
      }
    } else {
      menu.classList.add("is-active");
      menu.parentNode.insertBefore(overlay, menu.nextSibling);
      burger.classList.add("is-active");
    }
  }
  view(vnode) {
    let { sideActive } = vnode.state;
    const self = this;
    return [
      m("nav.top-nav.is-fixed", {
        
      }, m(".container", [
        m(".top-nav-left", [
          m(".top-nav-burger", {
            onclick(){
              self.toggleNav();
            }
          }, [0, 1, 2].map(() => m("span"))),
          m(".top-nav-logo.link", "KlikApp"),
          m(".top-nav-menu", [0, 1, 2, 3, 4].map(i => {
            return m("a[href=#].top-nav-item", "Menu "+i)
          })),
        ]),
        m(".top-nav-right", [
          m("a.top-nav-item[target=_blank][href=https://fb.me/arisfungratis]", {}, m("img[src=./img/facebook-original.svg]")),
          m("a.top-nav-item[target=_blank][href=https://github.com/arisris]", {}, m("img[src=./img/github-original.svg]"))
        ])
      ])),
      m("main.container.main-content", {}, vnode.children),
      m("footer.container.footer", {}, [
        m.trust("&copy; Kliksob"),
      ])
    ]
  }
}