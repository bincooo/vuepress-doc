---
title: js事件备忘
---
```javascript
//禁用拖拽
document.ondragstart = function () {
    return false;
};
/**
 * 禁用右键菜单
 */
document.oncontextmenu = function () {
    event.returnValue = false;
};
/**
 * 禁用选中功能
 */
document.onselectstart = function () {
    event.returnValue = false;
};
/**
 * 禁用复制功能
 */
document.oncopy = function () {
    event.returnValue = false;
};
/**
 * 禁用鼠标的左右键
 * @param {Object} e
 */
document.onmousedown = function () {
    if (event.which == 1) {//鼠标左键
        return false;
    }

    if (event.which == 3) {//鼠标右键
        return false;
    }
};

/**
 * 获取键盘上的输入值
 */
document.onkeydown = function () {
    console.info(event.which);
    if (event.which == 13) {
        console.info("回车键");
    }
};
```

```bash
onclick        当单击鼠标时运行脚本
ondblclick     当双击鼠标时运行脚本
ondrag         当拖动元素时运行脚本
ondragend      当拖动操作结束时运行脚本
ondragenter    当元素被拖动至有效的拖放目标时运行脚本
ondragleave    当元素离开有效拖放目标时运行脚本
ondragover     当元素被拖动至有效拖放目标上方时运行脚本
ondragstart    当拖动操作开始时运行脚本
ondrop         当被拖动元素正在被拖放时运行脚本
onmousedown    当按下鼠标按钮时运行脚本
onmousemove    当鼠标指针移动时运行脚本
onmouseout     当鼠标指针移出元素时运行脚本
onmouseover    当鼠标指针移至元素之上时运行脚本
onmouseup      当松开鼠标按钮时运行脚本
onmousewheel   当转动鼠标滚轮时运行脚本
onscroll       当滚动元素滚动元素的滚动条时运行脚本
```

 键盘事件对象

  ```tex
keyup		按键弹起时触发
keydown		键盘按下时触发
keypress	键盘按下触发 但是识别不了功能键

三个事件执行顺序是keydown,keypress,keyup
  ```

