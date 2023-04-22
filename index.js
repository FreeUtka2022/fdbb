const { AoiClient, LoadCommands } = require('aoi.js');

const bot = new AoiClient({
    token: "MTA5Mzg3MTExOTkyMjEwMjM2Mw.G1eHVR.zO5veeyha3PMu-FfzkPM3UIE6LpmlYzPGocBWg",
    prefix: "cd",
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    events: ["onMessage", "onInteractionCreate"],
    mobilePlatform: true,
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

bot.status({
    text: "Help Comand: cd",
    type: "PLAYING",
    time: 12
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/")

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const listener = app.listen(process.env.PORT, () => {
	console.log('Listening on Port: ' + '[' + listener.address().port + ']');
});

// Blacklist check: $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ Вы находитесь в черном списке бота.**]`