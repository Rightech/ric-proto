const { log } = require("@rightech/utils");
const { registry } = require(".");

log.setOptions({ level: /* debug*/ 4 });

const c = registry.getClient("ric-echo");

async function test() {
  const r = await c.SayHello({
    name: "zz 000",
  });

  console.log(r);
}

test().catch((err) => {
  console.log(err);
});
