module.exports = require( 'marko-widgets' ).defineComponent( {
	template: require( './template.marko' ),

	getTemplateData( state, input ) {
		console.log( 'test' );
		return Object.create( window.app.state, state, input );
	},
} );
