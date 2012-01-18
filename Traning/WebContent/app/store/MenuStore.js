Ext.define('Traning.store.MenuStore', {
	extend : 'Ext.data.TreeStore',
	
//	model : 'Traning.model.Menu',
	fields : [{
		name : 'text',
		type : 'string'
	}, {
		name : 'leaf',
		type : 'boolean'
	}, {
		name : 'view',
		type : 'string'
	}],
	
	autoLoad : false,
	
	proxy : {
		type : 'ajax',
//		method : 'GET',
		url : 'data/menus.json',
		reader : {
			type : 'json'
		}
	}
});