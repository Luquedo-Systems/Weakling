import { DialogTree } from '../../../types/my-types';

const liatshDialog: DialogTree = [{
  id: 'greetings',
  text: 'Oh, it is you, dear. Looking for Guarthh I believe? Well, he is not here - he woke up very early today to get ready for the trip. I bet he is already waiting you at the central square. Mitikhha should also be somewhere there - she wanted to wish you luck!',
  replies: [{
    text: 'Then I better go and find them! Thanks auntie Liatsh!',
    callbackParam: 'fastEnd',
  }],
}];

export default liatshDialog;
