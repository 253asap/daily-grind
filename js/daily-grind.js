/* 
image src
alt tag
day of week
name of coffee
color
description
*/

let myDate = new Date();
let myDay;
let today;
let coffee;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

myDay = urlParams.has('day') ? parseInt(urlParams.get('day')) : myDate.getDay();

let drinkTemplate = (drink)=>{
    let myReturn;
    myReturn = `
    <p>
      <img
        src="${drink.pic}"
        alt="${drink.alt}"
        id="coffee"
      />
      <strong id="coffeeHighlight" class="feature">${drink.day}'s Coffee Special:</strong> ${drink.day}'s daily
      coffee special is <strong>${drink.name}</strong>, ${drink.desc}
    </p>`
    return myReturn;
}

switch(myDay){
    case 0:
        today = "Sunday"
        coffee = {
            color:"green",
            name:"Caramel-Latte",
            pic:"images/caramel-latte.jpg",
            alt:"A picture of a Caramel-Latte",
            day:"Sunday",
            desc:`A delicious caremel latte. Perfect for ending a nice enjoyable weekend!`
            
        }
        break;
    case 1:
        today = "Monday"
        coffee = {
            color:"pink",
            name:"Bubble Tea",
            pic:"images/bubble-tea.jpg",
            alt:"A picture of a Bubble Tea",
            day:"Monday",
            desc:`I like me some Bubble Tea. It is so bubbly and tasty!`
            
        }
        break;
    case 2:
        today = "Tuesday"
        coffee = {
            color:"blue",
            name:"Cold Brew",
            pic:"images/cold-brew.jpg",
            alt:"A picture of a cold brew",
            day:"Tuesday",
            desc:`Made chilled, never heated, and with a higher coffee to water ratio than regular drip coffee. It's made by creating a concentrate which is then mixed with fresh water`
            
        }
        break;
    case 3:
        today = "Wednesday"
        coffee = {
            color:"brown",
            name:"Drip",
            pic:"images/drip.jpg",
            alt:"A picture of a Drip Coffee",
            day:"Wednesday",
            desc:`Sometimes you just need the drip. Rain drop, drop top!`
            
        }
        break;
    case 4:
        today = "Thursday"
        coffee = {
            color:"yellow",
            name:"Frappaccino",
            pic:"images/frappaccino.jpg",
            alt:"A picture of a frappaccino",
            day:"Thursday",
            desc:`It consists of coffee or crème base, blended with ice and other various ingredients like flavored syrups, usually topped with whipped cream and or spices.`
            
        }
        break;
    case 5:
        today = "Friday"
        coffee = {
            color:"red",
            name:"Mocha",
            pic:"images/mocha.jpg",
            alt:"A picture of a mocha",
            day:"Friday",
            desc:`A chocolate-flavoured variant of a caffè latte. Other commonly used spellings are mochaccino and also mochachino. The name is derived from the city of Mocha, Yemen, which was one of the centers of early coffee trade.`
            
        }
        break;
    case 6:
        today = "Saturday"
        coffee = {
            color:"grey",
            name:"Pumpkin Spice Latte",
            pic:"images/pumpkin-spice-latte.jpg",
            alt:"A picture of a pumpkin spice latte",
            day:"Saturday",
            desc:`The Pumpkin Spice Latte is a coffee drink made with a mix of traditional autumn spice flavors, steamed milk, espresso, and often sugar, topped with whipped cream and pumpkin pie spice. Since 2015, it has also often contained a small amount of pumpkin puree.`
            
        }
        break;
    
}

document.getElementById("coffee-output").innerHTML = drinkTemplate(coffee);
document.getElementsByTagName("HTML")[0].getElementsByClassName.backgroundColor = coffee.color;
document.getElementById("coffeeHighlight").style.color = coffee.color;
console.log('working')