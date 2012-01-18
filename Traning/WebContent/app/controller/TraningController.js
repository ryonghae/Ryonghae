Ext.define('Traning.controller.TraningController', {
	extend : 'Ext.app.Controller',
	
	models : ['West'],
	stores : ['Weststore', 'MenuStore'],
	views : ['Menu', 'Content']
});