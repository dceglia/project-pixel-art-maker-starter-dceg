


console.log($("#colorPicker").val());


console.log($("#inputHeight").val());
console.log($("#inputWeight").val());


$("input[type='submit']").on("click", function(event) {

    event.preventDefault();
    console.log("blah");

    var height = $("#inputHeight").val();
    var width = $("inputWeight").val();

    makeGrid(height, width);

});

function makeGrid(height, width) {

    for (let i = 0; i < height; i++) {

        $("#pixelCanvas").append($("<tr></tr>"));
    
        for (let j = 0; j < width; j++) {
    
            $("tr").last().append($("<td></td>"));
    
        }
        
    }    

}


