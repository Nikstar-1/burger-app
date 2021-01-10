$("devour-form").on('submit', function(submitEvent){

    var devouredBurgersId = $(this).children(".burger_id").val(); 
    $.ajax({
        method: "PUT",
        url: "/burgers/devourburger/" + devouredBurgersId
    }).then(function(){
        location.reload();
    })
})