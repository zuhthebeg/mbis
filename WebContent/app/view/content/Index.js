Ext.define('WebContent.view.content.Index', {
    extend: 'Ext.Container',
    xtype : 'indexView',
    id 	  : 'id_indexView',
    config : {
		title : '모바일 브라우저 정보 관리',
		useCurrentLocation:true,
		layout : 'vbox',
        items :[{
        	xtype : 'fieldset',
        	flex : 6,
        	align	: 'center',
        	layout :{
        		align: 'center'
        	},
        	defaults:{
        		required:true,
        		height:80
        	},
        	items: [	// 메인메뉴 정의
        	{
        		align:'center',
        		width:'80%',
        		layout:{
        			type:'hbox',
        			pack:'center'
		        },
		        style : 'margin: 1em;',
				items :[ {
        	    	xtype : 'spacer',
        	    	width : '10%'
        	    },{	//쿠키 
	                xtype : 'button',
	                id	:	'btn_index_cookie',
	                cls:'x-btn-text-icon',
	                width: '30%',
	                textAlign:'center',
	                height:90,
	                text : 	'<div align="center"><img src="'+
	                		imgUrl+'favorites.png"></br><font size=2>쿠키기록</font></div>'
	            },{
	                xtype : 'spacer',
	                width : '5%'
	            },{	// 세션
	                xtype : 'button',
	                id : 'btn_index_session',
	                width: '30%',
	                textAlign:'center',
	                height:90,
	                text : 	'<div align="center"><img src="'+
	                		imgUrl+'download_screen.png"></br><font size=2>세션정보</font></div>'
	            },{
	                xtype : 'spacer',
	                width : '5%'
	            },{	// 로컬스토리지
	    	    	id	:	'btn_index_storage',
	                xtype : 'button',
	                width: '30%',
	                textAlign:'center',
	                height:90,
	                text : 	'<div align="center"><img src="'+
	                		imgUrl+'folder_lock.png"></br><font size=2><font size=2>저장공간</font></div>'
	            }]
        	},{
        		align:'center', 
        		width:'80%',
        		defaults:{
        			required: true,
        			height:90,
        			labelAlign: 'center'
        		},
        		layout:{
        			type:'hbox',
        			pack:'center'
		        },
		        style : 'margin: 1em;',
            	items:[{
            	    	xtype : 'spacer',
            	    	width : '10%'
            	    },{	// 캐시정보
		                xtype : 'button',
		                id	:	'btn_index_cache',
		                width: '30%',
		                textAlign:'center',
		                height:90,
		                text : 	'<div align="center"><img src="'+
		                		imgUrl+'servers.png"></br><font size=2>캐시흔적</font></div>'
		            },{
		                xtype : 'spacer',
		                width : '5%'
	            	},{	// 비밀번호
		                xtype : 'button',
		                id : 'btn_index_passwd',
		                width: '30%',
		                textAlign:'center',
		                height:90,
		                text : 	'<div align="center"><img src="'+
		                		imgUrl+'user_list.png"></br><font size=2>저장암호</font></div>'	            	
		        	},{
		                xtype : 'spacer',
		                width : '5%'
		            },{	// 사용기록
		                xtype : 'button',
		                id : 'btn_index_history',
		                width: '30%',
		                textAlign:'center',
		                height:90,
		                text : 	'<div align="center"><img src="'+
		                		imgUrl+'mouse.png"></br><font size=2>사용기록</font></div>'	            	
		        }]
        	}		       
        ]},
        {
        	xtype : 'fieldset',
        	flex : 2,
        	html : "사용 브라우저 : " + navigator.appName + "<br/>" + "버전 : " + navigator.appVersion,
        	items:[{
        		xtype : 'list' 
        	}]
        },{
        	xtype : 'fieldset',
        	flex : 2,
        	html : '본 앱은 모바일(스마트폰)으로 인터넷 이용시, 브라우저에 저장되는 정보들을 확인하고, 정보유출을 방지하기위해 이를 관리하는 앱입니다.',
        	items:[{
        		xtype : 'list' 
        	}]
        },{
            xtype : 'toolbar',
            docked   : 'bottom',
            items:[
			{	// 설정
			    xtype : 'button',
			    id : 'btn_index_optimization',
			    text : '최적화',
			    ui : 'action'	            	
			},{
            	xtype:'spacer'
            },{
                text : '개발자 정보',
                ui : 'action',
                id : 'btn_index_dev_info'
            }]
        }]
    }
});