class Event {
    constructor(ename, description) {
      this.ename = ename;// the event's name
      this.description = description;
      this.availableTickets = []
    };

    addAvailableTickets(name, money){
      let priceOf = new TicketType(name, money);//creating a new tickettype obj into the variable priceOf
      this.availableTickets.push(priceOf);//pushing the new ticket obj into the available ticket array
    };

    allTicket(){
      let allP = '';//store ticket strings
      $.each(this.availableTickets, function(index, item){// $.each is like a for loop. It is going thru this.avaiableTickets array and applying a function to each index
      allP += `<li> ${item.tn} ($${item.price})</li>`; //adding more string to the preexisting strings inside of allP
      })//item here refers to the object in each index (in this case the objects are tickets. Hense why we use .tn and .price because those are key names in the ticket objects)
      return allP;//returning the big string
    };

    // Now let's add another function. Write a function on Event named searchTickets that will take in two values (to specify the lower 
    //   and upper bounds of a price range), and return a list of ticket types available. The method should look like this when it is called: 
    //   eventObj3.searchTickets(0, 250) and will return the string: Eligible tickets: 1. Balcony ($100) 2. Mezzanine ($200) for that 
    //   particular call. If no tickets are available in that range, it will instead return: No tickets available. Use console.log to test 
    //   your function and make sure it works for different inputs.
    searchTickets(lP,uP){
      let eT = '';//The ekuguble ticket will be stored here
      $.each(this.aviableTicekts, function (obj){
        if(obj.money >= lP && obj.money <= uP){
          eT += `<li> ($${obj.money}</li>`
        }
      })
    }
  }

  class TicketType {
      constructor(tn, price){
          this.tn = tn;
          this.price = price;
      }
  }
  

  // The below statement creates an object.
const event1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
const event2 = new Event("Skillet & Sevendust", "Victorious war tour");
const event3 = new Event("Jenny Lewis", "On the line tour 2019");

const eventArray = new Array();
// pushing multiple objects to an array at once
eventArray.push(event1, event2, event3);

console.log(eventArray);

$(document).ready(function() {
    let html = "";
    $.each(eventArray, function(index, item) {
      html+= `<li>${item.ename} - ${item.description} <ol>Eligible tickets ${item.allTicket()}</ol> </li>`;
    });
    // insert final html into #event...
    $("#event").html(html);
  });

    event1.addAvailableTickets("human", 299);
    event1.addAvailableTickets("vampire", 99);
    
    event2.addAvailableTickets("General Admission", 25)
    event2.addAvailableTickets("Floor Seating", 80)

    event3.addAvailableTickets("Orchestra", 300)
    event3.addAvailableTickets("Mezzanine", 200)
    event3.addAvailableTickets("Balcony", 100)


    event3.searchTickets(0,250)
   