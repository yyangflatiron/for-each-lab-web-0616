function iterativeLog(array){
  array.forEach(
    (element, index)=>{
      console.log(`${index}: ${element}`)
    })
}

function iterate(callback){
  var array = [2,3,4]
  array.forEach((element)=>{callback(element)});
  return array
}

function doToArray(array, callback){
  array.forEach((element)=>{callback(element)})
}
