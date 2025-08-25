/**
 * custom.js
 *
 * Blocked functions.
 *
 */

( function( $ ) {

	/*
	 * Social links
	 */
	$('.social-links li').each(function(){
		$(this).find('a').each(function(){
			$(this).wrapInner('<span class="screen-reader-text"></span>');
		});
	});

	// move inside toggle menu at certain width
	if ($(window).width() < 960) {
		$( '.social-links' ).insertBefore( '.copyright' );
	}

	/*
	 * Footer scroll to top
	 */
	$( document ).ready( function() {
		$( '.scroll' ).click( function() {
			$( 'html, body' ).animate( {scrollTop : 0},800 );
			return false;
		} );

		$( '.menu-toggle' ).click( function() {
			$( 'html, body' ).animate( {scrollTop : 0},400 );
			return false;
		} );
	} );

	/*
	 * Close menu with esc key
	 */
	sidebarToggle = $( '#masthead' ).find( '.main-navigation' ),

	$( document ).keyup( function( e ) {
		if ( 27 === e.keyCode && sidebarToggle.hasClass( 'toggled' ) ) {
			sidebarToggle.removeClass( 'toggled' ).attr( 'aria-expanded', 'false' );
			$( 'html, body' ).animate( {scrollTop : 0},400 );
		}
	} );

} )( jQuery );