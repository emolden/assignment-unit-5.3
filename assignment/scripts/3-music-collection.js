console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

//Create an empty array named myCollection.

let myCollection = [];

//Create a function named addToCollection
  //Take in a collection parameter. (This allows the function to be reused to add an album to any array of album objects.)
  //Take in the album's title, artist, yearPublished as parameters.
  //Create a new object having the above properties.
  //NOTE: Your object's properties must have title, artist, and yearPublished in order for this assignment's automated tests to work correctly!
  //Add the new object to the end of the collection array.
  //return the newly created object.
function addtoCollection(collection, title, artist, yearPublished) {
  const obj = {};
  obj.title = title;
  obj.artist = artist;
  obj.yearPubished = yearPublished;
  collection.push(obj);
  return obj;
}








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
