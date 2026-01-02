
$(document).ready(function()
{
	/**************************************************************************/
	/*	Template options													  */
	/**************************************************************************/

	var options=
	{
		supersized		:
		{
			slide		:
			[
				{image	:	'image/background/cs1.jpg'},
				{image	:	'image/background/cs2.jpg'},
				{image	:	'image/background/cs3.jpg'}
			]
		}
	}

	/**************************************************************************/
	/*	Supersized															  */
	/**************************************************************************/

	$.supersized(
	{
		slides					:	options.supersized.slide,
		autoplay				:	true,
		thumb_links				:	false,
		start_slide				:	1,
		thumbnail_navigation	:	false,
		fit_always				:	1,
		fit_portrait			:	1,
		fit_landscape			:	1,
		horizontal_center		:	1,
		vertical_center			:	1
	});

	/**************************************************************************/
	/*	Accordion															  */
	/**************************************************************************/

	$('.nostalgia-accordion').accordion(
	{
		icons			:	'',
		active			:	0,
		animate			:	'easeOutExpo',
		collapsible		:	true,
		heightStyle		:	'content',
		activate		:	function(event,ui)
		{
			try
			{
				$.scrollTo(ui.newHeader,300);
			}
			catch(e) {}
		}
	});

	/**************************************************************************/
	/*	Forms																  */
	/**************************************************************************/

	$('#contact-form').bind('submit',function(e)
	{
		e.preventDefault();
		submitContactForm();
	});

	$('#newsletter-form').bind('submit',function(e)
	{
		e.preventDefault();
		submitNewsletterForm();
	});

	$('textarea').elastic();
	//$('form label').inFieldLabels();

	/**************************************************************************/
	/*	Contact details button												  */
	/**************************************************************************/

	$('#contact-details-button').bind('click',function(e)
	{
		e.preventDefault();

		var contactDetails=$(this).parent('.contact-details');

		var top=parseInt(contactDetails.css('top'));
		var newTop=(top==0 ? parseInt(contactDetails.height()) : 0);

		contactDetails.animate({top:-1*newTop},{duration:100,complete:function()
		{

		}});
	});

	/**************************************************************************/
	/*	Twitter																  */
	/**************************************************************************/

	/* DISABLED: Twitter feed requires PHP backend - not compatible with static hosting
	$.getJSON('plugin/twitter-user-timeline/twitter-user-timeline.php',function(data)
	{
		if(data.length)
		{
			var list=$('<ul>');
			$(data).each(function(index,value)
			{
				list.append($('<li>').append($('<p>').html(linkify(value.text))));
			});

			$('#latest-tweets').append(list);

			$('#latest-tweets ul').carouFredSel(
			{
				circular		:	true,
				direction		:	'up',
				items:
				{
					visible		:	1,
					minimum		:	1
				},
				scroll:
				{
					items		:	1,
					duration	:	750,
					fx			:	'cover'
				}
			});

			setTwitterDimension();
		}
	});
	*/

	/**************************************************************************/
	/*	Image preloader														  */
	/**************************************************************************/

	$('.preloader img').each(function()
	{
		$(this).attr('src',$(this).attr('src') + '?i='+getRandom(1,100000));
		$(this).bind('load',function()
		{
			$(this).parent().first().addClass('loaded');
			$(this).css('opacity', 1);
		});
	});

	/**************************************************************************/
	/*	Image carousel														  */
	/**************************************************************************/

	var $carousel = $('.image-list.image-list-carousel');
	
	$carousel.carouFredSel(
	{
		auto				:
		{
			pauseOnHover    :	'immediate'
		},
		circular			:	true,
		direction			:	'left',
		scroll:
		{
			items			:	1,
			duration		:	750
		}
	});
	
	// Manually bind navigation buttons (carouFredSel didn't connect them automatically)
	$('.image-list-carousel-navigation-prev').on('click', function(e) {
		e.preventDefault();
		$carousel.trigger('prev');
		return false;
	});
	
	$('.image-list-carousel-navigation-next').on('click', function(e) {
		e.preventDefault();
		$carousel.trigger('next');
		return false;
	});

	/**************************************************************************/
	/*	Fancybox for images													  */
	/**************************************************************************/

	var helpers={title:{type:'inside'}};
	helpers.buttons={skipSingle:true};

	$('.fancybox-image').fancybox(
	{
		type					:	'image',
		beforeShow				:	function()
		{
			this.title=$(this.element).nextAll('.fancybox-subtitle').text();
		},
		helpers					:	helpers
	});

	/**************************************************************************/
	/*	Fancybox for youtube videos											  */
	/**************************************************************************/

	helpers={title:{type:'inside'}};
	helpers.media={};

	$('.fancybox-video-youtube').fancybox(
	{
		beforeShow				:	function()
		{
			this.title=$(this.element).nextAll('.fancybox-subtitle').text();
		},
		helpers					:	helpers
	});

	/**************************************************************************/
	/*	Fancybox for vimeo videos											  */
	/**************************************************************************/

	helpers={title:{type:'inside'}};
	helpers.media={};

	$('.fancybox-video-vimeo').fancybox(
	{
		beforeShow				:	function()
		{
			this.title=$(this.element).nextAll('.fancybox-subtitle').text();
		},
		helpers					:	helpers
	});

	/**************************************************************************/
	/*	"Clik here" caption													  */
	/**************************************************************************/

	blink($('.click-here'));

	/**************************************************************************/
	/*	Window resize														  */
	/**************************************************************************/

	$(window).resize(function()
	{
		setTwitterDimension();
		setImageListDimension();
	});

	$(window).trigger('resize');

	/**************************************************************************/
	$(".scrollto").click(function(e) {
		e.preventDefault();
		var to = $(this).attr("href");
		var $target = $(to);
		
		if ($target.length) {
			$('html, body').animate({
				scrollTop: $target.offset().top
			}, 800, function() {
				// Update URL after scroll completes
				history.pushState({page: to}, to, to);
			});
		}
		
		return false;
	});
});
