

//src is an array, //callback is a function that's already been defined
function map(src, callback){
  // r is the array which will be returned
  const r = []

  for (let i = 0; i < src.length; i++ ){

    // theElement is the piece of the array that the callback will work on
    const theElement = src[i];
    // pushes the result of the callback into r
    r.push(callback(theElement))
  }
  return r
}

function reduce(src="", callback){
  
}