const appWidget = require( '../components/app-root' )
					.render( window.app.state )
					.prependTo( document.body )
					.getWidget();

console.log( 'appWidget', appWidget );
