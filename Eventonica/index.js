class EventRecommender {
    constructor() {
    // All main properties should go here.
    //this is ticketmaster's database
    //imagine this as a search bar
    this.events = [];
    this.users = [];
    this.deletedUsers = [];
    this.deletedEvents = [];
    
    }

    addEvent(eName,description,date,city,venue,price) {
    // Adds a new Event to the System
    let newEvent = new Event(eName,description,date,city,venue,price);
    this.events.push(newEvent);
    }

    addUser(first,last) {
    // Adds a new User to the System
    let newUser = new User(first,last); // Creating a new user obj into the variable newUser
    this.users.push(newUser); // Pushing the newUser obj into the user array that is in the constructor
    }

    saveUserEvent(event,user){
    // Allow users to save events to a personal Events array.
    // Want take the event that gets passed in and store it in to the user that gets passed in
    user.likes.push(event);
    }

    deleteUser(user) {
    // Deletes a User from the system
    this.deletedUsers.push(user); // This stores the deleted user in to deletedUser as histry for data information/records
    this.user.splice(user,1); // This method cuts out the user from the data base/accounts
    }
   
    deleteEvent(event) {
    // Deletes the Event from the system
    this.deletedEvents.push(event); // This stores the deleted events in to deletedEvents as history for records
    this.events.splice(event,1); // This method cuts out the events from the event list.
    }

    findEventsByDate(userInputDate,theEventDatesGiven){
    // Returns all events on a given date
    // The userInPutDate will be an input from the search bar note this will be just MM/DD/YYYY
    events.filter(function (time){

        var matchingEvents = [];
        for(let i = 0; i < theEventDatesGiven.length; i ++){// Making sure the the loop goes through the all the event dates
            var wantDate = new Date(userInputDate).getTime(); // convert to mill
            var eventDates = theEventDatesGiven[i].getTime(); // convert the event date into mill to compare
            if(wantDate == eventDates){ // comparing the millsecond
                matchingEvents.push(theEventDatesGiven[i]); // return the event
            }
        }
        else{
            matchingEvents.push("No Events has been found") // If not found
        }
    return matchingEvents;
    })
    };
    
    findEventsbyCategory(userInputCat,eventGivenCat){
    // Returns all events in a given category
        var toCap = userInputCat.toUpperCase();
        var matchingCate = [];
        for(let i = 0; i < eventGivenCat.length; i++){
        if(toCap ==  eventGivenCat[i]){
            matchingCate.push(eventGivenCat[i]);
        }
    }
        else {
        matchingCate.push("No Events found in this category");
    }
    return matchingCate;
}

class User {
    //my name is Amy, Ung,
    constructor(first, last){
    this.first = first;
    this.last = last;

    this.likes = [];
    this.upComingEvents = [];
}


}



/* This event will have the name of the event, description, time, amount of tickets, available tickets,  */
class Event {
    constructor(eName,description,date,city,venue,price) {
      this.eName = eName; // Event's name
      this.description = description; // Discription of the event
      this.date = date;
      this.city = city;
      this.venue = venue;
      this.price = price;

    //   this.availableTickets = []; // Empty array to store the available tickets
    }
  
    // addAvailableTickets(seatS, amount) {
    //   let priceOf = new TicketType(name, amount); //creating a new tickettype obj into the variable priceOf
    //   this.availableTickets.push(priceOf); //pushing the new ticket obj into the available ticket array
    // }
  
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
  