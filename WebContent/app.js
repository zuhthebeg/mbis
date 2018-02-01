/**
 * app.js
 * 앱 시작부분
 */

/*
 * js 파일 로딩
 */
Ext.Loader.setConfig({
	enabled: true
});


/*
 * 앱 설정파일 및 각종 유틸함수 로드
 */
util.initDeviceImagePath();	//


/*
 * 모델,스토어,뷰,컨트롤러 등록.
 */
Ext.application({
    name: 'WebContent',
    models: ['CommonModel'],
             
    stores: ['CommonStore'],
             
    views: ['Content'],
            
    controllers: ['NavigationComponentController',
                  'IndexController'
                  ],

    /*
     * 앱이 실행될때 기능정의.
     */
    launch: function() {
		console.log("앱 실행");
    }
});