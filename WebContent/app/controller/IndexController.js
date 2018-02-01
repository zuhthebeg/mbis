/**
 * IndexController.js
 */
Ext.define('WebContent.controller.IndexController', {
    extend : 'Ext.app.Controller',

        /*
         * 각 뷰의 xtype 또는 id를 참조하거나 해당 참조자로부터 이벤트 컨트롤러를 정의한다..
         */
        config : {
    		//xtype이나 id를 참조
            refs : {
                connectionNavi	: 	'connectionNavi',	
                contentNavi		: 	'contentNavi',		
                indexView		:	'indexView',		
                cookieView		:	'cookieView',
                storageView 	: 	'storageView',
                sessionView 	: 	'sessionView',
                infomationView 	: 	'infomationView',
                
                btn_index_cookie 		: 	'#btn_index_cookie',
                btn_index_session		: 	'#btn_index_session',
                btn_index_storage 		: 	'#btn_index_storage',
                btn_index_cache 		:	'#btn_index_cache',
                btn_index_passwd 		: 	'#btn_index_passwd',
                btn_index_history 		: 	'#btn_index_history', 
                
                btn_storage_del_all 	: 	'#btn_storage_del_all',
            	btn_session_del_all 	: 	'#btn_session_del_all',
            	btn_cookie_del_all		:	'#btn_cookie_del_all',
            		
            	btn_index_optimization 	: 	'#btn_index_optimization',
            	btn_index_dev_info		:	'#btn_index_dev_info',
            	btn_infomation_close 	: 	'#btn_infomation_close',
            	btn_cookie_info			: 	'#btn_cookie_info',
            	btn_session_info		:	'#btn_session_info',
            	btn_storage_info		:	'#btn_storage_info'
    		},
    		
    		
    		//컨트롤 대상이 없음.
    		control : {
    			/*Cookie Storage Events*/
    			btn_index_cookie : {
    				tap	:	"showCookieView"
    			},
    			cookieView : {
    				itemtap : "showCookieDeleteMenu"
    			},
    			btn_cookie_del_all : {
    				tap : "confirmDeleteAllCookie"
    			},    
    			/*Session Storage Events*/
    			btn_index_session : {
    				tap	:	"showSessionView"
    			},
    			sessionView : {
    				itemtap : "showSessionDeleteMenu"
    			},
    			btn_session_del_all : {
    				tap : "deleteAllSession"
    			},    			
    			/*Local Storage Events*/
    			btn_index_storage : {
    				tap	:	"showStorageView"
    			},
    			storageView : {
    				itemtap : "showStorageDeleteMenu"
    			},
    			btn_storage_del_all : {
    				tap : "deleteAllStorage"
    			},
    			
    			/*Application cache Events*/
    			btn_index_cache : {
    				tap	:	"showCacheView"
    			},
    			btn_index_passwd : {
    				tap	:	"showPasswdView"
    			},
    			btn_index_history : {
    				tap	:	"showHistoryView"
    			},
    			
    			/* index buttom button	 */
    			btn_index_optimization : {
    				tap : "doOptimizeBrowser"
    			},
				/*
				 * 개발자 정보 
				 */   			
    			btn_infomation_close : {
    				tap : function(){
    				if (!this.infomationView) {
    					this.infomationView = Ext.create('WebContent.view.content.Infomation');
    				}	
    				this.infomationView.hide();
    			}
    			},
    			btn_index_dev_info : {
    				tap : function(btn, event){
			    		if (!this.infomationView) {
			                this.infomationView = Ext.create('WebContent.view.content.Infomation');
			            }		
	    	    		this.infomationView.down('#id_info_content').setHtml(DeveloperInfomation);
	    	    		this.infomationView.down('#id_info_title').setTitle(DeveloperTitle);
	    	    		this.infomationView.setCentered(true);
	    	    		this.infomationView.showBy(btn);   		
			    	}
    			},
    			btn_cookie_info :	{
    				tap : function(btn, event){
	    	    		if (!this.infomationView) {
	    	                this.infomationView = Ext.create('WebContent.view.content.Infomation');
	    	            }		
	    	    		this.infomationView.down('#id_info_content').setHtml(CookieInfomation);
	    	    		this.infomationView.down('#id_info_title').setTitle(CookieTitle);
	    	    		this.infomationView.setCentered(true);
	    	    		this.infomationView.showBy(btn);    		
    				}
    			},
    			btn_session_info : {
    				tap : function(btn, event){
    	    		if (!this.infomationView) {
    	                this.infomationView = Ext.create('WebContent.view.content.Infomation');
    	            }		
    	    		this.infomationView.down('#id_info_content').setHtml(SessionInfomation);
    	    		this.infomationView.down('#id_info_title').setTitle(SessionTitle);
    	    		this.infomationView.setCentered(true);
    	    		this.infomationView.showBy(btn);    		
				}    			
    			},
    			btn_storage_info : {
    				tap : function(btn, event){
    	    		if (!this.infomationView) {
    	                this.infomationView = Ext.create('WebContent.view.content.Infomation');
    	            }		
    	    		this.infomationView.down('#id_info_content').setHtml(StorageInfomation);
    	    		this.infomationView.down('#id_info_title').setTitle(StorageTitle);
    	    		this.infomationView.setCentered(true);
    	    		this.infomationView.showBy(btn);    		
				}    				
    			}
    		}
    	},
/**
 * 쿠키
 **/    	
    	showCookieView : function(){
    		
    		if( document.cookie.length == 0 ){
			   Ext.Msg.alert("no cookie", "저장된 쿠키가 없습니다.");
			   return;
    		}else
    			this.setCookieData();

		  if (!this.cookieView) {
              this.cookieView = Ext.create('WebContent.view.content.Cookie');
          }	
  		this.getContentNavi().push(this.cookieView);	//네비게이션 스택에 새로운 뷰 삽입
    	},
    	setCookieData : function(){
			var data = "[";
			for (var i=0; i<document.cookie.split(";",document.cookie.length).length; i++) {
				var temp_cookie = document.cookie.split(";", document.cookie.length)[i];
				key = temp_cookie.substr(0,temp_cookie.indexOf("=", 1));
				value = temp_cookie.substr(temp_cookie.indexOf("=", 1)+1, temp_cookie.length);
				data += '{key : "'+key+'", value : "'+value +'"},';
			}
			data += "]";
			var store = Ext.getStore('CommonStore');	//스토어 가져오기
			store.setData(data);
			store.load();
    	},
    	
    	 /**
    	  * 쿠키값 추출
    	  * @param cookieName 쿠키명
    	  **/
    	 getCookie : function( cookieName )
    	 {
    	  var search = cookieName + "=";
    	  var cookie = document.cookie;
    	  // 현재 쿠키가 존재할 경우
    	  if( cookie.length > 0 )
    	  {
    	   // 해당 쿠키명이 존재하는지 검색한 후 존재하면 위치를 리턴.
    	   startIndex = cookie.indexOf( cookieName );
    	   // 만약 존재한다면
    	   if( startIndex != -1 )
    	   {
    	    // 값을 얻어내기 위해 시작 인덱스 조절
    	    startIndex += cookieName.length;
    	    // 값을 얻어내기 위해 종료 인덱스 추출
    	    endIndex = cookie.indexOf( ";", startIndex );
    	    // 만약 종료 인덱스를 못찾게 되면 쿠키 전체길이로 설정
    	    if( endIndex == -1) endIndex = cookie.length;
    	    // 쿠키값을 추출하여 리턴
    	    return unescape( cookie.substring( startIndex + 1, endIndex ) );
    	   }
    	   else
    	   {
    	    // 쿠키 내에 해당 쿠키가 존재하지 않을 경우
    	    return false;
    	   }
    	  }
    	  else
    	  {
    	   // 쿠키 자체가 없을 경우
    	   return false;
    	  }
    	 },
    	 /**
    	  * 쿠키 삭제
    	  * @param cookieName 삭제할 쿠키명
    	  */
    	 deleteCookie : function( cookieName )
    	 {
    	  var expireDate = new Date();
    	  
    	  //어제 날짜를 쿠키 소멸 날짜로 설정한다.
    	  expireDate.setDate( expireDate.getDate() - 1 );
    	  document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString() + ";";
    	  return true;
    	 },
    	 
    	 showCookieDeleteMenu : function(dataView, index, target, record){
     		var me = this;
    		Ext.Msg.confirm('삭제확인',record.data.key + ' 삭제하시겠습니까?', 
    			function(flag){
    				if(flag == 'yes'){
    					me.deleteCookie(record.data.key);
    					Ext.Msg.alert('성공','삭제되었습니다.');
    					me.setCookieData();
    				}
    			}
    		);    		 
    	
    	 },
     	confirmDeleteAllCookie : function(){
    		var me = this;
    		Ext.Msg.confirm('쿠키삭제확인','모두 삭제하시겠습니까?', 
    			function(flag){
    				if(flag == 'yes'){
    					me.deleteAllCookie();
    				}
    			}
    		);
    	},  
    	deleteAllCookie : function(){
			var expireDate = new Date();			
			expireDate.setDate( expireDate.getDate() - 1 );//어제 날짜를 쿠키 소멸 날짜로 설정한다.
			while (document.cookie.length) {
				var i =0; 
				var temp_cookie = document.cookie.split(";", document.cookie.length)[i];
				key = temp_cookie.substr(0,temp_cookie.indexOf("=", 1));
		    	document.cookie = key + "=" + "; expires=" + expireDate.toGMTString() + ";";
		    	i++;
			}
			
			if(document.cookie.length == 0){
				Ext.Msg.alert('성공','모두 삭제되었습니다.');
				this.setCookieData();
				return true;
			}    		
    	},
/**
 * 세션
 **/
    	showSessionView : function(){
    		if( sessionStorage.length <= 0 ){
 			   Ext.Msg.alert("no Session", "저장된 세션이 없습니다.");
 			   return;
     		}else
     			this.setSessionData();
    	
    		if (!this.sessionView) {
                this.sessionView = Ext.create('WebContent.view.content.Session');
            }	
    		this.getContentNavi().push(this.sessionView);	//네비게이션 스택에 새로운 뷰 삽입
    	},
    	setSessionData : function(){
			var data = "[";
			for (var i=0; i<=sessionStorage.length-1; i++) {
				key = sessionStorage.key(i);
				data += '{key : "'+key+'", value : "'+sessionStorage.getItem(key) +'"},';
			}
			data += "]";
			var store = Ext.getStore('CommonStore');	//스토어 가져오기
			store.setData(data);
			store.load();
    	},
    	showSessionDeleteMenu : function(dataView, index, target, record){
    		var me = this;
    		Ext.Msg.confirm('삭제확인',record.data.key + ' 삭제하시겠습니까?', 
    			function(flag){
    				if(flag == 'yes'){
    					sessionStorage.removeItem(record.data.key);
    					Ext.Msg.alert('성공','삭제되었습니다.');
    					me.setSessionData();
    				}
    			}
    		);
    	},
    	deleteAllSession : function(){
    		var me = this;
    		Ext.Msg.confirm('삭제확인','모두 삭제하시겠습니까?', 
    			function(flag){
    				if(flag == 'yes'){
    					sessionStorage.clear();
    					Ext.Msg.alert('성공','모두 삭제되었습니다.');
    					me.setSessionData();
    				}
    			}
    		);
    	},    	
/**
 * 로컬 스토리지
 **/
    	showStorageView : function(){
    		if( localStorage.length <= 0 ){
  			   Ext.Msg.alert("no LocalStorage", "저장된 로컬저장영역이 없습니다.");
  			   return;
      		}else
      			this.setStorageData();
    		
    		if (!this.storageView) {
                this.storageView = Ext.create('WebContent.view.content.Storage');
            }	
    		this.getContentNavi().push(this.storageView);	//네비게이션 스택에 새로운 뷰 삽입
    	},
    	setStorageData : function(){
			var data = "[";
			for (var i=0; i<=localStorage.length-1; i++) {
				key = localStorage.key(i);
				data += '{key : "'+key+'", value : "'+localStorage.getItem(key) +'"},';
			}
			data += "]";
			var store = Ext.getStore('CommonStore');	//스토어 가져오기
			store.setData(data);
			store.load();
    	},
    	showStorageDeleteMenu : function(dataView, index, target, record){
    		var me = this;
    		Ext.Msg.confirm('삭제확인',record.data.key + ' 삭제하시겠습니까?', 
    			function(flag){
    				if(flag == 'yes'){
    					localStorage.removeItem(record.data.key);
    					Ext.Msg.alert('성공','삭제되었습니다.');
    					me.setStorageData();
    				}
    			}
    		);
    	},
    	deleteAllStorage : function(){
    		var me = this;
    		Ext.Msg.confirm('삭제확인','모두 삭제하시겠습니까?', 
    			function(flag){
    				if(flag == 'yes'){
    					localStorage.clear();
    					Ext.Msg.alert('성공','모두 삭제되었습니다.');
    					me.setStorageData();
    				}
    			}
    		);
    	},
/**
 * 어플리케이션 캐쉬
 **/   	
    	showCacheView : function(){
    		
    		if (!!window.applicationCache) { // 지원함 
    			if ( window.applicationCache.status == window.applicationCache.UPDATEREADY) {
    				 // 작업진행
    				Ext.Msg.alert('find cache', '캐시파일이 있습니다.');
    			}else{
    				Ext.Msg.alert('no cache','캐시파일이 존재하지 않습니다.');
    			}
    		} else { 
    			Ext.Msg.alert('not support','캐시미지원');
    		}
    	},
    	showPasswdView : function(){
    		if (!this.infomationView) {
                this.infomationView = Ext.create('WebContent.view.content.Infomation');
            }		
    		this.infomationView.down('#id_info_title').setTitle("양식 데이터 지우기");
    		this.infomationView.down('#id_info_content').setHtml(PasswordInfomation);
    		this.infomationView.setCentered(true);
    		this.infomationView.show(); 
    	},
/**
 * 히스토리
 **/    	
    	showHistoryView : function(){
    		if (!this.infomationView) {
                this.infomationView = Ext.create('WebContent.view.content.Infomation');
            }		
    		this.infomationView.down('#id_info_title').setTitle("방문한 사용기록 지우기");
    		this.infomationView.down('#id_info_content').setHtml(HistoryInfomation); 
    		this.infomationView.setCentered(true);
    		this.infomationView.show(); 
    	},
/**
 * 브라우저 최적화 
 **/
    	doOptimizeBrowser : function(){
    		var me = this;
    		Ext.Msg.confirm('최적화','브라우저 최적화를 시작합니다.', 
        			function(flag){
        				if(flag == 'yes'){
        					
        					localStorage.clear();  
        					sessionStorage.clear();
        					if(me.deleteAllCookie()) Ext.Msg.alert('Success','최적화를 완료하였습니다.');
        				}
        			}
        		);	
    	},
    	
    	/*
    	 * 앱 최초실행시 이동될 패널 정의
    	 */
        launch : function(){
    		var todayDate = new Date();
    		console.log('테스트 데이터 셋팅');
    		for(var i = 1; i<=50; i++){
    			localStorage.setItem('localTest'+i, 'localStorageval'+i);
    			sessionStorage.setItem('sessionTest'+i, 'sessionStorageval'+i);
    			todayDate.setDate( todayDate.getDate() + i+10 );
    			document.cookie = "CookieTest"+ i + '=' + escape( i ) + ';expires=' + todayDate.toGMTString() + ';';
    		}
    		
    		
			console.log("인덱스 패널로 이동");
			this.viewportManager('Content');		//view/Connection.js 의 클래스명
        },
        
        /*
         * 메인에 디스패처
         */
        initNotice : function(){
            this.getApplication().dispatch({
            	controller	: 'WebContent.controller.IndexController'
            });
        },
        
        
        /**
         * 뷰포트 메니저
         * @navigationName : 네비게이션 클래스명 
         */
        viewportManager : function(navigationName){
            //뷰포트에 새로운 네비게이션 적용
    		Ext.Viewport.add({
                xclass : 'WebContent.view.'+navigationName
            });
        }
    });