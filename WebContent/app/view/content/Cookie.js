/**
 * SnsList.js
 * SNS 리스트로 보여준다.
 */
Ext.define('WebContent.view.content.Cookie', {
    extend: 'Ext.List',
    xtype: 'cookieView',
    id	: 'id_cookie_view',
    config: {
        title	: 'Cookie 리스트',
        items:[{
        	xtype	: 'toolbar',
        	docked	: 'bottom',
        	items : [{
				xtype	: 'button',
				text	: '전체삭제',
				id		: 'btn_cookie_del_all'
            }, {
            	xtype : 'spacer'
            }, {
            	xtype	: 'button',
            	id		: 'btn_cookie_info',
            	cls		: 'info',
            	text	: '정보'
            }]
        }],
        store: 'CommonStore',
        plugins: [
                  { 
                	  xclass: 'Ext.plugin.PullRefresh',
	                  pullTpl:[
		           	            '<div class="x-list-pullrefresh">'+
		           	                '<div class="x-list-pullrefresh-arrow"></div>'+
		           	                '<div class="x-list-pullrefresh-wrap">'+
		           	                    '<h3 class="x-list-pullrefresh-message">{message}</h3>'+
		           	                    '<div class="x-list-pullrefresh-updated">마지막 갱신: <span>{lastUpdated:date("Y/m/d h:iA")}</span></div>'+
		           	                '</div>'+
		           	            '</div>'   
		                  ].join(''),
			              refreshFn: function(callback, plugin) {
                	  		var store = Ext.getStore('CommonStore');	//스토어 가져오기
                	  		store.currentPage = 1;
                	  		store.load();
			              }, 	
	                      pullRefreshText: "아래로 끌어내려서 새로고침",
	                      releaseRefreshText: "손을 놓으면 새로고침...",
	                      loadingText:  "새로고침 중..."
                  }
        ],
        itemTpl: new Ext.XTemplate(
        	'<div><table>',
			'<td>쿠키이름 : {key}</td>',
			'<td>쿠키값 : {value}</td>',
			'</table></div>'
			
        )
        
    }
});