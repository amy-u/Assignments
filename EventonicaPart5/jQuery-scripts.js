$(document).ready(() => {
    // const eventRecommender = new EventRecommender();
    // eventRecommender.addUser('liz Audry', "88");
    // eventRecommender.addUser('20thCentDaddy', 'joseph');
    // eventRecommender.addUser('XcrusheddreamsX', 'caesar');
    // eventRecommender.addUser('GhostPuncher', 'star platinum');
    // eventRecommender.addUser('steelballz', 'gyro', '94602');
    // eventRecommender.addEvent('00001', 'the party', 'festival', 'San Francisco, CA', 'golden gate park', 'a real fuckin party');
    // eventRecommender.addEvent('00002', 'the blood brothers', 'concert', 'Oakland, CA', 'The Fox', 'the blood brothers, featuring celebration');
    // eventRecommender.addEvent('00003', 'rilo kiley', 'concert', 'Oakland, CA', 'The New Parkway', 'reunited and it feels so good', '19:00');
    // eventRecommender.addEvent('00004', '...and you will know us by the trail of dead', 'concert', 'San Francisco, CA', 'Slim\'s', 'they\'re about to rock your socks off');
    // eventRecommender.addEvent('00005', 'San Francisco Food and Wine Festival', 'culture', 'San Francisco, CA', 'Fort Mason Center', 'come enjoy some food and wine');
    // eventRecommender.addEvent('00006', 'against me!', 'concert', 'San Francisco, CA', 'Great American Music Hall', 'hell yeah, that\'s them. that\'s against me!!');
    
    // eventRecommender.addUser('Amy Ung');
    
    //Adding new user
    $("#add-user").submit(function() {
        event.preventDefault();
<<<<<<< HEAD
        let name = $("#add-user-name").val().toUpperCase();
        let id = $("#add-user-id").val();
=======
        let str = $("#add-user-name").val().toUpperCase();
        let num = $("#add-user-id").val();
>>>>>>> 6f8ce2cd6eaae71d2a6cd1ca2f4b30fbf5e7974f
        // console.log(str,num);
        $.ajax({
            url: '/users',
            type: 'POST',
            contentType: 'application/json',
<<<<<<< HEAD
            data: JSON.stringify({id,name})
=======
            data: JSON.stringify({str,num})
>>>>>>> 6f8ce2cd6eaae71d2a6cd1ca2f4b30fbf5e7974f
        });
        // console.log(str,num);
        
        // if(str == "" || num == ""){
        //     alert("Error! Missing name or id nubmer.");
        // } else{
        //     // $("#all-users").html(`<dt>${str}</dt> <dd><strong>ID:</strong> ${num} <dd>`),
        //     eventRecommender.addUser(num,str);
        //     // $("#all-users").html(`<dt> ${eventRecommender.users}</dt>`);
        // };
    });

    //Deleting user
    $("#delete-user").submit(() => {
        event.preventDefault();
        let num = $("#delete-user-id").val();
        eventRecommender.deleteUser(num);
        if(num == ''){
            alert("Error! Missing id nubmer.");
            return false;
        }
    
    })

    //Adding new event
    $("#add-event").submit((event) => {
        event.preventDefault();
        let str = $("#add-event-name").val().toUpperCase();
        let num = $("#add-event-id").val();
        eventRecommender.addEvent(num,str);
        if(str == '' && num == ''){
            alert("Error! Missing name or id nubmer.");
        }
        else{$("#all-events").html(`<dt>${str}</dt> <dd><strong>ID:</strong> ${num} <dd>`);
        console.log(eventRecommender.user)
        }
    });
    //Deleting event
    $("#delete-event").submit((event) => {
        event.preventDefault();
        let num = $("#delete-event-id").val();
        eventRecommender.deleteEvents(num);
        if(num == ''){
            alert("Error! Missing id nubmer.");
        }
    })

    $("#keyword-search").submit((event) => {
        event.preventDefault();
        let keyS = $("#keyword-search-id").val();
        $.ajax({
            type:"GET",
            url:`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyS}&apikey=PJ8yG7ihoki3GLVbSJmFtl4BcM2wvsuO`,
            async:true,
            dataType: "json",
            success: function(result) {
                        console.log(result);
                        // Parse the response.
                        // Do other things.
                        result._embedded.events.map((anEvent) => {
                            $("#show-up").append(`<dt> Name: ${anEvent.name} </dt>`);
                        })
                     },
            error: function(xhr, status, err) {
                        // This time, we do not end up here!
                     }
          });
    })

});
//Need to organize this better
//Stuck on trying to get into to my index.js