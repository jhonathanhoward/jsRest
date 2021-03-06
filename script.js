$(document).ready(function() {

  $('#search').keyup(function() {
    var searchString = $(this).val();
    typingTimeout(function(){ Search(searchString,"REQUEST");}, 1000);

  });

  var typingTimeout = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout(timer);
      timer = setTimeout(callback,ms);
    };
  })();

  var Search = function(req,category){
    if(category == "REQUEST" && validateCharacters(req)){
      ajax(req);
      console.log('REQUEST');
    }
    if(category == "RESULT"){
      $("#resultBox").empty();
      $("#resultBox").addClass("resultBox");
      if(req.result.length > 0){
        var listCount = 1;
        req.result.forEach(function(id){
          var listID = listCount;
          var eventTitle = req.dictionary[id].name;
          var imgUrl = req.dictionary[req.dictionary[id].thumb].url.s;
          var author = req.dictionary[req.dictionary[id].author.user[0]].full_name;
          var listBlock = listCount % 2 === 0 ? "odd" : "even";
          var data = {eventTitle,author,imgUrl,listBlock,listID};
          let searchItem = new EventListItem(data);
          listCount++;
        });
      }else{
        $("#resultBox").append('<p class="emptyList"> NO RESULTS FOUND. </p>');
      }

    }
  }

  var validateCharacters = function(req){
    if(req.length > 2 ){
      return true;
    }
  };

  var ajax = function(req) {
    var ApiDomain = "http://devbackend.awakenmycity.com/event/search";
    var reqData = {};
    reqData.text = req;
    var json = JSON.stringify(reqData);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", ApiDomain, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
      var res = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "200") {
        console.log('OK');
        Search(res,"RESULT");
      } else {
        console.log('NOT OK');
      }
    }
    xhr.send(json);
  };

});
