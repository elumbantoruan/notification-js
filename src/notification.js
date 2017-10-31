'use strict'

const AWS = require("AWS-SDK");

class NotificationManager {
    constructor() {
        AWS.config.loadFromPath("./config.json");
        this.sns = new AWS.SNS();
    }

    sendMessage(message, phoneNumber, callback) {
        let params = {
            PhoneNumber: phoneNumber,
            Message: message
        }; 

        this.sns.publish(params, (e, r) => {
            if (e) {
                callback(e.message, null);
            } else {
                callback(null, r.MessageId);
            }
        })
    }
}

module.exports = NotificationManager