const interval = setInterval(function() {
   __doPostBack('btnKontenjanGoster','');
   
   if (document.getElementById("grdDersler_lblKONad_1").text != '45/45') {
	alert();
   }
	
 }, 5000);

function a = {}

clearInterval(interval); // thanks @Luca D'Amico

function myFunction() {
   console.log(document.getElementById("grdDersler_lblKONad_2").textContent);
__doPostBack('btnKontenjanGoster','');
   
   if (document.getElementById("grdDersler_lblKONad_2").textContent != '26/26') {
	alert();
   }
}
setInterval(myFunction, 5000);