
let bagItems;
onLoad();

function onLoad(){
  let bagItemsString=localStorage.getItem('bagItems');
  bagItems=bagItemsString?JSON.parse(bagItemsString):[];
  displayItemsOnHomePage(); //call the function
  displayBagIcon();

}




function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  //hum log local storage me to array save nhi kar sakte like bagItems array so we will convert it to stringyfy :)
  displayBagIcon();


}

//call this function whenever a user click on add to bag button :)
function displayBagIcon(){

  let bagItemCountElement = document.querySelector('.bag-item-count');


  if(bagItems.length>0){
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText=bagItems.length;

  }else{
    bagItemCountElement.style.visibility = 'hidden';

  }
  //starting me bhi call karo ok displayBagIcon ko

}

function displayItemsOnHomePage(){

  let itemsContainerElement = document.querySelector('.items-container');
  if(!itemsContainerElement){
    return;
  }

let innerHTML='';
items.forEach(item=>{
  innerHTML+= `
  <div class="item-container">

      <img src="${item.image}" alt="earrings" class="item-image">
      <div class="rating">${item.rating.stars}⭐| ${item.rating.count}  </div>
      <div class="company-name">${item.company} </div>
      <div class="item-name">${item.item_name} </div>
      <div class="price">
        <span class="current-price">Rs.${item.current_price}</span>
        <span class="original-price">Rs.${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>

      <button class="btn-add-bag" onclick="addToBag(${item.id})"> Add to Bag </button> 

    </div>
`

});



itemsContainerElement.innerHTML =
innerHTML;


}
