const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  constructor(arr)  {
    this.arr = arr;
  }   

  count = 0;
  arrtemp = [];
  arrcontr = [];
  rezult = 0;

  calculateDepth(arr) {
   if(arr === undefined){
    return undefined;
   }else if(arr.length > 0){
      this.count++;
      arr.forEach(element => {
        if(Array.isArray(element)){
          if(element.length == 0){
            this.arrtemp.push("empty array");
          }else{
            element.forEach(el =>{
            this.arrtemp.push(el);
            }); 
          }
        }
      });
      this.arrcontr = this.arrtemp;
      this.arrtemp = [];
      this.calculateDepth(this.arrcontr);
    }else {
      this.rezult = this.count;
      this.count = 0;
      return;
    }
    return this.rezult;
  }

};