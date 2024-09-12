/* Shopping Items by Pablo & Team */

/* Global Variables */
var list = [];

/* buildList
 * Adds items to an array
 * @param: none;
 * @return: none;
 */

function buildList() {
	alert("Write Items. Type s to stop.");
	let nextItem = "";
	if (nextItem != "s") {
		nextItem = prompt("Next Item?");
    list.push(nextItem);
	}
}	

function shopList() {
  alert(list);
  let item = list.pop;
  if (list.length >= 0) {
    item = list.pop
    alert (item);
  }  else {
    alert("Go check out!");
}

 
