/* Shopping Items by Pablo & Team */

/* Global Variables */
var list = [];

/* buildList
 * Adds items to the end of an array, one at a time.
 * @param: none;
 * @return: none;
 */
function buildList(){
   alert("Write Items. Type s to stop.");
   let nextItem = "";
   while (nextItem != "s") {
	nextItem = prompt("Next Item?");
    	list.push(nextItem);
   }
   alert("List items entered! Go shop.");
}	

/* shopList
 * Removes items from array, 1 by 1, starting from end. 
 * @param: none;
 * @return: none;
 */
function shopList() {
  let item = list.pop();
  alert("Here's your list: "+list.toString());
  while (list.length > 0){
    item = list.pop();
    alert (item);
  }  
  alert("Done. Go check out!");
}
