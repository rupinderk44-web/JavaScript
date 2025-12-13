/*sing array methods, you will transform an array of strings into a secret message!

You should consult the Mozilla Developer Network (MDN) for reference on
 any method with which you are not familiar. */

 let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
secretMessage.push('to','program');
secretMessage[7]='right';
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(6,5,'know,')

console.log(secretMessage.join(" "));
