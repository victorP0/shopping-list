$('#js-shopping-list-form').submit(function() {
      event.preventDefault();
      //log item entry //
      const item = $(this).find('input[name="shopping-list-entry"]').val();
        //reset #shopping-list-entry to an empty value//
      $('#shopping-list-entry').val('');
        //append item to the .shopping-list //
      $('.shopping-list').append(
        `<li>
          <span class="shopping-item">${item}</span>
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

    $('.shopping-list').on('click','.shopping-item-toggle',function(){
        //when a click happens, located parent 'li', find the .shopping-item and .toggleClass
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    $('.shopping-list').on('click','.shopping-item-delete',function(){
        //when a click happens, located parent 'li' and .remove
    $(this).closest('li').remove();
    });