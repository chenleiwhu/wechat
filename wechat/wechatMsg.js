var Message = require('./Message');

exports.processMsg = function (user_msg, req, res, next) {
    // we tell the client to execute 'new message'
	sendTextMsg(user_msg, res, "Winner Liang!");

	// Async call here to exec business logic
	/*
	queryAPI.query(user_msg['Content'], function (content) {
        //console.log("content is " + content);
        sendTextMsg(user_msg, res, content);
    });
	*/
}

exports.processImage = function (user_msg, req, res, next) {
    sendTextMsg(user_msg, res, user_msg['PicUrl']);
}

exports.processVideo = function (user_msg, req, res, next) {
    sendTextMsg(user_msg, res, 'Video Message : ' + user_msg['MediaId']);
}

exports.processLocation = function (user_msg, req, res, next) {
    sendTextMsg(user_msg, res, user_msg['Label']);
}

exports.processLink = function (user_msg, req, res, next) {
    sendTextMsg(user_msg, res, user_msg['Url']);
}

exports.processVoice = function (user_msg, req, res, next) {
    sendTextMsg(user_msg, res, 'Voice Message : ' + user_msg['Recognition']);
}

function sendTextMsg(user_msg, res, content) {
    var fromUserName = user_msg['ToUserName'];
    var toUserName = user_msg['FromUserName'];
    var createTime = new Date().getTime();
    var msgType = 'text';
    var obj = {
        FromUserName: fromUserName,
        ToUserName: toUserName,
        CreateTime: createTime,
        MsgType: msgType,
        Content: content
    };
    var retMsg = new Message(obj);
    retMsg.send(res);
}