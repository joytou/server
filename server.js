$(document).ready(function() {
					  var $online_versioncode = 1;
					  var $online_versionname = "1.0.1";
					  var $update = $versioncode < $online_versioncode;
					  if ($update)
					  {

						  window.document.getElementById("JOYTOUupdate").innerHTML = "JOYTOU发布新版本" + $online_versionname + "了，<a href=\"http://joytou.nets.hk/log/\">查看详情</a>或者<a href=\"https://github.com/joytou/joytou.github.io/archive/1.0.1.zip\">直接下载</a>";

					  }
				  });

