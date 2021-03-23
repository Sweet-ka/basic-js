const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(arr === undefined || arr.length === null){
    return null;
  }else if (Array.isArray(arr) === false){
    return 'Error';
  }
  
  const discardPrev = (array, k) => {
      array.splice(k - 1, 2);
  };

  const doubleNext = (array, k) => {
      array.splice(k, 1, array[k + 1]);
  };

  const doublePrev = (arr, k, del) => {
    arr.splice(k, 1, arr[k - 1]);
};
  
  const arrTransform = arr.slice();
  let del = false;

  for(i = 0; i < arrTransform.length; i++){

    if(arrTransform[i] == undefined){
      arrTransform.splice(i, 1);
      del = true;
      i--;
    }

    else if(arrTransform[i] == '--discard-next'){
      if(i + 1 < arrTransform.length){
        arrTransform.splice(i, 2);
        del = true;
        i--;
      }else{
        arrTransform.splice(i, 1);
      }
    }

    else if(arrTransform[i] == '--double-next'){
      if(i + 1 < arrTransform.length && arrTransform[i + 1] === undefined){
        arrTransform.splice(i, 2);
        del = true;
        i--;
      }else if(i + 1 < arrTransform.length){
        doubleNext(arrTransform, i);
        del = false;
      }else{
        arrTransform.splice(i, 1);
      }
    }
    
    else if(arrTransform[i] == '--discard-prev'){
      if(i - 1 < 0 || del == true){
        arrTransform.splice(i, 1);
      i--;    
      }else{
        discardPrev(arrTransform, i);
        i = i - 2;
      }
        del = false;
    }
    
    else if(arrTransform[i] == '--double-prev'){
      if(i - 1 < 0 || del == true){
        arrTransform.splice(i, 1);
        i--;
      }else{
        doublePrev(arrTransform, i, del);
      }
        del = false;
    }

    else{
      del = false;
    }
  }
   return arrTransform;
}
