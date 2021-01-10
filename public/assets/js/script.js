$(document).ready(function() {

    $(".devour-form").on("submit", function(submitEvent){
        console.log("in the script")
        submitEvent.preventDefault();
        var devouredBurgersId = $(this).children(".burger_id").val(); 
        $.ajax({
            method: "PUT",
            url: "/burgers/devourburger/" + devouredBurgersId
        }).then(function(){
            console.log("Reloading page")
            location.reload();
        })
    })
})