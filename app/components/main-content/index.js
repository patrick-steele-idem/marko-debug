module.exports = require( 'marko-widgets' ).defineComponent( {
	template: require( './template.marko' ),

	getTemplateData( state, input ) {
		return {
			name: input.name,
		};
	},

	init() {
		const el = this.el; // The root DOM element that the widget is bound to
		console.log( 'Initializing widget: ', el.id );
	},
} );
