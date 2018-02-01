/**
 * 쿠키 정보 모델
 */

Ext.define('WebContent.model.CommonModel',{
	extend : 'Ext.data.Model',
	config:{	
		fields:[
		        'key',
		    	'name',
		    	'value',
		    	'url',
		    	'target',
		    	'regdate'
		        ]
	}
});