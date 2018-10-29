$( document ).ready(function() {

  let products =$('#content').isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'masonry',
    horizontalOrder: true,
    percentPosition: true,
    masonry: {
      gutter: 10,
      columnWidth: '.item'
    }
  });

  // store product filters to allow multiple selections
  const filters = new Array();

  // toggle filters on desktop screens
  $('#filters-desktop > button').click( function(){
    $(this).toggleClass('selected');
    let filter = $(this).attr('data-filter');
    $(this).hasClass('selected') ? addFilter(filter) : removeFilter(filter);
    products.isotope({ filter: filters.join(',') }); // group filters, inclusive
  });

  // toggle filters on mobile screens
  $('#filters-mobile > select').click( function(){
    $(this).toggleClass('selected');
    let filter = $(this).attr('value');
    $(this).hasClass('selected') ? addFilter(filter) : removeFilter(filter);
    products.isotope({ filter: filters.join(',') }); // group filters, inclusive
  });

  function addFilter(f) { filters.indexOf(f) == -1 ? filters.push(f) : null; }
  function removeFilter(f) {
    let i = filters.indexOf(f);
    i != -1 ? filters.splice(i, 1) : null;
  }

});