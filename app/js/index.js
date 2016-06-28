window.app = window.app || {};

window.app.state = window.app.state || {};

window.app.state.user = {
	email: 'admin@falcon.com',
	tenant: 'team1dev',
	tenants: [ 'Siemens', 'QA', 'team1dev' ],
	canAccessAction: {
		dashboard: true,
		manage: true,
		visualize: true,
	},
};

window.app.state.navItems = {
	type: Array,
	value: [ {
		name: 'Dashboard',
		title: 'Dashboard',
		icon: 'fa-tachometer',
		id: 'dashboardmenu',
		children: [ {
			name: 'Dashboards',
			title: 'Dashboards',
			href: 'Dashboards',
		} ],
	}, {
		id: 'tableaumenu',
		title: 'Visualization',
		icon: 'fa-bar-chart',
		name: 'Visualize',
		children: [ {
			href: 'TableauHome',
			title: 'Advanced Visualization',
			name: 'Advanced Visualization',
		}, {
			href: 'TableauAnalytics',
			title: 'Visualize Analytic Results',
			name: 'Analytics',
		}, {
			href: 'TableauBulkExtract',
			title: 'Visualize Bulk Exports',
			name: 'Bulk Exports',
		}, {
			href: 'TableauKPIDefinition',
			title: 'Visualize KPI Definitions',
			name: 'KPI Definitions',
		} ],
	}, {
		id: 'alertsmenu',
		title: 'Alerts',
		icon: 'fa-bell-o',
		name: 'Alerts',
		children: [ {
			href: 'CreateAlerts',
			title: 'Create Alerts',
			name: 'Create Alerts',
		}, {
			href: 'MySubscriptions',
			title: 'My Subscriptions',
			name: 'My Subscriptions',
		} ],
	}, {
		id: 'managemenu',
		title: 'Visualization',
		icon: 'fa-cogs',
		name: 'Manage',
		children: [ {
			href: 'TableauBulkExportExtracts',
			title: 'Manage Bulk Export Workbooks',
			name: 'Bulk Exports',
		}, {
			href: 'TableauProjects',
			title: 'Manage Projects',
			name: 'Projects',
		}, {
			href: 'TableauWorkbooks',
			title: 'Manage Workbooks',
			name: 'Workbooks',
		} ],
	}, {
		id: 'buildermenu',
		title: 'Builder',
		icon: 'icon-settings',
		name: 'Application Builder',
		children: [ {
			href: 'UIUnit_NEW?service=UIUnit',
			title: 'UI Builder',
			name: 'Layout Builder',
		}, {
			href: 'Classes',
			title: 'Service Builder',
			name: 'Class Builder',
		}, {
			href: 'Storages',
			title: 'Storage Builder',
			name: 'Storage Builder',
		}, {
			href: 'IDE',
			title: 'IDE',
			name: 'IDE',
		} ],
	}, {
		id: 'accessmenu',
		title: 'Access',
		icon: 'icon-key',
		name: 'Access Control',
		children: [ {
			href: 'Account',
			title: 'Account',
			name: 'Account',
		}, {
			href: 'AccountGroup',
			title: 'Account Group',
			name: 'Account Group',
		}, {
			href: 'Role',
			title: 'Roles',
			name: 'Roles',
		}, {
			href: 'Module',
			title: 'Modules',
			name: 'Modules',
		}, {
			href: 'Application',
			title: 'Applications',
			name: 'Applications',
		}, {
			href: 'BrandOwner',
			title: 'Consumer',
			name: 'Consumer',
		} ],
	}, {
		id: 'appsmenu',
		title: 'Applications',
		icon: 'icon-drawer',
		name: 'Applications',
		children: [ {
			href: 'BulkExtracts',
			title: 'BulkExtracts',
			name: 'Bulk Extracts (Proto)',
		}, {
			href: 'ImageLibrary',
			title: 'ImageLibrary',
			name: 'Image Library (Proto)',
		}, {
			href: 'Calculator',
			title: 'Calculator Scenario',
			name: 'Calculator',
		}, {
			href: 'YahooService',
			title: 'Yahoo Weather',
			name: 'Yahoo Weather',
		}, {
			href: 'DataScientist',
			title: 'Data Scientist',
			name: 'Data Scientist',
		}, {
			href: 'ContainerCreate',
			title: 'Container Scenario',
			name: 'Container - Create',
		}, {
			href: 'ContainerManage',
			title: 'Container Scenario',
			name: 'Container - Manage',
		}, {
			href: 'ApplicationCreate',
			title: 'Application Scenario',
			name: 'Application - Create',
		}, {
			href: 'SearchPage',
			title: 'Fast Context Search',
			name: 'FCS (Search)',
		}, {
			href: 'AppFeedback',
			title: 'AppFeedback',
			name: 'Feedback',
		}, {
			href: 'AppFeedbackViewer',
			title: 'AppFeedbackViewer',
			name: 'Feedback Viewer',
		} ],
	}, {
		id: 'omneomenu',
		title: 'Examples',
		icon: 'icon-pin',
		name: 'Examples',
		children: [ {
			href: 'AngularJSPage',
			title: 'IDE',
			name: 'Angular Binding Example',
		}, {
			href: 'AngularRouting',
			title: 'Angular Routing',
			name: 'Angular Routing Example',
		}, {
			href: 'Dashboard_DEMO',
			title: 'Dashboard',
			name: 'Sample Dashboard',
		}, {
			href: 'UltimateDashboard',
			title: 'Ultimate Dashboard',
			name: 'Ultimate Dashboard',
		}, {
			href: 'Locales',
			title: 'Locales',
			name: 'Locales',
		}, {
			href: 'Labels',
			title: 'Labels',
			name: 'Labels',
		}, {
			href: 'Labels_NEW?service=Labels',
			title: 'Labels NEW',
			name: 'Labels',
		}, {
			href: 'Classes_NEW?service=Classes',
			title: 'Classes NEW',
			name: 'Classes',
		}, {
			href: 'Classes_DEV?service=Classes',
			title: 'Classes DEV',
			name: 'Classes',
		}, {
			href: 'SourcePage',
			title: 'SourcePage',
			name: 'Source Page',
		} ],
	}, {
		id: 'usermenu',
		title: 'User',
		icon: 'icon-user',
		name: 'User Management',
		children: [ {
			href: 'http://localhost/oab/Manage',
			title: 'Manage Profile',
			name: 'Manage Profile',
		}, {
			href: 'http://localhost/oab',
			title: 'Open Omneo Home',
			name: 'Home',
		}, {
			href: '/portal/',
			title: 'Open Omneo Classic',
			name: 'Omneo Classic',
		}, {
			href: '#',
			title: 'Log Off',
			name: 'Log Off',
		} ],
	} ],
};


$( document ).ready( function ready() {
	// close panel when click outside of it
	$( 'html' ).on( 'click', function onClick( ) {
		$( '.user-panel' ).addClass( 'hidden' );
		$( '.settings-panel' ).addClass( 'hidden' );
		$( 'settings-sidebar' ).addClass( 'hidden' );
	} )
	.on( 'click', '.user-panel', function onClick( event ) {
		event.stopPropagation();
		event.stopImmediatePropagation();
	} )
	.on( 'click', '.settings-panel', function onClick( event ) {
		event.stopPropagation();
		event.stopImmediatePropagation();
	} );

	// open-close panel
	$( '.user-panel-activate' ).on( 'click', function onClick( event ) {
		event.preventDefault();
		event.stopImmediatePropagation();
		$( '.user-panel' ).toggleClass( 'hidden' );
	} );

	// open-close panel
	$( '.settings-panel-activate' ).on( 'click', function onClick( event ) {
		event.preventDefault();
		event.stopImmediatePropagation();
		$( '.settings-panel' ).toggleClass( 'hidden' );
	} );

	// open settings-sidebar
	$( 'app-header' ).on( 'click', '#toggleDisplaySettings', function onClick( event ) {
		event.preventDefault();
		event.stopImmediatePropagation();
		$( '.settings-panel' ).toggleClass( 'hidden' );
		$( 'settings-sidebar' ).removeClass( 'hidden' );
	} );
} );
