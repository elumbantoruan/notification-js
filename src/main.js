'use strict'
const NotificationManager = require("./Notification.js", "NotificationManager");

main();

function main() {
    let notification = new NotificationManager();
    let message = "test.. checkout https://github.com/elumbantoruan/notification-js";
    let phoneNumber = "1 999 999 9999";
    notification.sendMessage(message, phoneNumber, (e, r) => {
        if (e) {
            console.log(e);
        } else {
            console.log(r);
        }
    })
    
}