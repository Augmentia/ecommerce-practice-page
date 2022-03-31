
//Close cart if click outside window
window.onclick = function(event){
    if (document.getElementById('cart-dropdown').contains(event.target) || document.getElementById('tr-cart').contains(event.target) || document.getElementById('add-button').contains(event.target)){
        //console.log("meep");
     }
     else if(document.contains(document.getElementById('trash-button')) && document.getElementById('trash-button').contains(event.target)) {
         //merp
     }
     else{
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

function getCount() {
    const count = document.getElementById("counting").innerText;
    console.log(`This is count: ` + count);
    return count;      
}

function getPrice() {
    const price = document.getElementById("product-price").innerText;
    //remove $
    const newPrice = price.substring(1,price.length)
    return newPrice;      
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function cartAppear() {
    document.getElementById("cart-dropdown").classList.toggle("hidden");
  }
  
function addProduct() {
    const pQuantity = getCount();
    const pPrice = getPrice();
    const cartTotal = (pQuantity * pPrice);
    console.log(`pQuantity: ${pQuantity}`);
    console.log(`pPrice: ${pPrice}`);
    console.log(`cartTotal: ${cartTotal}`);
    console.log(`cartTextBoolean:  ${document.getElementById("cart-info").innerText == "Your cart is empty."}`);
    console.log(`cartQuantityBoolean: ${pQuantity !== '0'}`);
    console.log(`cartQuantityBoolean!: ${!!pQuantity} `)

    if(document.getElementById("cart-info").innerText == "Your cart is empty." && pQuantity !== `0`){
        console.log("Filling Cart");
        document.getElementById("cart-info").innerHTML = `
        <div class="flex flex-row pb-8 items-center">
            <img class="ml-4 w-12 rounded" src="/images/image-product-1-thumbnail.jpg" alt="thumbnail 1">
            <div class="flex flex-col pl-2 text-gray-500 text-sm text-center" >
                <p>Fall Limited Edition Sneakers</p>
                <div class="flex flex-row">
                    <p>$${pPrice} x ${pQuantity}</p>
                    <p class="pl-1 font-bold text-black">$${cartTotal}.00</p>
                </div>
            </div>
        <svg id="trash-button" onclick="removeItem()" class="ml-2 cursor-pointer" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
      </div>
      <button class="flex flex-row mx-4 items-center bg-orange-400 hover:bg-orange-300 h-10 justify-center rounded-lg cursor-pointer text-white">Checkout</button>
        `;
    }
}

function removeItem(){
    document.getElementById("cart-info").innerHTML = `
    <p id="cart-info" class="text-center">Your cart is empty.</p>
    `;
}