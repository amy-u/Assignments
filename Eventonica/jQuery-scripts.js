$(document).ready(() => {
    const eventRecommender = new EventRecommender();
    
    //Adding new user
    $("#add-user").submit(() => {
        var str = $("#add-user-name").val().toUpperCase();
        var num = $("#add-user-id").val();
        if(str == '' && num == ''){
            alert("Error! Missing name or id nubmer.");
            return false;
        }
        else{
        $("#all-users").html(`<dt>${str}</dt> <dd><strong>ID:</strong> ${num} <dd>`);
        return false;
        };
    });


    //Deleting user
    $("#delete-user").submit(() => {
        var num = $("#delete-user-id").val();
        if(num == ''){
            alert("Error! Missing id nubmer.");
            return false;
        }
    })

    //Adding new event
    $("#add-event").submit(() => {
        var str = $("#add-event-name").val().toUpperCase();
        var num = $("#add-event-id").val();
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
        var num = $("#delete-event-id").val();
        if(num == ''){
            alert("Error! Missing id nubmer.");
            return false;
        }
    })

});
//Need to organize this better
//Stuck on trying to get into to my index.js