const EventEmitter = require("events");

class Notification extends EventEmitter {
  constructor(channel, message) {
    super();
    this.channel = channel;
    this.message = message;

    this.on(this.channel, (msg) => {
      console.log(msg);
    });
  }

  send() {
    this.emit(this.channel, this.message);
  }
}

const updateNotification = new Notification("mail-app", "Update to v12.0.1");
updateNotification.send();
updateNotification.send();
updateNotification.send();
updateNotification.send();
