/**
 * Navigation Component 정의 클래스(추상화)
 */
Ext.define('WebContent.controller.NavigationComponentController', {
	extend : 'Ext.app.Controller',
	config : {
	//xtype이나 id를 참조
		refs : {
			contentNavi		: 'contentNavi',
			eventView		: 'eventView'

		},
	
		/**
		 * 뷰에따라 동작방식이 다르기때문에 컴포넌트 컨트롤은 이 컨트롤러에서 정의하지 않는다.
		 */
		control : {

		}
	},
	
	launch : function(){
		console.log("네비게이션 컨트롤러 로드");
	}

});
