
export default class {
  constructor() {
    this.data = "";
    this.isLoading = true;
  }
  oninit(vn) {
    if (vn.attrs.file) {
      m.request({
        url: window.__conf.baseUrl + "/posts/lists.json"
      }).then(function(data) {
        console.log(data)
      })
    }
  }
  view(vn) {
    return ([
    ])
  }
}