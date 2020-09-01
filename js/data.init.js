var base_apiurl = '';
var app_apiurl = base_apiurl + "";

var charge_instructions = app_apiurl + "baseconfig/getRechargeExplain"; //充值介绍
var clubGold_introduce = app_apiurl + "coinWeb/introduce"; //会币积分介绍
var clubGold_info = app_apiurl + "coin/index" //会币记录列表
var coin_web = app_apiurl + "scoreWeb/introduce" //成长攻略
var activities_info = app_apiurl + "activities/getActivitiesInfo" //活动详情
var integral_info = app_apiurl + "score/index" //积分记录列表
var questions_info = app_apiurl + "questionsWeb/questionsInfo" //常见问题详情
var prize_info = app_apiurl + "activities/prizesinfo" //中奖人详情
var prize_list = app_apiurl + "activities/getPrizesList" //抽奖管理
var receive_prize = app_apiurl + "activities/receive" //抽奖管理-领奖
var del_prizes = app_apiurl + "activities/delPrizes" //抽奖管理-未到
var random_code = app_apiurl + "activities/setRandomCode" //抽奖管理-设置随机码
var prizes_config = app_apiurl + "activities/getPrizesConfig" //查看奖项 
var edit_prizes = app_apiurl + "activities/editPrizesConfig" //添加-修改奖项 
var sponsorship_info = app_apiurl + "activities/getSponsorshipsInfo" //赞助详情 
var check_sponsor = app_apiurl + "activities/checkSponsorships" //赞助详情 
var focus_org = app_apiurl + "home/focus" //关注商会 
var cancels_collect_activity = app_apiurl + "activities/cancelsCollectActivities" //取消收藏活动 
var collect_activity = app_apiurl + "activities/collectActivities" //收藏活动 
var collect_activities_list = app_apiurl + "activities/collectActivityList" //收藏活动列表 

var SYS_IS_TEST = false; //是否测试
// var sid = Boolean(getUrlParam("sid")) ? getUrlParam("sid") : localStorage.getItem('sid');
// var recordId = Boolean(getUrlParam("recordId")) ? getUrlParam("recordId") : localStorage.getItem('recordId');
// var patientId = Boolean(getUrlParam("patientId")) ? getUrlParam("patientId") : localStorage.getItem('patientId');

//获取数据
function getDbData(_url, _dataparam, _post) {
    _dataparam ? "" : _dataparam = {};
    var htmlobj = {};
    if (SYS_IS_TEST == false) {
        if (_post == 'post') {
            htmlobj = postdata(_url, _dataparam)
        } else {
            htmlobj = ajaxgo(_url, _dataparam);
        }
    } else {}
    return htmlobj;
}

function postdata(url, param) {
    param.sid = getUrlParam("sid") || localStorage.getItem("sid");
    let result = 0;
    $.ajax({
        type: "post",
        url: url,
        data: param,
        async: false,
        dataType: "json",
        crossDomain: true,
        // jsonpCallback:"jsonpCallbackFun",
        // jsonp:"callback",
        success: function(data) {
            result = data;
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            // 状态码
            console.log(XMLHttpRequest.status);
            // 状态
            console.log(XMLHttpRequest.readyState);
            // 服务器响应返回的文本信息
            console.log(XMLHttpRequest.responseText);
            // 错误信息
            console.log(textStatus);
        }
    });

    return result;
}

function ajaxgo(url, param) {
    // param.sid = sid;
    var option = {
        url: url,
        async: false,
        data: param
    };

    var jsondata = $.ajax(option);
    jsondata = JSON.parse(jsondata.responseText);
    return jsondata;
}



//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}