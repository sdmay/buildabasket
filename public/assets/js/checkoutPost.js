   $("#submit").click(function(){
        console.log("CLICK")

simpleCart.each(function (item, x) {
    var item_name = (item.get('name'));
    var item_name1 = (item.get('name'));
    var quantity = (item.get('quantity'));
    var quantity1 = (item.get('quantity'));
    var total = (item.get('price'));
    console.log(item);

    var lessProduct = {
                item_name:  item_name,
                quantity: quantity,
                total: total,
                userId: 1
            
    };
    console.log(lessProduct)
    $.post("/api/lessproduct", lessProduct)
    .done(function(data) {
        // Log the data we found
       
        console.log("LESSPRODUCT");
        console.log(data)
        
    // On success, run the following code
         
    });
    
});
$("#myModal").modal("toggle");
    });

    
  
 $(".addToCart").click(function(){
 $("#completeModal").modal("toggle");
 });
 



 


$("#closeModal").click(function(){
    simpleCart_quantity = 0;
    window.location.href='/complete';

});

// <<<<<<< HEAD
// JotForm button ID
   $("#input_18").click(function(){
        console.log("CLICK")

simpleCart.each(function (item, x) {
    var item_name = (item.get('name'));
    var item_name1 = (item.get('name'));
    var quantity = (item.get('quantity'));
    var quantity1 = (item.get('quantity'));
    var total = (item.get('price'));
    console.log(item);

    var lessProduct = {
                item_name:  item_name,
                quantity: quantity,
                total: total,
                userId: 1
            
    };
    console.log(lessProduct)
    $.post("/api/lessproduct", lessProduct)
    .done(function(data) {
        // Log the data we found
       
        console.log("LESSPRODUCT");
        console.log(data)
        
    // On success, run the following code
         
    });
    
});
$("#myModal").modal("toggle");
    });

    
  
 $(".addToCart").click(function(){
 $("#completeModal").modal("toggle");
 });
 



 


$("#closeModal").click(function(){
    simpleCart_quantity = 0;
    window.location.href='/complete';
// =======
$("#logout").click(function(){
    simpleCart_quantity = 0;
    window.location.href='/login';
// >>>>>>> 857d0fc9946cb19378b6a0afcc66ba6ea40026d2

});

