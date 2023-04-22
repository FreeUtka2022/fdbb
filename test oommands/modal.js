bot.command({
    name: "interactionModal",
    code: `
$addButton[1;Press To Build Your Bot;primary;exampleID;false]
ㅤ`
});

bot.interactionCommand({
    name: "exampleID",
    prototype: "button",
    code: `
$interactionModal[Example!;customID;
  {actionRow:
    {textInput:What's your name?:1:nameInput:true:Your pretty name!:2:200}
  }
  {actionRow:
    {textInput:What's your age?:1:ageInput:true:You young soul!:1:3}
  }
  {actionRow:
    {textInput:What's your gender?:2:genderInput:true:Anything will work!:1:10}
  }
]`
});

bot.interactionCommand({
    name: "customID",
    prototype: "modal",
    code: `
$interactionReply[Thanks for submitting this form!;;;;everyone;true]

$title[$username submitted a form!;$userAvatar]
$addField[Their name is..;$textInputValue[nameInput]]
$addField[Their age is..;$textInputValue[ageInput]]
$addField[Their gender is..;$textInputValue[genderInput]]`
});