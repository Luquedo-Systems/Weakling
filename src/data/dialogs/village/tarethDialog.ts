import { DialogTree } from '../../../types/my-types';

export const tarethDialog: DialogTree = [{
  id: 'greetings',
  text: 'Oh man, elder tasked me with preparing these stockpiles for winter storage! And they are sooo heavy! I barely can lift that basket, and it is not even the heaviest one!',
  replies: [{
    text: 'You can handle it, just take it slow. I will come and check on you later!',
    callbackParam: 'fastEnd',
  }],
}];

export const tarethSecondDialog: DialogTree = [{
  id: 'greetings',
  text: 'Nope, still working on it, it might happen that you will be back from Caltor before I am done taking these things across the road and downstairs.',
  replies: [{
    text: 'Hmm, fine! I might have something which might help! Just a few days ago I perfected my strength potion! Couple carrots and Rocky rose together do miracles!',
    checkInventory: 'remove',
    checkValue: [{ itemId: 'small-weak-strength-potion', quantity: 1 }],
    successTriggers: 'potionGiven',
    failureTriggers: 'noPotion',
  }, {
    text: 'I will help you as soon as I come back, I promise, Tareth!',
    callbackParam: 'fastEnd',
  }],
}, {
  id: 'potionGiven',
  text: 'Hmm, will it really work? Last time you made me drink something you made out of carrots I ended up colored like one - the whole village was making fun of me for a week!',
  replies: [{
    text: 'This time it will work! I gave some to Whiskers another day and believe, it or not, he caught Eyeball midair! Dragged him to Mitikha like poor fella was a mouse! Never seen him so confused and depressed, had to step in and help.\n   Anyway, I am telling you it will work!',
    callbackParam: 'potionGiven',
  }],
}, {
  id: 'noPotion',
  text: 'Aaaaand where is it?',
  replies: [{
    text: 'Hmm did I really give the last one to Whiskers? Wait here, I will make more and come back!',
    callbackParam: 'fastEnd',
  }],
}];

export const tarethDoneDialog: DialogTree = [{
  id: 'greetings',
  text: 'Oh wow! That stuff you gave me really worked! I might even be done before you come back! Though, is it me, or I look more orange than before?',
  replies: [{
    text: 'Nope, green as a leave! Carry on!',
    callbackParam: 'fastEnd',
  }],
}];
