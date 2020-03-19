b.css("html,body,p,ol,ul,li,dt,dd,dl,fieldset,blockquote,figure,legend,hr,h1,h2,h3,h4,h5,h6,textarea,pre,iframe", {
  margin: 0,
  padding: 0
});
b.css("h1,h2,h3,h4,h5,h6", {
  fontSize: "100%",
  fontWeight: "normal"
});
b.css("ul", {
  listStyle: "none"
});
b.css("button,input,select", {
  margin: 0
});
b.css("html", {
  boxSizing: "border-box"
});
b.css("*,*::before,*::after", {
  boxSizing: "inherit"
});
b.css("img,video", {
  height: "auto",
  maxWidth: "100%"
});
b.css("iframe", {
  border: 0
});
b.css("table", {
  borderCollapse: "collapse",
  borderSpacing: 0
});
b.css("td,th", {
  padding: 0
});
b.css("td:not([align]),th:not([align])", {
  textAlign: "left"
});

b.css("body", {
  fontFamily: "'Ubuntu Mono', monospace",
  maxWidth: "480px",
  margin: "auto",
  padding: "auto",
  //backgroundColor: "black",
  //color: "white"
});
b.css("button", b.p(8).br(4));
b.css("a", b.fw("bold"));