module.exports = [{
	name: 'eval',
	aliases: 'ev',
	code: `
$eval[$message]
$onlyIf[$checkContains[$authorID;1064121843520381069;953928055024390224;$botOwnerID]==true;Только создатель бота может использовать данную команду!]
`
}]