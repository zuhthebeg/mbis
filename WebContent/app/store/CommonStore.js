/**
 * 쿠키정보 저장
 */
Ext.define('WebContent.store.CommonStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WebContent.model.CommonModel',
        autoLoad:false,
        clearOnPageLoad:true,  //리스트 더보 기 클릭시 기존 리스트 유지
        /*proxy: {
		  	url: '',// 
		  	type:  "ajax", //jsonp
		  	reader: {
		       type: "json",
		       rootProperty: "cookieList"
		   	}
        },*/
        listeners: {
        	load: function(item,record) {
        		if(record.length>=0){
        			//Ext.getCmp('btn_index_cookie').setBadgeText(5);//record.length); //뱃지텍스트 수정
    				//util.refreshDate();	// ..초/분/시간전 시간 표시
        		}
        	}
        }
	}
});
