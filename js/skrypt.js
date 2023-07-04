jQuery(function(){
		jQuery('#page').css({
			'background-color': '#00FFFF'
		});
		jQuery('h2').css({
			'letter-spacing': '5px'
		});
		jQuery('.link').css({
			'color': 'black',
			'text-decoration': 'none'
		});

		lista_ul = jQuery('ul').html();
		jQuery('ol').append(lista_ul);

		lista_ul = jQuery('ul').text();
		jQuery('p').append(lista_ul);

		let $zmiana = jQuery('li').eq(2).html();
		jQuery('li').eq(2).remove();
		jQuery('ul').prepend('<li>'+$zmiana+'</li>');

		jQuery('[href="assembler"]').attr('href', 'https://www.youtube.com/watch?v=4gwYkEK0gOk');
		jQuery('[href="c++"]').attr('href', 'https://www.youtube.com/watch?v=MNeX4EGtR5Y');
		jQuery('[href="java"]').attr('href', 'https://www.youtube.com/watch?v=l9AzO1FMgM8');
		jQuery('[href="javaScript"]').attr('href', 'https://www.youtube.com/watch?v=DHjqpvDnNGE');
		jQuery('[href="php"]').attr('href', 'https://www.youtube.com/watch?v=a7_WFUlFS94');
		jQuery('[href="python"]').attr('href', 'https://www.youtube.com/watch?v=x7X9w_GIm1s');
		jQuery('[href="rust"]').attr('href', 'https://www.youtube.com/watch?v=5C_HPTJg5ek');
		jQuery('a:odd').css({
			'color': 'white',
			'background-color': 'black',
			'font-size': '20px'
		});

		jQuery('a').eq(1).addClass('link');
		jQuery('a').eq(2).removeClass('link');
		jQuery('a').eq(3).removeClass('link').addClass('kolejny_link');
		jQuery('a').eq(4).toggleClass('link').toggleClass('kolejny_link');
		
		jQuery('div').each(function(nr){
			console.log('numer diva o nazwie ', this.id,' to ',nr);
		})
	}

)