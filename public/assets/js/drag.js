


  $( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );



  $("#b1").on("click", function(){
      console.log("worked");
      $("#basketBack").html("<img class='b1back' src='./assets/images/empty_basket/Basket_Backs/brown_with_straw.png'>");
      $("#basketFront").html("<img class='b1front' src='./assets/images/empty_basket/Basket_Fronts/brown_with_straw_front.png'>");
  })

  $("#b2").on("click", function(){
      console.log("worked");
      $("#basketBack").html("<img class='b2back' src='./assets/images/empty_basket/Basket_Backs/brown_round.png'>");
      $("#basketFront").html("<img class='b2front' src='./assets/images/empty_basket/Basket_Fronts/brown_round_front.png'>");
  })

    $("#b3").on("click", function(){
      console.log("worked");
      $("#basketBack").html("<img class='b3back' src='./assets/images/empty_basket/Basket_Backs/red_bow.png'>");
      $("#basketFront").html("<img class='b3front' src='./assets/images/empty_basket/Basket_Fronts/red_bow_front.png'>");
  })

  $("#b4").on("click", function(){
      console.log("worked");
      $("#basketBack").html("<img class='b3back' src='./assets/images/empty_basket/Basket_Backs/red_bow.png'>");
      $("#basketFront").html("<img class='b3front' src='./assets/images/empty_basket/Basket_Fronts/red_bow_front.png'>");
  })

    $("#b5").on("click", function(){
      console.log("worked");
      $("#basketBack").html("<img class='b3back' src='./assets/images/empty_basket/Basket_Backs/red_bow.png'>");
      $("#basketFront").html("<img class='b3front' src='./assets/images/empty_basket/Basket_Fronts/red_bow_front.png'>");
  })

    $("#b6").on("click", function(){
      console.log("worked");
      $("#basketBack").html("<img class='b3back' src='./assets/images/empty_basket/Basket_Backs/red_bow.png'>");
      $("#basketFront").html("<img class='b3front' src='./assets/images/empty_basket/Basket_Fronts/red_bow_front.png'>");
  })

    $("#b7").on("click", function(){
      console.log("worked");
      $("#basketBack").html("<img class='b3back' src='./assets/images/empty_basket/Basket_Backs/red_bow.png'>");
      $("#basketFront").html("<img class='b3front' src='./assets/images/empty_basket/Basket_Fronts/red_bow_front.png'>");
  })

//  $(".basketHolder").html('<div class="newbasketClass">');
// var emptyBasketImageSource;
// Saving empty basket selection
$(".picture").on('click', function(){
    var emptyBasket = {};
    emptyBasket.imgpath = $(this)[0].src;
    // emptyBasketImageSource = emptyBasket.imgpath
    console.log(emptyBasket.imgpath);
    sessionStorage.setItem('emptyBasketChoice', JSON.stringify(emptyBasket));

    var basketChoice = JSON.parse(sessionStorage.getItem("emptyBasketChoice"));
    console.log(basketChoice);

    $('#empty').html("<img src='" + basketChoice.imgpath + "'>");

});
//item click
$(".item").on('click', function(){
    var item = {};
    item.imgpath = $(this)[0].src;
    // emptyBasketImageSource = emptyBasket.imgpath
    console.log(item.imgpath);
    sessionStorage.setItem('itemBasketChoice', JSON.stringify(item));

    var itemChoice = JSON.parse(sessionStorage.getItem("itemBasketChoice"));
    console.log(itemChoice);
    console.log(itemChoice.imgpath);
    console.log("<img src='" + itemChoice.imgpath+ "'>")
    $("<img src='" + itemChoice.imgpath+ "'>").append('#basketBack');

});
