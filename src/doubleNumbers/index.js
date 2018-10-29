/* eslint-disable-next-line */
export const doubleNum = num => {
  const toArr = num.toString().split('');
  const centerOfArr =  toArr.length / 2;
  const firtPart = toArr.slice(0,centerOfArr);
  const secontPart = toArr.splice(centerOfArr,toArr.length);
  
  if (secontPart.join('') === firtPart.join('')) {
    return num;
  } else return num * 2;
};
