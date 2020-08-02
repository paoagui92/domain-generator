let pronoun = ['the','our','my'];
let adj = ['great','big','little'];
let noun = ['jogger','racoon','place'];
let extension = ['.com','.net','.us']

pronoun.forEach(x => {
    adj.forEach(y => {
        noun.forEach(z => {
            extension.forEach(a => {
               
                console.log(x+y+z+a);
            });
        });
    });
});