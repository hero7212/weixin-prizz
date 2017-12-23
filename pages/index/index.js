//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    puzzles: []
  },
  createPrizz() {
    let puzzleArr = [];
    for (let i = 1; i < 16; i++) {
      puzzleArr.push(`../../images/${i}.png`);
    };
    puzzleArr = puzzleArr.sort(() => {
      return Math.random();
    });
    puzzleArr.push('');
    this.setData({
      puzzles: puzzleArr
    });
  },
  moveFn(e){
    let {index} = e.target.dataset;
    let arr = this.data.puzzles;
    let [curNum, leftNum, rightNum, topNum, bottomNum] = [arr[index],arr[index-1],arr[index+1],arr[index-4],arr[index + 4]];
    let that = this;
    function move(n) {
      arr[index+n] = curNum;
      arr[index] = '';
      that.setData({
        puzzles: arr
      });
    }
    if (leftNum === '' && index !== 4 && index !== 8 && index !== 12) {
      move(-1);
    } else if (rightNum === '' && index !== 3 && index !== 7 && index !== 11) {
      move(1);
    } else if (topNum === '') {
      move(-4);
    } else if (bottomNum === '') {
      move(4);
    }
  },
  onLoad() {
    this.createPrizz();
  }
})
