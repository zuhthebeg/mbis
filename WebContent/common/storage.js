/**
 * Storage.js
 * LocalStorage 저장소 관련 함수.
 */
Ext.ns('storage');

/**
 * 스토리지에 객체를 넣을수있도록 확장
 * ex)
 * sessionStorage.getObject(key)
 * sessionStorage.setObject(key , object) 
 */
Storage.prototype.setObject = function(key , value){
	this.setItem(key , JSON.stringify(value));
};
Storage.prototype.getObject = function(key){
	return this.getItem(key) && JSON.parse(this.getItem(key));
};
