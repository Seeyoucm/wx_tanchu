//index.js
//获取应用实例
const app = getApp()

Page({

  onReady(){
    this.dialog = this.selectComponent("#dialog");
    console.log(this)
  },

  showDialog(){
    console.log(this)
    this.dialog.showDialog();
  },

  // 取消事件
  _cancelEvent() {
    console.log("你点击了取消");
    this.dialog.hideDialog()

  },

  // 确认事件
  _confirmEvent() {
    console.log("你点击了确定");
    this.dialog.hideDialog()

  }

})  
