// create my Catalogue array
    const catalogue = [...Array(10).keys()]
    .map((_, index) =>({
        sku: index + 1,
        name: `pet ${index +1}`,
        amount: (Math.floor(Math.random() * 100)),
        availability: true
      
     }));
  
  
  // Display Elements on the browser   
var html = catalogue.map(function (element) {
    return  '<li>' + element.sku + ', ' +
      element.name+ ', ' + element.amount + (',')   +'</li>';  
 
      } ).join('');
     
  document.getElementById('item').innerHTML= html;
   
let buttonCreate = () =>{
let button = document.createElement("button");
button.innerText = "Buy";
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);
button.onclick = e =>{

}
};
    


    

     

 
 


   
  