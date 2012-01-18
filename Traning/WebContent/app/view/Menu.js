Ext.define('Traning.view.Menu', {
	extend : 'Ext.tree.Panel',
	
	alias : 'widget.menutree',	// xtype 정의
	
	title : 'Menu Tree',
	
//	listeners : {
//		afterrender : function(tree) {
//			tree.store.setRootNode(null);	// 내 화면이 다 그려지면 tree를 그리겠다	||	setRootNode -> 원래 있던 데이터를 다 지우고 다시 가져온다
//		}
//	},
//	
	store : 'MenuStore',
	
	listeners : {
		itemclick : function(tree, record) {
			if (record.get('leaf') === false)
				return;
			
			var content = Ext.getCmp('content');
			// new Traning.view.CreateFactory	--> js명세를 가지고 있어야 한다.
			var view = Ext.create('Sample.view.' + record.get('view'), {	// js파일 가지고 있는가 먼저 확인하고, 없으면 동적으로 로딩해준다.
				title : record.get('text'),
				closable : true
			});
//			if (content.getActiveTab() === record.get('title'))
			content.add(view).show();
		}
	},
	
	root : {
		text : 'Root',
		expanded : true
	},
	
	rootVisible : false
});