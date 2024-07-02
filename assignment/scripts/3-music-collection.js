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
function addToCollection(collection, title, artist, yearPublished) {
  const obj = {};
  obj.title = title;
  obj.artist = artist;
  obj.yearPublished = yearPublished;
  collection.push(obj);
  return obj;
}

//Use and Test the addToCollection function:
  //Add 6 albums to the myCollection array. Aim to have a mix of both same and different artists and published 
  //years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
  //console.log each album as added using the function's returned value.
  //After all are added, console.log the myCollection array.
  console.log('Added Shania Twain: ', addToCollection(myCollection, 'Come on Over', 'Shania Twain', 1997));
  console.log('Added Backstreet Boys: ', addToCollection(myCollection, 'Millennium', 'Backstreet Boys', 1999));
  console.log('Added Britney Spears: ', addToCollection(myCollection, 'Oops!... I Did It Again', 'Britney Spears', 2000));
  console.log('Added A Teens: ', addToCollection(myCollection, 'Teen Spirit', 'A*Teens', 2001));
  console.log('Added Avril Lavigne: ', addToCollection(myCollection, 'Let Go', 'Avril Lavigne', 2002));
  console.log('Added Shrek: ', addToCollection(myCollection, 'Shrek Soundtrack', 'Shrek', 2001));

  console.log('My whole collection: ', myCollection);

//Create a function named showCollection. This function should:
  //Take in a collection parameter. (This allows it to be reused to show any array of album objects.)
  //Loop through the collection and console.log each album's information formatted within a single string, like: 
  //TITLE by ARTIST, published in YEARPUBLISHED.

function showCollection(collection) {
  
}

//Test the showCollection function.

//Add a function named findByArtist. This function should:
  //Take in a collection parameter. Remember, we want to be able to search any collection!
  //Take in an artist (string) parameter.
  //Create an empty array to hold any matching results, if any.
  //Loop through the collection and add any album objects with a matching artist to the array.
  //Return the array with the matching results. (If no results are found, an empty array should be returned.)

  //Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist 
  //you know is not in your collection. Check that for artists with multiple matches, all are returned.



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
