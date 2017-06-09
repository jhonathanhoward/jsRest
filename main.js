"use strict";

class EventListItem {
    constructor(data){
      this.data = data;
      this.element = '<div id="resultList"></div>';
      this.element.addEventListener("click", (e) => {this.onClick(e);})
    }

    showData(){
      console.log(this.data);
    }

    onClick(evt){
      console.log("Box Clicked");
    }


}
