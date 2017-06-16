//JS for like counter when the heart is clicked.. attempted stretch

var likeCount = {};

function addEventListeners() {
  $('.heartClick').on('click', function() {
    var id = $(this).attr('data-id');
    if (!likeCount[id]) likeCount[id] = 0;
    likeCount[id]++;
    $(`#${id} .likeCounter`).css('visibility', 'visible');
    console.log($(this, '.likeCounter'));
    $(`#${id} .likeCounter`).text(likeCount[id] + ' likes');
  });
}
