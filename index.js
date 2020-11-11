// create my Catalogue array
    const catalogue = [...Array(10).keys()]
    .map((_, index) =>({
        sku: index + 1,
        name: `pet ${index +1}`,
        amount: (Math.floor(Math.random() * 100)),
        presence: true,
        
      
     }));
  
  
  // Display Elements on the browser   
var html = catalogue.map(function (element) {
    
      
      let buttonCreate = () =>{
        let button = document.createElement("button");
        button.innerText = "Available";
      
        
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button);
        button.onclick = e =>{
          var clicking = document.getElementById('item');
          
          button.innerHTML = "available";
          if ( element.presence == true){
            
            button.innerHTML = "Not available"
             element.presence = false  
           
          }
          else{
         
            button.innerHTML = "available"
            element.presence =true
          }
          
        
        }
        };
        let Button = buttonCreate();
       
    return  '<li>' + element.sku   +',' +
      element.name+ ', ' + element.amount + (',')+ element.presence +  '</li>';  
 
      } ).join('');
      
   
  document.getElementById('item').innerHTML= html;
   

       

    

     

 
 


   
  