'user strict';

class EventListItem {
    constructor(data){
      this.data = data;
      this.element = '<div id="item-list-'+this.data.listID+'" class="resultList '+this.data.listBlock+'"><a class="thumbnail" href="#"><img height="42" width="42" src="'+this.data.imgUrl+'" /></a><div class="description"><div class="title">'+this.data.eventTitle+'</div><div class="author">'+this.data.author+'</div></div></div>';
      $("#resultBox").append(this.element);
      var i = 'item-list-'+this.data.listID;
      document.getElementById(i).addEventListener("click", (e) => { this.onClick(i); });
    }


    showData(){
      alert(JSON.stringify(this.data));
    }

    onClick(i) {
      console.log($("#"+i).hasClass('active'));
      if($("#"+i).hasClass('active')){
        console.log("active");
        this.showData();
        $("#"+i).removeClass('active');
      }else{
        console.log("inactive");
        $(".resultList").siblings().removeClass('active');
        $("#"+i).addClass('active');
      }

    }

}
