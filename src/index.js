import _ from "lodash";
import "./style.css";
import printMe from "./print.js";

import Icon from "./images/微信图片_20180719105222.jpg";
function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack123456"], " ");
  element.classList.add("hello");
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}
