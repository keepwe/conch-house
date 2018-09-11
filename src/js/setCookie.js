function setCookie(name,value,day) {
  var now = new Date();
  now.setDate(now.getDate()+day);
  value = encodeURIComponent(value);
  document.cookie = name+"="+value+";expires="+now+";path=/";
}
export default setCookie
