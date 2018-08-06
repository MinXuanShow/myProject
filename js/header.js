$(function(){
	$("#header").load("header.html",function(html){
		document.getElementById("header").innerHtml=html;
	})
})