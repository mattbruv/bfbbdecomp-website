import React from "react";
import "./menu.css";

import Bubble from "./menu-components/bubbles/basebubble";
import SpatCount from "./menu-components/spatula-count/spatcount"

export default class Menu extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="menu">
          <div class="bubbles">
            <Bubble class="bubble"></Bubble>
            <Bubble class="bubble"></Bubble>
            <Bubble class="bubble"></Bubble>
            <Bubble class="bubble"></Bubble>
            <Bubble class="bubble"></Bubble>
          </div>
          <div class="spatula-count">
            <SpatCount count={25}></SpatCount>
          </div>
          {/* <div class="test-text">
            <a>Spongebob Squarepants</a>
          </div> */}
        </div>
        ;
      </div>
    );
  }
}
