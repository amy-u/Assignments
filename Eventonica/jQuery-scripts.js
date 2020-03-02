$(document).ready(() => {
    const eventRecommender = new EventRecommender();
    // eventRecommender.addUser('liz Audry');
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
        let str = $("#add-user-name").val().toUpperCase();
        let num = $("#add-user-id").val();
        console.log(str,num);

        eventRecommender.addUser(num,str);
        if(str == '' && num == ''){
            alert("Error! Missing name or id nubmer.");
            return false;
        }
        else if( num.type() == number){
            alert("Error! Not name or id nubmer.");
            return false;
        }
        else{
        $("#all-users").html(`<dt>${str}</dt> <dd><strong>ID:</strong> ${num} <dd>`);
        return false;
        };
    });


    //Deleting user
    $("#delete-user").submit(() => {
        let num = $("#delete-user-id").val();
        eventRecommender.deleteUser(num);
        if(num == ''){
            alert("Error! Missing id nubmer.");
            return false;
        }
    
    })

    //Adding new event
    $("#add-event").submit(() => {
        let str = $("#add-event-name").val().toUpperCase();
        let num = $("#add-event-id").val();
        eventRecommender.addEvent(num,str);
        if(str == '' && num == ''){
            alert("Error! Missing name or id nubmer.");
            return false;
        }
        else{$("#all-events").html(`<dt>${str}</dt> <dd><strong>ID:</strong> ${num} <dd>`);
        return false;
        }
    });
    //Deleting event
    $("#delete-event").submit(() => {
        let num = $("#delete-event-id").val();
        eventRecommender.deleteEvents(num);
        if(num == ''){
            alert("Error! Missing id nubmer.");
            return false;
        }
    })

    $("#keyword-search").submit(() => {
        let keyS = $("#keyword-search-id").val();
    })

});
//Need to organize this better
//Stuck on trying to get into to my index.js