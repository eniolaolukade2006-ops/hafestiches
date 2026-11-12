// EDIT THESE: everything on the page updates from here.
var C={script:"Hafe",name:"Stitches",phone:"2348071861442",phoneShown:"0807 186 1442",hours:"Mon-Sat, 9am-6pm",turnaround:"7-14 days",city:"Ipaja, Lagos State"};
function set(sel,txt){document.querySelectorAll(sel).forEach(function(e){e.textContent=txt})}
set("[data-script]",C.script);set("[data-name]",C.name);set("[data-phone]",C.phoneShown);set("[data-hours]",C.hours);set("[data-turnaround]",C.turnaround);set("[data-city]",C.city);
document.title=C.script+" "+C.name+" — Unisex Fashion Designer";
function wa(msg){return "https://wa.me/"+C.phone+"?text="+encodeURIComponent(msg)}
document.querySelectorAll("[data-wa]").forEach(function(a){a.href=wa("Hi, I’d like to place an order.")});
function v(id){return document.getElementById(id).value.trim()}
function build(){
  var m=["Hi "+C.script+" "+C.name+", I’d like to place an order."];
  if(v("f-name"))m.push("Name: "+v("f-name"));
  m.push("Outfit: "+v("f-type"));
  if(v("f-fabric"))m.push("Fabric/colour: "+v("f-fabric"));
  if(v("f-date"))m.push("Needed by: "+v("f-date"));
  if(v("f-notes"))m.push("Notes: "+v("f-notes"));
  document.getElementById("send").href=wa(m.join("\n"));
}
document.getElementById("form").addEventListener("input",build);build();
