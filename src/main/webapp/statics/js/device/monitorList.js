var pageSize=8;
var queryMsg="";


$(function(){
	
	deviceListSelect(1);
	
	$("#dialog-form").dialog(
		{
			autoOpen : false,
			height : 180,
			width : 500,
			appendTo : "#div_pageContent",
			title : "",
			title_html : true,
			modal : true,
			resizable : true,
			open : function() {
			},
			close : function() {
			},
			buttons : [ {
				text : "保存",
				"class" : "btn btn-primary btn-minier",
				click : function() {
					//roleAddOrUpt();
				}
			}, {
				text : "关闭",
				"class" : "btn btn-primary btn-minier",
				click : function() {
					$(this).dialog("close");
				}
			} ]
		});
	
	$("#form_deviceSearch").on("submit",function(){
		queryMsg = $("#deviceSerialQuery").val();
		deviceListSelect(1);
		return false;
	});
	
});

/**
 * 设备列表查询
 * @param pageCurr 当前页
 */
function deviceListSelect(pageCurr) {
	var senddata = {
		"deviceSerial" : queryMsg,
		"size" : pageSize,
		"pageId" : pageCurr
	};
	sendAjax({
		url : "device/page",
		data : senddata,
		success : function(data) {
			var template=$("#tp_monitorList").html();
			$("#tb_monitorList tbody").html(doT.template(template)(data.result));
			laypage({
				curr : pageCurr,
				cont : $('#page3'), // 容器。值支持id名、原生dom对象，jquery对象,
				pages : data.totalPage, // 总页数
				skip : true, // 是否开启跳页
				skin : '#1d7ad9',
				groups : data.totalPage < 5 ? data.totalPage : 5, // 连续显示分页数
				jump : function(obj, first) {
					// 得到了当前页，用于向服务端请求对应数据
					if (!first) { // 点击跳页触发函数自身，并传递当前页：obj.curr
						deviceListSelect(obj.curr);
					}
					$('#countbox').html(
							'目前正在第' + obj.curr + '/' + obj.pages + '页，一共有：'
									+ data.totalCount + '条');
					$("#boxid").prop("checked", false);

				}
			});
		}
	});
}
