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

  window.addEventListener("click", () => {
    console.log("You knocked?");
  });
  