function getName()
{
let data;
data = localStorage.getItem("username");
console.log(data);
}
function getLastName()
{
	let data;
	data=localStorage.getItem("lastname");
	console.log(data);
}
async function updatecont() {
  const dat = await fetch("https://api.countapi.xyz/hit/Ex1.html5/counter");
  const count = await dat.json();
  //console.log(count.value);
  const data = await fetch("https://api.countapi.xyz/set/Ex1.html5/counter");
  const counteur=await data.json();
  console.log(counteur.value);
}
/* async: permet d'utliser await
   await: ne laisse pas l'execution dela ligne suivante sans avoir terminer la ligne dont il est appelé
   https://api.countapi.xyz/hit/Ex1.html5/counter:Permet l'acces a l'api countAPI qui calcule le nombre de visite d'une page
   fetch : permet la recherche de l'api donnée
*/
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} else {
  alert("No Geolocation.");
}
function errorFunction() {
  console.log("error position");
}
function successFunction(position) {
  var map = new google.maps.Map(document.getElementById("google_canvas"), {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var geolocate = new google.maps.LatLng(
    position.coords.latitude,
    position.coords.longitude
  );
  var infowindow = new google.maps.InfoWindow({
    map: map,
    position: geolocate,
    content: ""
  });
  map.setCenter(geolocate);
}
