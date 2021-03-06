/*
 * jq.web.passwordBox - password box replacement for html5 mobile apps on android due to a bug with CSS3 translate3d
 * @copyright 2011 - AppMobi
 */

 (function($){
	$["passwordBox"]=function()
	{
		
		return new passwordBox();
	};
 
	var passwordBox = function() {
		this.oldPasswords = {};
	};
	passwordBox.prototype = {
		showPasswordPlainText: false,
		getOldPasswords: function(elID) {
			var isNotAppMobiAndroid = window.AppMobi && AppMobi.device && AppMobi.device.platform && AppMobi.device.platform.toLowerCase().indexOf("android") == -1;
			if (isNotAppMobiAndroid === undefined)
				isNotAppMobiAndroid = true;
			if (navigator.userAgent.toLowerCase().indexOf("android") == -1 && (isNotAppMobiAndroid)&&navigator.userAgent.toLowerCase().indexOf("silk-accelerated")==-1) return;

			var container = elID && document.getElementById(elID) ? document
					.getElementById(elID) : document;
			if (!container) {
				alert("Could not find container element for passwordBox "
						+ elID);
				return;
			}
			var sels = container.getElementsByTagName("input");

			var that = this;
			for (var i = 0; i < sels.length; i++) {
				if (sels[i].type != "password")
					continue;

				sels[i].type="text";
				sels[i].style['-webkit-text-security']="disc";
			}
		},
		
		changePasswordVisiblity: function(what, id) {
			what = parseInt(what);
				var theEl = document.getElementById(id);
				if (what == 1) { //show
					theEl.style['-webkit-text-security']="none";
				}
				else {
					theEl.style['-webkit-text-security']="disc";
				}
				theEl=null;
		}
	};
})(jq)
