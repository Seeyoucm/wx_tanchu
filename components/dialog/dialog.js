// components/dialog/dialog.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */

  properties: {//组件的属性
  // 弹窗标题
  title:{
    type: String,
    value:"标题"
  },
  // 弹窗内容
  content:{
    type : String,
    value:"弹窗内容"
  },
  // 弹窗取消按钮文字
    cancelText: {
      type: String,
      value: "取消"
    },

  // 弹窗确定按钮文字
    confirmText: {
      type: String,
      value: "确认"
    },
  
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 弹窗控制显示
    isShow:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 公有方法

    // 隐藏
    hideDialog(){
      this.setData({
        isShow: !this.data.isShow
      })
    },
    // 显示
    showDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },

    //私有方法用下划线
    _cancleEvent(){
      this.triggerEvent("cancelEvent")
    },
    _confirmEvent(){
      this.triggerEvent("confirmEvent")
    }

  }
})
