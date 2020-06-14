document.addEventListener( 'DOMContentLoaded', () => {

	Modernizr.on( 'webp', ( featureIsAvailabe ) => {

		let $background = document.getElementById( 'background' )

		if ( featureIsAvailabe ) {
			$background.style.backgroundImage = `url('${ $background.getAttribute( 'data-preferred' ) }')`
		} else {
			$background.style.backgroundImage = `url('${ $background.getAttribute( 'data-alternate' ) }')`
		}

	} )

} )
