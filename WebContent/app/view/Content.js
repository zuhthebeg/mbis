Ext.define('WebContent.view.Content', {
    extend: 'Ext.navigation.View',
    xtype: 'contentNavi',
    id : 'id_contentNavi',

    requires: [
        'WebContent.view.content.Index',
        'WebContent.view.content.Cookie',
        'WebContent.view.content.Storage',
        'WebContent.view.content.Session',
        'WebContent.view.content.Infomation'
    ],

    config: {
		autoDestroy: false,		//이 속성은 뷰가 자동파괴되지 않도록 함
        navigationBar: {
            ui: 'light',
            
            //네비게이션바에 올라갈 아이템 정의
            //일단은 프로필 설정
            items:[{
            	xtype 	: 'button',
            	id		: 'btn_profile_edit',
            	text	: '설정',
            	align	: 'right',
            	hidden	: true
            }]
        },
        items: [
            { 
            	xtype: 'indexView'},
        ]
    }
});
