let data1 = fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json");
    let data2 = fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json");


const inputText=document.getElementById('inputId');



    Promise.all([data1, data2]).then(files=>{
        return Promise.all(files.map(r=> r.json()));
    }).then(([{...data1}, {...data2}])=>{


    
       const showId = document.getElementsByClassName("show")[0];

       const showId1 = document.getElementsByClassName("show1")[0];

       const showId2 = document.getElementsByClassName("show2")[0];

       const showId3 = document.getElementsByClassName("show3")[0];

       const showId4 = document.getElementsByClassName("show4")[0];

       inputText.addEventListener('keypress',(e)=>{
        // console.log(inputText.value)
       if(e.key==='Enter'){
        e.preventDefault();
        data1.cafes.forEach((product, index) =>{
            var proName=product.name
            var loca=product.location_id
           
            var check=inputText.value
              if(proName.includes(check)){
                  let p = document.createElement("p");
            
                  let pText = document.createTextNode(`${product.name}`);
                   p.appendChild(pText);
      
                   showId.appendChild(p);
                   data2.places.forEach((product, index)=>{
                      if(loca===product.id){
                        let p = document.createElement("p");
                        let pText = document.createTextNode(`${product.locality}`);
                        p.appendChild(pText);
                        showId1.appendChild(p);
              
                        let p1 = document.createElement("p");
                        let p1Text = document.createTextNode(`${product.postal_code}`);
                        p1.appendChild(p1Text);
                        showId2.appendChild(p1);
              
                        let p2 = document.createElement("p");
                        let p2Text = document.createTextNode(`${product.lat}`);
                        p2.appendChild(p2Text);
                        showId3.appendChild(p2);
              
                        let p3 = document.createElement("p");
                        let p3Text = document.createTextNode(`${product.long}`);
                        p3.appendChild(p3Text);
                        showId4.appendChild(p3);
                   
                      }
                    
                
      
      
               
              })
                   
          
              }
  
          });
       }
      
        
      
  
          
  
         
      })
        

    })
    

      