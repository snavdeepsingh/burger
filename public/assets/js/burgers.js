$(function(){
    $(".devourBurger").on("click", function(event) {
        var id = $(this).data("id");
        var newState = $(this).data("devour");
        

    
        var newDevourState = {
          devoured: newState
        };
    
        // Send the PUT request.
        $.ajax("/burgers/" + id, {
          type: "PUT",
          data: newDevourState
        }).then(
          function() {
            console.log("changed devour to", newDevourState);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

    });