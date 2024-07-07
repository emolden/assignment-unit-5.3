console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

//Create an empty array named myCollection.

let myCollection = [];

//Create a function named addToCollection
  //Take in a collection parameter. (This allows the function to be reused to add an album to any array of album objects.)
  //Take in the album's title, artist, yearPublished as parameters.
  //Create a new object having the above properties.
  //NOTE: Your object's properties must have title, artist, and yearPublished in order for this assignment's automated tests 
  //to work correctly!
  //Add the new object to the end of the collection array.
  //return the newly created object.
function addToCollection(collection, title, artist, yearPublished, tracks) {
  console.log('in addToCollection function');
  const obj = {};
  obj.title = title;
  obj.artist = artist;
  obj.yearPublished = yearPublished;
  obj.tracks = tracks;
  collection.push(obj);
  return collection;
}

function addToTracks(tracks, songName, songDuration) {
  for (i = 0; i<songName.length; i++) {
    const obj = {};
    obj.name = songName[i];
    obj.duration = songDuration[i];
    console.log(obj);
    tracks.push(obj);
  }
  return  console.log(tracks);
}

let shaniaTracks = [];
let shaniaNames = ['Man! I feel like a woman', 'im holdin on to love', 'love gets me every time', 'dont be studpid', 'from this moment on']
let shaniaDurations = ['3:53', '3:30', '3:33', '3:35', '4:43']
console.log(addToTracks(shaniaTracks, shaniaNames, shaniaDurations));

let backstreetTracks = [];
let backstreetNames = ['larger than life', 'i want it that way', 'show me the meaning of being lonely', 'its gotta be you']
let backstreetDurations = ['3:30', '3:33', '3:35', '4:43']
console.log(addToTracks(backstreetTracks, backstreetNames, backstreetDurations));

let britneyTracks = [];
let britneyNames = ['oops!.. i did it again', 'stronger', 'dont go knockin on my door']
let britneyDurations = ['3:33', '3:35', '4:43']
console.log(addToTracks(britneyTracks, britneyNames, britneyDurations));

let ateensTracks = [];
let ateensNames = ['upside down', 'to the music', 'halfway around the world', 'firefly']
let ateensDurations = ['3:54', '3:31', '3:34', '3:36']
console.log(addToTracks(ateensTracks, ateensNames, ateensDurations));

let avrilTracks = [];
let avrilNames = ['losing grip', 'sk8er boi', 'complicated', 'im with you', 'mobile']
let avrilDurations = ['3:29', '3:32', '3:34', '4:42', '3:41']
console.log(addToTracks(avrilTracks, avrilNames, avrilDurations));

let shrekTracks = [];
let shrekNames = ['stay home', 'im a believer', 'like wow', 'it is you']
let shrekDurations = ['3:53', '3:30', '3:33', '3:35']
console.log(addToTracks(shrekTracks, shrekNames, shrekDurations));

//Use and Test the addToCollection function:
  //Add 6 albums to the myCollection array. Aim to have a mix of both same and different artists and published 
  //years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
  //console.log each album as added using the function's returned value.
  //After all are added, console.log the myCollection array.

  /*console.log('Added Shania Twain: ', */addToCollection(myCollection, 'Come on Over', 'Shania Twain', 1997, shaniaTracks);
  /*console.log('Added Backstreet Boys: ', */addToCollection(myCollection, 'Millennium', 'New Name', 1999, backstreetTracks);
  /*console.log('Added Britney Spears: ', */addToCollection(myCollection, 'Oops!... I Did It Again', 'Britney Spears', 2000, britneyTracks);
  /*console.log('Added A Teens: ', */addToCollection(myCollection, 'Teen Spirit', 'New Name', 2001, ateensTracks);
  /*console.log('Added Avril Lavigne: ', */addToCollection(myCollection, 'Let Go', 'Avril Lavigne', 2002, avrilTracks);
  /*console.log('Added Shrek: ', */addToCollection(myCollection, 'Shrek Soundtrack', 'Shrek', 2001, shrekTracks);

  console.log('My whole collection: ', myCollection);

//Create a function named showCollection. This function should:
  //Take in a collection parameter. (This allows it to be reused to show any array of album objects.)
  //Loop through the collection and console.log each album's information formatted within a single string, like: 
  //TITLE by ARTIST, published in YEARPUBLISHED.

console.log('Starting showCollection');
function showCollection(collection) {
  console.log('In showCollcetion. The current parameter is: ', collection);
  //let albumAsString = '';
  for (let i=0; i<collection.length; i++) {
    console.log( 'Album: ' + collection[i].title + ' By: ' + collection[i].artist + ', published in: ' + collection[i].yearPublished );
    //console.log(albumAsAString);
  } //end looping through collection array adding objects as strings
  return true;
} // end showCollection

//Test the showCollection function.
console.log('Testing showCollection: ', showCollection(myCollection));



//Add a function named findByArtist. This function should:
  //Take in a collection parameter. Remember, we want to be able to search any collection!
  //Take in an artist (string) parameter.
  //Create an empty array to hold any matching results, if any.
  //Loop through the collection and add any album objects with a matching artist to the array.
  //Return the array with the matching results. (If no results are found, an empty array should be returned.)

function findByArtist (collection, artist) {
  let matchingArtist = [];
  for(i=0; i<collection.length; i++) {
    if (collection[i].artist === artist) {
      matchingArtist.push(collection[i]);
    }
  }
  return matchingArtist;
}

  //Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist 
  //you know is not in your collection. Check that for artists with multiple matches, all are returned.
console.log('Testing findByArtist:');
console.log(findByArtist(myCollection, 'New Name'));
console.log(findByArtist(myCollection, 'Old Name'));
console.log(findByArtist(myCollection, 'Shrek'));






//STRETCH

//Create a function called search that will allow for searching by artist and yearPublished. This function should:
  //Take in a collection parameter.
  //Take in a searchCriteria parameter. Create your solution based on a search object that has these properties:
  //{artist: 'Ray Charles', yearPublished: 1957 }
  //The returned output from search should meet these requirements:
    //Return a new array of all items in the collection matching all of the search criteria.
    //If no results are found, return an empty array.
    //If there is no search object, an empty search object, or missing artist/yearPublished data provided as input, 
    //return all albums from the collection being searched.

function search (collection, searchCriteria) {
  console.log('in search function. The current parameters are: ', collection, searchCriteria);
  let newCollection = [];
  if (isEmpty(searchCriteria) || typeof searchCriteria != 'object' || missingInfo(searchCriteria)) {
    return collection;
  } // end conditional looking for an empty object, no object, missing data
  else {
    for(i=0; i<collection.length; i++) {
      if (collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.yearPublished) {
        newCollection.push(collection[i]);
      } // end conditional checking to see if current property matches search property
    }  // end loop through collection  
    return newCollection;
  } // end else
} // end search

function isEmpty (obj) {
  console.log('in isEmpty function. The current parameter is: ', obj);
  return obj && Object.keys(obj).length === 0;
} // end isEmpty

function missingInfo (object) {
  console.log('in missingInfo function. the current parameter is: ', object);
  if (object.artist === undefined || object.yearPublished === undefined || object.artist === '' || object.yearPublished === '') {
    return true;
  } // end conditional searching for missing data
  return false;
} // end missingInfo

console.log('Tests for search function:')
//return empty array
let searchObject1 = {
  artist: 'Ray Charles',
  yearPublished: 1957
};
console.log (search(myCollection, searchObject1));
//return matches in array
let searchObject2 = {
  artist: 'Shrek',
  yearPublished: 2001
};
console.log(search(myCollection, searchObject2));
//no search object, so return original array
let searchObject3;

console.log(search(myCollection, searchObject3));

//empty search object, so return original array
let searchObject4 = {

};
console.log(search(myCollection, searchObject4));

//missing data, so return original array
let searchObject5 = {
  yearPublished: 2001
};
console.log(searchObject5.artis);
console.log(search(myCollection, searchObject5));


// EXTRA STRETCHY STRETCH
//NOTE: The following stretch goals do not have tests associated with them.
  //This means it's even more important to use your own console.log skills to verify that your code behaves as you expect.
//Add an array of tracks to each of your album objects. Each track should have a name and duration. You will need to update 
//the functions to support this new property:
  //Update the addToCollection function to also take an input parameter for the array of tracks.
  //Update the showCollection function to display the list of tracks for each album with its name and duration.
  /*TITLE by ARTIST, published in YEARPUBLISHED:
      1. NAME: DURATION
      2. NAME: DURATION
      3. NAME: DURATION
  TITLE by ARTIST, published in YEARPUBLISHED:
      1. NAME: DURATION
      2. NAME: DURATION */
  //Update search to allow an optional trackName search criteria.
    //IF the search object has a trackName property, only search for that, ignoring any artist or yearPublished properties.


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
