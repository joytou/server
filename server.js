$(document).ready(function() {
					  var $online_versioncode = 1;
					  var $online_versionname = "1.0.1";
					  var $update = ($versioncode < $online_versioncode);
					  if ($update)
					  {

						  switch($lang)
								{
								case "cn":
								    $("#JOYTOUupdate").append("JOYTOU发布新版本" + $online_versionname + "了，<a href=\"http://joytou.nets.hk/2017/08/04/Log/\">查看详情</a>或者<a href=\"https://github.com/joytou/joytou.github.io/archive/1.0.1.zip\">直接下载</a>");
								    break;
								case "tw":
								    $("#JOYTOUupdate").append("JOYTOU發布新版本" + $online_versionname + "了，<a href=\"http://joytou.nets.hk/2017/08/04/Log-tw/\">查看詳情</a>或者<a href=\"https://github.com/joytou/joytou.github.io/archive/1.0.1.zip\">直接下載</a>");
								    break;
								case "en":
									$("#JOYTOUupdate").append("JOYTOU has released a new version " + $online_versionname + ", choose to <a href=\"http://joytou.nets.hk/2017/08/04/Log-en/\">view the details</a> or <a href=\"https://github.com/joytou/joytou.github.io/archive/1.0.1.zip\">directly download</a>");
									break;
								default:
									$("#JOYTOUupdate").append("JOYTOU has released a new version " + $online_versionname + ", choose to <a href=\"http://joytou.nets.hk/2017/08/04/Log-en/\">view the details</a> or <a href=\"https://github.com/joytou/joytou.github.io/archive/1.0.1.zip\">directly download</a>");
								}

					  }else{
						  JOYTOUdismiss();
					  }
				  });

