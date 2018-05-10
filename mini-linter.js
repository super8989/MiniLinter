let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey. The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//1.
let storyWords = story.split(' ');

//2.
console.log('The story contains ' + storyWords.length + ' words.');

//3.
let betterWords = storyWords.filter(function(word) {
  if (unnecessaryWords.includes(word)) {
    //console.log(unnecessaryWords.includes(word)); output 6 trues
  } else {
    return word;
  }
});

console.log(`The story now contains ${betterWords.length} words.`);
//console.log(betterWords.join(' '));


//4.
let countOverUsedWords = storyWords.filter(function(word) {
  if (overusedWords.includes(word)) {
    return word;
  } else {

  };
})

console.log('The total count of overusedWords is ' + countOverUsedWords.length + ' times');


let overused0 = 0;
let overused1= 0;
let overused2 = 0;

storyWords.filter(function(word) {
  if (word === overusedWords[0]) {
    overused0++;
  } else if (word === overusedWords[1]) {
    overused1++;
  } else if (word === overusedWords[2]) {
    overused2++;
  }
});


console.log('Count of overused word: ' + overusedWords[0] + ' = ' + overused0);
console.log(`Count of overused word: ${overusedWords[1]} =  ${overused1}`);
console.log('Count of overused word: ' + overusedWords[2] + ' = ' + overused2);

console.log('Total count of overused words is ' + (overused0 + overused1 + overused2));



//5.
let sentences = 0
storyWords.forEach(function(word) {
  if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
    sentences++;
  }
});

console.log('Count of sentences: ' + sentences);


//7
console.log(betterWords.join(' '));
