$(document).ready(function() {
    // Set the interval for the carousel
    var interval = 5000; // 5 seconds
  
    // Set the current item to be the first item
    var currentItem = 1;
  
    // Set the carousel items
    var carouselItems = $('.carousel-item');
  
    // Set the total number of items
    var totalItems = carouselItems.length;
  
    // Set the current row and column to be 1
    var currentRow = 1;
    var currentColumn = 1;
  
    // Set the maximum number of rows and columns
    var maxRows = 2;
    var maxColumns = 2;
  
    // Show the first item
    $(carouselItems[0]).addClass('active');
  
    // Set the interval for the carousel
    setInterval(function() {
      // Remove the active class from all items
      $(carouselItems).removeClass('active');
  
      // Update the current item, row, and column
      currentItem++;
      currentColumn++;
      if (currentColumn > maxColumns) {
        currentColumn = 1;
        currentRow++;
        if (currentRow > maxRows) {
          currentRow = 1;
        }
      }
  
      // If the current item is greater than the total number of items, reset it to 1
      if (currentItem > totalItems) {
        currentItem = 1;
      }
  
      // Get the index of the current item
      var index = (currentRow - 1) * maxColumns + (currentColumn - 1);
  
      // Show the current item
      $(carouselItems[index]).addClass('active');
    }, interval);
  });
  