$(function() {
  // like btn
  $('.review-dislike-btn').click(function(e) {
    var $el = $(e.currentTarget);
    if ($el.hasClass('loading')) return;
    $el.addClass('loading');
    $.ajax({
      url: '/api/review/' + $el.data('id') + '/dislike',
      method: 'POST',
      dataType: 'json',
      success: function(data) {
        $('.recommendation').val(data.numLikes);
        $('.review-dislike-btn').hide();
        location = '';
      },
      error: function(data, status) {
        if (data.status == 401) {
          alert('Login required!');
          location = '/signin';
        }
        console.log(data, status);
      },
      complete: function(data) {
        $el.removeClass('loading');
      }
    });
  });
}); 