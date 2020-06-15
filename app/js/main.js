$(function() {
	var mixer = mixitup('.panel-group', {
    load: {
        filter: '.category-allinone'
    }
});
	//BEGIN
	$(".js-faq-title").on("click", function(e) {
		e.preventDefault();
		var $this = $(this);
		if (!$this.hasClass("faq__active")) {
			$(".js-faq-content").slideUp(400);
			$(".js-faq-title").removeClass("faq__active");
		}
		$this.toggleClass("faq__active");
		$this.next().slideToggle();
	});
	//END

	$('[data-search]').on('keyup', function() {
		var searchVal = $(this).val();
		var filterItems = $('[data-filter-item]');
		if ( searchVal != '' ) {
			filterItems.addClass('hidden');
			$('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
		} else {
			filterItems.removeClass('hidden');
		}
	});

	
});