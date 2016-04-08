$(function (){

  $('button').click(function(){
    $.get('http://localhost:3000/balance').done(function(response){
      $("bank h2").append("Account Balance");
      $("p").html(response);
    });
  });

});
