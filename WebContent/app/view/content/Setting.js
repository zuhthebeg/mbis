Ext.define('sky.view.content.Setting', {
    extend: 'Ext.Container',
    xtype : 'settingView',
    id	  : 'id_setting',
    
    config: {
        title: '설정',
        layout: 'fit',

        items: [{
            xtype: 'formpanel',
            items: [{
                xtype: 'fieldset',
                defaults: {
                    labelWidth: '35%'
                },
                title: '계정',
                items: [{
                        xtype	: 'button',
                        ui		: 'decline',
                        text 	: '로그아웃',
                        id		: 'btn_setting_logout'
                        	
                }]
            }]
        }]
	}
});