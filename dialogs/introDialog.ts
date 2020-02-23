export const introDialog: DialogTree = [{
    id: 'intro_1',
    text: `You woke up late today - you can tell by the voices outside. Everybody are already up and busy with their everyday routines.`,
    replies: [{
        text: '(Continue}',
        successTriggers: 'intro_2'
    }]
}, {
    id: 'intro_2',
    text: `But there is more to it - the voices outside are louder and more excited then usually - they discuss the shipping day. Oh yes, that's right! Today is the day when you and elder Guarthh are supposed to take Village's best goods to Caltor!
    Selling them for a good price should help your little tribe to get prepared for the Winter and thus your role is important for everyone's well being.`,
    replies: [{
        text: '(Continue}',
        successTriggers: 'intro_3'
    }]
}, {
    id: 'intro_3',
    text: `And yet, you spent all night grinding, roasting, boiling these strange black rocks uncle Hargkakh gave you a few days ago - your hobby made you forget about everything in the world... Again. 
    But now it is not the time for it, unfortunately - Elder must be already waiting for you at the Big Fire and you'd better not make him wait for too long - after all, his good will is essential for you to spend time with his daughter, Mitikhha, your best childhood friend, whom, you hope, one day, will become more than that.
    After all time spent with her is the best time spent - even your little experiments can't compete with it!`,
    replies: [{
        text: '(Continue}',
        successTriggers: 'intro_4'
    }]
}, {
    id: 'intro_4',
    text: `Then it is settled! No time to waste - it is gonna be a long day, but if everything will go good, you might even get an invitation for dinner - after all, if there is anything better than seeing Mitikhha, than it would be seeing Mitikhha while eating Mitikhha's mother, aunty Girda's, cooking!`,
    replies: [{
        text: '(Continue}',
        successTriggers: 'intro_5'
    }]
}, {
    id: 'intro_5',
    text: `    (Use W A S D or Arrow Keys (↑ → ↓ ←) to move around, Space to move between locations and interact with objects and characters.
    Press and hold "Shift" to highlight interact-able objects and characters.)`,
    replies: [{
        text: '(End)',
        callbackParam: 'fastEnd'
    }]
}];

export const chestDialog: DialogTree =  [{
    id: 'obtained',
    text: `    Besides of the regular set of clothes, you take out a worn-off but still pretty sturdy leather jacket, a present from uncle Hargkakh for the coming of age and a cool looking ranger's hat - something Mitikhha made for you a little while ago. 
    You are also taking 10 copper coins - not a small amount for young Kobold, which you intend to spend on a present for her once you get to Caltor.
    
    (Click the Inventory icon at the top right corner, or use the "I" key, to see and equip the items.)`,
    replies: [{
        text: '(End)',
        callbackParam: 'fastEnd'
    }]
}];
