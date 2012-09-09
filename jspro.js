(function($){
	window.jspro=window.jspro || {};
	jspro.getScript=function(script_url,success_callback){
		script_url=script_url.split('.').pop()==='js'?script_url:script_url+'.js';
		jQuery.getScript(script_url,success_callback);
	};
	jspro.require_once=function(modules, callback){
		var i=0;
		//immediate function used to load all scripts before executing the callback
		(function success_callback(){
			i++;
			if (i-1 < modules.length) {
				jspro.getScript(modules[i-1],success_callback);
			}
			else
				callback();
		})();
	};
})(jQuery);
