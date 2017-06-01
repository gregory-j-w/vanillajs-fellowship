console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');

/*
  1. var makeMiddleEarth = function () {
     create a section tag with an id of `middle-earth`
     add each land as an `article` tag
     inside each `article` tag include an `h1` with the name of the land
     append `middle-earth` to your document `body`
      };
     makeMiddleEarth();    */

var makeMiddleEarth = function() {
  var middlEarth = document.createElement('section');
  middleEarth.id = "middle-earth";
  body.appendChild(middleEarth);
  for (var i = 0; i < lands.length; i++) {
    var articleName = document.createElement('article');
    middleEarth.appendChild(articleName);
    var h1 = document.createElement("h1");
    h1.innerText = lands[i];
    articleName.appendChild(h1);
  }
  body.appendChild(middlEarth);
}

makeMiddleEarth();

/*
  2. var makeHobbits = function () {
     display an `unordered list` of hobbits in the shire
     (which is the second article tag on the page)
     give each hobbit a class of `hobbit`
      };    */

var theShire = body.getElementsByTagName('article')[0]
var rivendell = body.getElementsByTagName('article')[1]
var mordor = body.getElementsByTagName('article')[2]

var makeHobbits = function() {
  var hobbitList = document.createElement("ul");
  for (var i = 0; i < hobbits.length; i++) {
    var hobbit = document.createElement("li");
    hobbit.setAttribute("class", "hobbit");
    hobbit.innerText = hobbits[i];
    hobbitList.appendChild(hobbit);
  }
  theShire.appendChild(hobbitList);
};

makeHobbits();

/*
  3. var keepItSecretKeepItSafe = function () {
     create a div with an id of `'the-ring'`
     give the div a class of `'magic-imbued-jewelry'`
     add the ring as a child of `Frodo`
     };    */
var frodo = document.getElementsByClassName('hobbit')[0];
var sam = document.getElementsByClassName('hobbit')[1];
var merry = document.getElementsByClassName('hobbit')[2];
var peregrin = document.getElementsByClassName('hobbit')[3]
var hobbitList = [frodo, sam, merry, peregrin];


var keepItSecretKeepItSafe = function () {
  var theRing = document.createElement('div');
  theRing.className('magic-imbued-jewelry');
  frodo.appendChild(theRing);
};

keepItSecretKeepItSafe();

var theRing = document.getelementbyId('the-ring');
 
/*
  4. var makeBuddies = function () {
     create an `aside` tag
     attach an `unordered list` of the `'buddies'` in the aside
     insert your aside as a child element of `rivendell`
     };    */

var makeBuddies = function() {
  var aside = document.createElement("aside");
  var buddyList = document.createElement("ul");
  for( var i = 0; i < buddies.length; i++) {
    var buddy = document.createElement("li");
    buddy.setAttribute("class", "buddies");
    buddy.innerText = buddies[i];
    buddyList.appendChild(rivendell);
  }
  aside.appendChild(buddyList);
  rivendell.appendChild(aside);
};

makeBuddies();

/*
  5. var beautifulStranger = function () {
     change the `'Strider'` text to `'Aragorn'`
     };    */

var gandalf = documents.querySelectorAll('aside ul li')[0];
var legolas = documents.querySelectorAll('aside ul li')[1];
var gimli = documents.querySelectorAll('aside ul li')[2];
var strider = documents.querySelectorAll('aside ul li')[3];
var boromir = documents.querySelectorAll('aside ul li')[4];

var beautifulStranger = function() {
  strider.textContent = "Aragorn";
};

beautifulStranger();

/* 
  6. var leaveTheShire = function () {
     assemble the `hobbits` and move them to `rivendell`
     };    */

var leaveTheShire = function() {
  rivendell.appendChild(hobbitList);
};

leaveTheShire();

/*
  7. var forgeTheFellowShip = function () {
     create a new div called `'the-fellowship'` within `rivendell`
     add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
     after each character is added make an alert that they // have joined your party
     };    */

var fellowShipMembers = rivendell.querySelectorAll('li');

var forgeTheFellowShip = function() {
  var fellowship = document.createElement('div');
  fellowship.id = 'the-fellowship';
  var ul = document.createElement('ul');
  for( var i = 0; i < fellowShipMembers.length; i++) {
    ul.appendChild(fellowShipMembers[i]);
    alert(fellowShipMembers[i].textContent + " joined the party");
  }
  fellowship.appendChild(ul);
  rivendell.appendChild(fellowship);
};

forgeTheFellowShip();
/*
  8. var theBalrog = function () {
     change the `'Gandalf'` text to `'Gandalf the White'`
     apply the following style to the element, make the // background 'white', add a grey border
     };    */

var theBalrog = function () {
  gandalf.innerText = 'Gandalf the White';
  gandalf.style.backgroundColor = 'white';
  gandalf.style.border = '1px solid grey';
};

theBalrog();

/* 
  9. var hornOfGondor = function () {
     pop up an alert that the horn of gondor has been blown
     Boromir's been killed by the Uruk-hai!
     Remove `Boromir` from the Fellowship
     };    */
var hornOfGandor = function() {
alert('HORN'); 
boromir.remove();
};

hornOfGandor();

/*
  10. var itsDangerousToGoAlone = function (){
      take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
      add a div with an id of `'mount-doom'` to `Mordor`
      };   */
var itsDangerousToGoAlone = function() {
  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  var div = document.createElement('div');
  div.id = 'mount-doom';
  mordor.appendChild(div);
};

itsDangerousToGoAlone();

/*
  11. var weWantsIt = function () {
      Create a div with an id of `'gollum'` and add it to Mordor
      Remove `the ring` from `Frodo` and give it to `Gollum`
      Move Gollum into Mount Doom
      };    */
var weWantsIt = function () {
  var gollum = document.createElement('div');
  golloum.id = "gollum";
  mordor.appendChild(gollum);
  gollum.appendChild(theRing);
  mountDoom.appendChild(gollum);

}

weWantsIt();
/*
  12. var thereAndBackAgain = function () {
      remove `Gollum` and `the Ring` from the document
      Move all the `hobbits` back to `the shire`
      };    */
var thereAndBackAgain = function () {
  gollum.remove();
  theShire.appendChild(hobbits);
}

thereAndBackAgain();


