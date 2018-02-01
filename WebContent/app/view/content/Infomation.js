Ext.define('WebContent.view.content.Infomation', {
    extend: 'Ext.Panel',
    xtype : 'infomationView',
    id	  : 'id_infomation',
    
    config: {
        title	: '개발자 정보',
        height	: '80%',
        width	: '90%',
        scrollable : true,
		items : [{
			xtype  : 'panel',
			id	: 'id_info_content',
	        html : '개발자 : cocy'
		},{
		    docked: 'top',
		    xtype : 'toolbar',
		    id	  : 'id_info_title',
		    title : '개발자 정보',
		    items : [{
		    	xtype : 'spacer'
		    },{
		    	xtype : 'button',
		    	id	  : 'btn_infomation_close',
		    	text  : '닫기'
		    }]
		}]
	}
});
