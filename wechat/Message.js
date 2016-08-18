var request = require('request');
var util = require('util');

var Message = function (msg) {
    this.msg = msg;
}

Message.prototype.toXML = function() {
    var str = '';
    for (var key in this.msg) {
        var value = this.msg[key];
        if (value != null && value != undefined) {
            if ('CreateTime' == key || 'ArticleCount' == key) {
                str += util.format('<%s>%s</%s>', key, value, key);
            }
            else
            {
                str += util.format('<%s><![CDATA[%s]]></%s>', key, value, key);
            }
        }
    }
    //console.log(str);
    return util.format('<xml>%s</xml>', str);
}

Message.prototype.send = function (res) {
    res.send(this.toXML());
}

Message.prototype.sendAsync = function () {
    var apiUrl = config.getSendMsgAsyncApi();
    request.post(apiUrl, { json: this.msg }, function (err, resp, body) {
        if (err) {
            cosole.log("err");
        }
        console.log('send Async Message Result : ' + JSON.stringify(body));
    });
}

module.exports = Message;
