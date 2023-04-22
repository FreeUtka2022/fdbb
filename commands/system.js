module.exports = [{
  name: "system",
  code: `$channelSendMessage[$channelID;{newEmbed:{title:System}
  {description:
  CPU: $cpu[os] 
  CPU Process: $cpu[process]
  Uptime: $uptime[full]
  Ping: $pingms
  }};false]`
}];