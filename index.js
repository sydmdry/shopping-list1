$(function(){
  //stop the default form submission
  $('#js-shopping-list-form').submit(event =>{
    event.preventDefault();
//create the new item as the value of whatever's entered into shopping-list-entry
    const newItem = $('#shopping-list-entry').val();

  
    //append that newItem 
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
});


//remove list item
$('.shopping-list').on('click', '.shopping-item-delete', function(event){
  $(this).closest('li').remove();
})


//check list item
$('.shopping-list').on('click', '.shopping-item-toggle', function(event){
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
});

});