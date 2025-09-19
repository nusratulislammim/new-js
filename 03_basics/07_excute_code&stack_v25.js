/*JavaScript execution Context
{} -> global EC <-this 
|
> global execution Context
> function execution Context
> eval execution Context

*/
function one() {
    console.log("One");
    two();
}
function two(params) {
    console.log("Two");
    Three()
}
function Three(params) {
    console.log("Three");
}

one()
two()
Three()