// banner轮播
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});
//倒计时
function getTimeCha(now,future){
	var arrTime=[];
	var sum=(future.getTime()-now.getTime())/1000    //总的秒数差
	var day=parseInt(sum/(60*60*24));                 //天数
	// arrTime.push(day);
	var hours=parseInt(sum%(60*60*24)/(60*60));      //小时
	arrTime.push(hours);                             
	var minutes=parseInt(sum%(60*60*24)%(60*60)/60); //分钟
	arrTime.push(minutes);
	var seconds=parseInt(sum%(60*60*24)%(60*60)%60); //秒钟
	arrTime.push(seconds);
	return arrTime;
}

var span=document.querySelectorAll('.center span');
function move(){
	var future=new Date("12:00:00 8/15/2016");
	var now=new Date();
	var arrTime=getTimeCha(now,future);
	for(var i=0;i<span.length;i++){
		if(arrTime[i]<=9){
			arrTime[i]="0"+arrTime[i];
		}
		span[i].innerHTML=arrTime[i];
	}
}
setInterval(move,1000)
//按需加载
var h=document.documentElement.clientHeight;
var picload=$(".picload");
$(window).scrollTop(1);
$(window).scroll(function(){
	var tops=$(window).scrollTop();
	picload.each(function(i,obj){
		if($(obj).offset().top<(tops+h)){
			$("img",obj).each(function(j,o){
				$(o).attr("src",$(o).attr("data-src"))
			})
		}
	})
})
