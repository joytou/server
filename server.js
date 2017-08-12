$(document).ready(function(){
var $online_versioncode = 1;
var $online_versionname = "1.0.1";
	if($versioncode < $online_versioncode){
		if($notify){
			window.document.getElementById("JOYTOUupdate").innerHTML = "JOYTOU发布新版本"+$online_versionname+"了，<a href=\"\">查看详情</a>或者<a href=\"\">直接下载</a>";
		}
	}
});

