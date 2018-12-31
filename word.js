var jquery = document.createElement('script');
jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js ';
document.getElementsByTagName('head')[0].appendChild(jquery);
setTimeout(m => {
  (function($){
    $.getJSON( "http://www.freeyuming.cn/wordjs", function( data ){
      console.log(data);
      console.log(data["txt"])
    });
  }(jQuery))
}, 300)
			
