'user strict';

class EventListItem {
    constructor(data){
      this.data = data;
    }

    element(){
      var eventTitle = this.data.eventTitle;
      var author = this.data.author;
      var imgUrl = this.data.imgUrl;
      var listBlock = this.data.listBlock;
      var html = '<div id="resultList" class="'+listBlock+'"><a class="thumbnail" href="#"><img height="42" width="42" src="'+imgUrl+'" /></a><div class="description"><div class="title">'+eventTitle+'</div><div class="author">'+author+'</div></div></div>';
      $("#resultBox").append(html);
      console.log("appended");
    }

    showData(){
      alert(JSON.stringify(this.data));
    }

}
