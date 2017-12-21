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
      puzzleArr.push(i);
    };
    puzzleArr = puzzleArr.sort(() => {
      return Math.random();
    });
    puzzleArr.push('');
    this.setData({
      puzzles: puzzleArr
    });
  },
  onLoad() {
    this.createPrizz()
  }
})
