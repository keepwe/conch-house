function getCookie(name) {
  var cookie = document.cookie;
//console.log(cookie);
  var arr = cookie.split("; ");
  for (var i = 0;i < arr.length;i++){
    var item = arr[i];
    var temparr = item.split("=");
    if(temparr[0]==name){
      return decodeURIComponent(temparr[1]);
    }
  }
}
export default getCookie
