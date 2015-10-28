$(document).ready(function() {
	$('#toggle').click(function() {
		$(this).toggleClass('active');
		$('#overlay').toggleClass('open');
  });

  //Media Gallery
  $(function(){
    $('#gallery-wrapper').mixItUp({
      animation: {
        animateResizeTargets: true
      }
    });
  })


  $('#iconified').on('keyup', function() {
      var input = $(this);
      if(input.val().length === 0) {
          input.addClass('empty');
      } else {
          input.removeClass('empty');
      }
  });

});

