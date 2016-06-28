const appWidget = require( '../components/app-root/widget.js' )
					.render( window.app.state )
					.prependTo( document.body )
					.getWidget();

console.log( 'appWidget', appWidget );
