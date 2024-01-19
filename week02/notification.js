const EventEmitter = require("events");

class Notification extends EventEmitter {
  constructor(app) {
    super();
    this.app = app;

    this.on(app, (message) => {
      console.log(`[${app}] ${message}`);
    });
  }

  send(message) {
    this.emit(this.app, message);
  }
}

const emailNotifications = new Notification("email");
const youtubeNotifications = new Notification("youtube");

// emailNotifications.send("email received from mom");
// youtubeNotifications.send("Garret and Grant have a match again");

emailNotifications.test()