class EventRecommender {
    constructor(events,users) {
    // All main properties should go here.
    
    this.events = [];
    this.users = [];
    
    }

    addEvent() {
    // Adds a new Event to the System
    }

    addUser() {
    // Adds a new User to the System
    let newUser = new User(first,last); // Creating a new user obj into the variable newUser
    this.users.push(newUser); // Pushing the newUser obj into the user array that is in the constructor
    }

    saveUserEvent(){
    // Allow users to save events to a personal Events array.
    }

    deleteUser() {
    // Deletes a User from the system
    }
   
    deleteEvent() {
    // Deletes the Event from the system
    }

    findEventsByDate(){
    // Returns all events on a given date
    }
    
    findEventsbyCategory(){
    // Returns all events in a given category
    }
}

class User {
constructor(first, last){
    this.first = first;
    this.last = last;
}
}



/* This event will have the name of the event, description, time, amount of tickets, available tickets,  */
class Event {
    constructor(eName,description) {
      this.eName = eName; // Event's name
      this.description = description; // Discription of the event
      this.availableTickets = []; // Empty array to store the available tickets
    }
  
    addAvailableTickets(seatS, amount) {
      let priceOf = new TicketType(name, amount); //creating a new tickettype obj into the variable priceOf
      this.availableTickets.push(priceOf); //pushing the new ticket obj into the available ticket array
    }
  
    allTicket() {
      let allP = "Available Tickets: "; //store ticket strings
      $.each(this.availableTickets, function(index, item) {
        // $.each is like a for loop. It is going thru this.avaiableTickets array and applying a function to each index
        allP += `<li>${item.tn} ($${item.price})</li>`; //adding more string to the preexisting strings inside of allP
      }); //item here refers to the object in each index (in this case the objects are tickets. Hense why we use .tn and .price because those are key names in the ticket objects)
      return allP; //returning the big string
    }
  
    searchTickets(min,max) {
      let eT = "Eligible tickets: "; //The eligible ticket will be stored here
      $.each(this.availableTickets, function(index, item) {
        if (min <= item.price && item.price <= max) {
          eT += `<li>${item.tn} ($${item.price})</li>`;
        }
      });
      return eT;
    }

    timeEvent(time){
        
    }
  }
  
  class TicketType {
    constructor(ticketName, description) {
      this.ticketName = ticketName;
      this.description = description;
    }
  }
  
  const eventArray = new Array();
  // pushing multiple objects to an array at once
  eventArray.push(/*input of events*/);
  
  $(document).ready(function() {
    let html = "";
    $.each(eventArray, function(index, item) {
      html += `<li>${item.ename} - ${item.description} <ol>${item.searchTickets(0,250)}</ol> </li>`;
    });
    // insert final html into #event...
    $("#index").html(html);
  });
  