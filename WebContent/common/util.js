/**
 * util.js
 * 자주 이용되는 함수 및 디바이스 관련 함수들을 정의한다.
 */
Ext.ns('util');

/*
 * 디바이스별 기본 이미지 경로 설정함수
 */
util.initDeviceImagePath = function(){
	var user_agent = navigator.userAgent.toLowerCase();
	var mobile_phones = new Array('android', 'iphone', 'ipod', 'ipad');
		
	for (var i = 0; i< mobile_phones.length; i++)
	{
		if(user_agent.indexOf(mobile_phones[i]) != -1)
		{
			commonUrl = serverUrl;
			if(i == 0)
				local_img = android_img;
			else
				local_img = iphone_img;
			
			imgUrl = local_img;
		}else{
			commonUrl = localUrl;
			return;
		}
	}
};


