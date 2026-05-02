const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const Messages = require("./messages");
const { use } = require("react");

const client = new Client({
  authStrategy: new LocalAuth(),
});

const userState = {};

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (message) => {
  const chatId = message.from;
  const body = message.body.toLowerCase();

  if (body === "menu" || !userState[chatId]) {
    userState[chatId] = "menu";
    return client.sendMessage(chatId, Messages.getMessage("10"));
  } else if (userState[chatId] === "menu") {
    if (body === "2") {
      userState[chatId] = "attendent";
    }

    return client.sendMessage(chatId, Messages.getMessage(body));
  }
});

client.on("message_create", async (message) => {
  const chatId = message.to;
  const body = message.body.toLowerCase();

  if (message.fromMe && body === "Encerrar atendimento") {
    userState[chatId] = "menu";
    await client.sendMessage(chatId, Messages.getMessage("7"));
    await sleep(2000);
    return client.sendMessage(chatId, Messages.getMessage(10));
  }
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

client.initialize();
