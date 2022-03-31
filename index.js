/*window.addEventListener("click", (event) => {
    if(click)
  });*/

window.onclick = function(event){
    if (document.getElementById('cart-dropdown').contains(event.target) || document.getElementById('tr-cart').contains(event.target)){
        //console.log("meep");
     } else{
        //console.log("mop");
        document.getElementById("cart-dropdown").classList.add("hidden");
     }
};

//initialising a variable name data
var data = 0;
  
//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;
  
//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}
//creation of decrement function
function decrement() {
    if(data >0) {
    data = data - 1;
    document.getElementById("counting").innerText = data;
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function cartAppear() {
    document.getElementById("cart-dropdown").classList.toggle("hidden");
  }

  
function addProduct() {
    if(document.getElementById("cart-info").innerText == "Your cart is empty."){
        console.log("meep");
        document.getElementById("cart-info").innerHTML = 
        `
        <img></img>
        <p>This is a Product</p>
        <p></p>
        <p></p>
        <button><button>
        `;
    }
    else {
        console.log("mop");
    }
}