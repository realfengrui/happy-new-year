window.onload = function() {
  var music = document.getElementById("music");
  var audio = document.getElementsByTagName("audio")[0];
  var page1 = document.getElementById("page1");
  var page2 = document.getElementById("page2");
  var page3 = document.getElementById("page3");
  /*播放结束后,图片也停止转动*/
  audio.addEventListener("ended",function(event){
    music.setAttribute("class"," ");
    //music.style.animationPlayState = "paused";兼容有问题,iphone6以上,安卓的不支持.所以这次我就不用了.
  },false);
  /*控制音乐播放停止*/
  /*onclick有延迟0.3s延迟*/
  /*手机端开发touch事件提高性能*/
  music.addEventListener("touchstart",function(event){
    if(audio.paused) {
      audio.play();
      this.setAttribute("class","play");
    }else {
      audio.pause();
      this.setAttribute("class"," ");
    }
  },false);
  /*点击屏幕翻页*/
  page1.addEventListener("touchstart",function(event){
    page1.style.display = 'none';
    page2.style.display = 'block';
    page3.style.display = 'block';
    page3.style.top = '100%';

    setTimeout(function() {
      page2.setAttribute('class',"page fadeOut");
      page3.setAttribute('class',"page fadeIn");
    },5500);
  },false);
}
