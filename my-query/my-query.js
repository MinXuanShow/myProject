//my-query/my-query.js
if(typeof jQuery!=="function")
	throw new Error("my-query依赖于jQuery,必须先引入jQuery");
else{
	/**************** tabs **********************/
	if(typeof jQuery.fn.tabs==="function")
		throw new Error("jQuery中已存在tabs()方法，禁止替换")
	else{
		jQuery.fn.tabs=function(){
			//1. 为当前元素添加class
			var $parent=this;
			$parent.children(":first").addClass("tabs")//$ul
				.children()//所有li
				.children(":first-child")//所有li>a
				.attr("data-toggle","tab")//所有li>a
				.parent(":first")//第一个li;
				.addClass("active");
			$parent.children(":last").addClass("container")
				.children(":first").addClass("active");
			//2. 为当前元素绑定事件
			$parent.children(":first")//$ul
				.on("click","[data-toggle=tab]",e=>{
				var $tar=$(e.target);
				if(!$tar.parent().is(".active")){
					$tar.parent().addClass("active")
						.siblings().removeClass("active");
					var id=$tar.attr("href");
					$(id).addClass("active")
						.siblings().removeClass("active");
				}
			})
		}
	}
	/************** dropdown *******************/
	if(typeof jQuery.fn.dropdown==="function")
		throw new Error("jQuery中已存在dropdown()方法，禁止替换");
	else{
		jQuery.fn.dropdown=function(){
			var $parent=this;
			$parent.addClass("dropdown")//$div
				.children(":first")//$a
				.attr("data-trigger","dropdown")//$a
				.next()//$ul
				.addClass("dropdown-menu fade");
			$parent.hover(function(){
				$(this).children(".dropdown-menu")
							.toggleClass("in")
			})
		}
	}
}