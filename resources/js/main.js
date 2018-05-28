$(document).ready(function() {
  //Add Block Functionality
  let values = [];


  $('#add-block .button').click(function() {
    //determin widht of last div
    var lastwidth = $('.pyramid li:last-child .item').width();

    //calculation of next div
    if (lastwidth == null) {
      var plus = 90;
    } else {
      var plus = lastwidth + 190; //not sure why 190 but with this value they line up smoothly. Was expecting 0 and 100 for the values.
    }
    //create radom color
    function randColor() {
      var colors = ["green", "yellowgreen", "Chocolate", "goldenrod", "cadetblue", "firebrick", "magenta", "LightSeaGreen", "Peru", "Sienna", "SlateBlue", "Snow", "Tan", "Skyblue"];
      var color = colors[Math.floor(Math.random() * colors.length)];

      return color
    }

    //make color available gloabally
    var resultColor = randColor();

    var blockNumber = $('#number-input').val();
    values.push(blockNumber);


    const sortedNumbers = values.sort(function (a, b){
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(sortedNumbers);

    // var test = document.querySelector('.pyramid').innerHTML = sortedNumbers.map(val => `<span class="values">${val}</span>`).join('');
    var $number = $('<li class="entry"><div class="item" style="width:' + plus + 'px; border-bottom: 60px solid ' + resultColor + ' ;"><span class="values">' + blockNumber + '</span></div></li>');
    $('.pyramid').append($number);
    // console.log(test);


  });

    $('#remove-block .button').click(function(){
      value = $(".values").last();//find last value added in pyramid//.attr()value of attribute placeholder,trim() is just for white space
      values.pop(value);
      console.log(values);
      $('.pyramid li').last().remove();

  })});
