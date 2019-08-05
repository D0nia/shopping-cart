
// function calculatePrice(unitPrice, quantity) {
//     return unitPrice * quantity
// }

Array.from(document.querySelectorAll(".item-quantity-plus")).map(item=>{ item.onclick = 
    function(event){
        let span = event.target.parentNode.querySelector("span")
        span.innerText ++
        let unitPrice = event.target.parentNode.parentNode.querySelector(".item-unit-price>span").textContent; 
        event.target.parentNode.parentNode.querySelector(".item-unit-price>span").textContent = parseInt(unitPrice)+100;
        let totPrice = event.target.parentNode.parentNode.parentNode.parentNode.querySelector(".item-total-price>span").textContent;
        event.target.parentNode.parentNode.parentNode.parentNode.querySelector(".item-total-price>span").textContent =parseInt(totPrice)+100;

    }
});

Array.from(document.querySelectorAll(".item-quantity-minus")).map(item=>{ item.onclick = 
function(event){
    let span = event.target.parentNode.querySelector("span")
    if(span.innerText <= 0){
            return
        }
    span.innerText --
    let unitPrice = event.target.parentNode.parentNode.querySelector(".item-unit-price>span").textContent; 
    event.target.parentNode.parentNode.querySelector(".item-unit-price>span").textContent = parseInt(unitPrice)-100;
    let totPrice = event.target.parentNode.parentNode.parentNode.parentNode.querySelector(".item-total-price>span").textContent;
    event.target.parentNode.parentNode.parentNode.parentNode.querySelector(".item-total-price>span").textContent =parseInt(totPrice)- 100;
}
});
