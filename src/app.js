/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".us", ".io"];

  let list = [];

  function generateString() {
    for (let i = 0; i < pronoun.length; i++) {
      for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < adj.length; n++) {
          for (let e = 0; e < ext.length; e++) {
            list.push(pronoun[i] + adj[a] + noun[n] + ext[e]);
          }
        }
      }
    }
  }

  generateString();

  for (let e = 0; e < list.length; e++) {
    let li = document.createElement("li");
    let text = document.createTextNode(list[e]);
    li.appendChild(text);
    document.getElementById("listado").appendChild(li);
  }
};
