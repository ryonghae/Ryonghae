Ext.define('Traning.view.Viewport', {	// viewport is container
	extend : 'Ext.container.Viewport',
	
	layout : 'border',
	
	items : [{							// component
		xtype : 'content',
		region : 'center',
		id : 'content'
	}, {
		region : 'north',
		title : 'NORTH',
		html : 'NORTH'
	}, {
		region : 'south',
		title : 'SOUTH',
		html : 'SOUTH'
	}, {
		xtype : 'grid',
		region : 'west',
		columns : [{
			header : 'Name',
			dataIndex : 'name'
		}, {
			header : 'Age',
			dataIndex : 'age'
		}],
		store : 'Weststore',
		split : true,
		collapsible : true,
		title : 'WEST',
		width : 150
	}, {
		xtype : 'menutree',
		region : 'east',
		split : true,
		collapsible : true,
		width : 150,
		autoScroll : true
	}]
});