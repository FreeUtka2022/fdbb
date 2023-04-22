module.exports = [{
    name: "build",
    code: `Ваш возраст: $message
    $onlyIf[$isNumber[$message]==true;Укажите ваш возраст!]
    $onlyIf[$message>0;Укажите ваш возраст!]

    $djsEval[require("fs").appendFileSync("bots/$authorID.txt", "$message");]`
}];