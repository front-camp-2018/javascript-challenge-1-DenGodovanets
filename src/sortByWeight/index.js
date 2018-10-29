/* eslint-disable-next-line */
export const sortByWeight = arr => {
  return arr.sort((a,b)=> {
    function changeItem (item) {
      const itemArr = item.toString().split(''); 
      item = itemArr.reduce((a,b) => {
        return Number(a) + Number(b)
        ;
      });
      return item;  
    }
    a = changeItem(a);
    b = changeItem(b);
   
    return a - b;    
  }
  );
};
