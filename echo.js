const { log } = require("@rightech/utils");
const { registry } = require(".");

log.setOptions({ level: /* debug*/ 4 });

registry
  .addServer("ric-echo", {
    async SayHello({ name }) {
      const message = `Hello, good ${name || "stranger"}`;
      return { message };
    },
  })
  .withLogEnabled();
