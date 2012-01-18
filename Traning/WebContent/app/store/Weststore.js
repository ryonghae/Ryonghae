Ext.define('Traning.store.Weststore', {
	extend : 'Ext.data.Store',
	
	 model: 'Traning.model.West',
//	 data : [
//	         {name: 'Ed',    age: 12},
//	         {name: 'Tommy', age: 41},
//	         {name: 'Aaron', age: 23},
//	         {name: 'Jamie', age: 25}
//	     ]
	 proxy: {	// 대리인
	        type: 'ajax',	// ajax타입 proxy
	        url : 'data/wests.json',
	        reader: {			// decode the server's response. AjaxProxy default to using a JsonReader
	            type: 'json',	// json형태 return타입
	            root: 'wests'
	        }
	    },
	 autoLoad: true	// 자동으로 가져오라
});