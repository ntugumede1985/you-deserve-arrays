function getFirstItemFrom(itemList) {
  return itemList.shift();
}

function getLastItemFrom(itemList) {
  return itemList.pop();
}

function getIndex3(itemList) {
  return itemList.slice().pop();
}

function firstItemIsNumber() {

}

function isLongList() {

}



module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
}