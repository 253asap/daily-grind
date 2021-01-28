/* 
image src
alt tag
day of week
name of coffee
color
description
*/

let myDate = new Date();
let myDay = myDate.getDay();
let today;
let coffee;

let coffeeTemplate = (drink)=>{
    let myReturn;
    myReturn = `<p>
      <img
        src="${drink.pic}"
        alt="${drink.alt}"
        id="coffee"
      />
      <strong class="feature">${drink.day}'s Coffee Special:</strong> ${drink.day}'s daily
      coffee special is <strong class="feature">${drink.name}</strong>, ${drink.desc}
    </p>`
    return myReturn;
}

switch(myDay){
    case 3:
        today = "Wednesday"
        coffee = {
            color:"brown",
            name:"Drip",
            pic:"images/drip.jpg",
            alt:"A picture of a Drip Coffee",
            day:"Wednesday",
            desc:`Sometimes you just need the drip`
            
        }
        break;
    
}

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);
console.log('working')