Ext.Loader.setConfig({	// Loader 동적으로 필요한 js파일을 가져온다
	enabled : true		// 동적인 로딩을 가능하게 함.
});

Ext.Loader.setPath('Sample', 'app');	// top-level이 sample인 놈도 app에서 가져오라.	어느 폴더에서 가져오는것을 설정해주는 것.

Ext.onReady(function() {
	Ext.application({
		name : 'Traning',	// 기본적으로 app라는 디렉토리에 자동으로 매핑
		controllers : ['Traning.controller.TraningController'],
		autoCreateViewport : true   //true이면 자동으로 로드
	});
});