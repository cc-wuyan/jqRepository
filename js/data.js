function getRechargeExplain(dataparam) { //充值介绍
    return getDbData(charge_instructions, dataparam, 'post');
}

function getClubgoldExplain(dataparam) { //会币积分介绍
    return getDbData(clubGold_introduce, dataparam, 'post');
}

function getClubgoldInfo(dataparam) { //会币记录列表
    return getDbData(clubGold_info, dataparam, 'post');
}

function getCoinWeb(dataparam) { //成长攻略
    return getDbData(coin_web, dataparam, 'post');
}

function getActivitiesInfo(dataparam) { //活动详情
    return getDbData(activities_info, dataparam, 'post');

}

function getIntegralInfo(dataparam) { //积分记录列表
    return getDbData(integral_info, dataparam, 'post');

}

function getQuestionsInfo(dataparam) { //常见问题详情
    return getDbData(questions_info, dataparam, 'post');

}

function getPrizesInfo(dataparam) { //中奖人详情
    return getDbData(prize_info, dataparam, 'post');

}

function getPrizesList(dataparam) { //抽奖管理
    return getDbData(prize_list, dataparam, 'post');

}

function setReceive(dataparam) { //抽奖管理-领奖
    return getDbData(receive_prize, dataparam, 'post');

}

function setDelPrizes(dataparam) { //抽奖管理-未到
    return getDbData(del_prizes, dataparam, 'post');

}

function setRandomCode(dataparam) { //抽奖管理-设置随机码
    return getDbData(random_code, dataparam, 'post');

}

function getPrizesConfig(dataparam) { //查看奖项
    return getDbData(prizes_config, dataparam, 'post');

}

function editPrizesConfig(dataparam) { //添加-修改奖项
    return getDbData(edit_prizes, dataparam, 'post');

}

function getSponsorshipsInfo(dataparam) { //赞助详情
    return getDbData(sponsorship_info, dataparam, 'post');

}

function checkSponsorships(dataparam) { //赞助审核
    return getDbData(check_sponsor, dataparam, 'post');

}

function focusOrg(dataparam) { //关注商会
    return getDbData(focus_org, dataparam, 'post');

}

function cancelCollectActivity(dataparam) { //取消收藏活动
    return getDbData(cancels_collect_activity, dataparam, 'post');

}

function collectActivity(dataparam) { //收藏活动
    return getDbData(collect_activity, dataparam, 'post');

}

function getCollectActivityList(dataparam) { //收藏活动列表
    return getDbData(collect_activities_list, dataparam, 'post');

}