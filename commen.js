/**
 * Created by lichengxiang on 2017/4/17.
 */

/**
 *
 * @param str
 * @returns {*}
 */
function $(str){
    if(typeof str == 'function'){
        window.onload = str;
    }else{
        var char = str.charAt(0);
        if(char == '#'){
            return document.getElementById(str.slice(1));
        }else if(char == '.'){
            return  document.getElementsByClassName(str.slice(1));
        }else{
            return document.getElementsByTagName(str);
        }
    }
}
/**
 * 创建一个获取标签之间文本内容的方法/ innerText 和 textContent 方法的兼容
 * @param ele
 * @returns {*}
 */
function getContent(ele) {
    if (ele.innerText) {
        return ele.innerText
    } else {
        return ele.textContent;
    }
}

/**
 * 封装一个给标签间添加内容的方法--innerText 和 textContent 方法的兼容
 * @param ele
 * @param content
 */
function setContent(ele, content) {
    if (typeof ele.innerText == "string") { //当元素没有内容时候，ele.innerterxt boolean值就是false,所以判断条件只有ele.innerText 不够严谨，所以应该从获得的值的类型来判断这个方法是否可用
        ele.innerText = content;
    } else {
        ele.textContent = content;
    }
}

/**
 * 封装一个获取元素前一个节点的兼容方法
 * @param ele
 * @returns {*}
 */
function getPreviousNode(ele) {
    if (ele) {
        if (ele.previousElementSibling) {
            return ele.previousElementSibling;
        } else {
            ele = ele.previousSibling;
            while (ele.nodeType != 1) {
                ele = ele.previousSibling;
            }
            return ele;
        }
    }
}

/**
 * 封装一个获取元素下一个节点的兼容方法
 * @param ele
 * @returns {*}
 */
function getNextNode(ele) {
    if (ele) {//判断元素是否为空
        if (ele.nextElementSibling) {//应为nextElementNode可以更加简单直接的获取到标签节点，所以首先要判断浏览器是否能用该方法。
            return ele.nextElementSibling;
        } else {
            ele = ele.nextSibling;//由于通过nextSibling方法获得的节点可能是空字符串或者注释
            while (ele.nodeType != 1) {//需要判断获得的数据是否为标签节点，所以进行判断
                ele = ele.nextSibling;//如果或得到的节点不是标签节点就继续进行找下一个节点
            }
            return ele;
        }
    }
}

/**
 * 封装一个获取元素第一个标签节点的函数；
 * @param ele
 * @returns {*}
 */
function getFirstNode(ele) {
    if (ele) {
        if (ele.firstElementChild) {
            return ele.firstElementChild;
        } else {
            ele = ele.firstChild;
            while (ele.nodeType != 1) {
                ele = ele.nextSibling;//第一个如果不是标签节点，就只能继续往下找，所以用到的方法是nextSibling;
            }
            return ele;
        }
    }
}

/**
 * 封装一个获取元素最后一个标签节点的函数；
 * @param ele
 * @returns {*}
 */
function getLastNode(ele) {
    if (ele) {
        if (ele.lastElementChild) {
            return ele.lastElementChild
        } else {
            ele = ele.lastChild
            while (ele.nodeType != 1) {
                ele = ele.previousSibling;
            }
            return ele;
        }
    }
}

/**
 * 封装了一个获取元素属性的函数
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}


/**
 * 封装了一个多属性变化动画函数
 * @param obj
 * @param json
 * @param time
 * @param fn
 */
function animate(obj,json,time,fn){
    clearInterval(obj.timeId);
    obj.timeId = setInterval(function (){
        var flag = true;
        for(var key in json){
            if(key == 'zIndex'){
                var leader = parseInt(getStyle(obj,key))||0;
                var target = json[key];
                obj.style[key] = target;
            }else if(key == 'opacity'){
                var leader = parseInt(getStyle(obj,key)*100)||0;
                var target = json[key]*100;
                var step = (target-leader)/10;
                step = step < 0? Math.floor(step) : Math.ceil(step);
                leader += step;
                obj.style[key] = leader/100
            }else{
                var leader = parseInt(getStyle(obj,key))||0;
                var target = json[key];
                var step = (target-leader)/10;
                step = step < 0? Math.floor(step) : Math.ceil(step);
                leader += step;
                obj.style[key] = leader +'px';
            }
            if(target != leader){
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timeId);
            if(typeof fn == 'function'){
                fn();
            }
        }

    },time);
}

/**
 * 封装了一个获取被页面卷去的距离的函数
 * @returns {{scrollTop: (Number|number), scrollLeft: (Number|number)}}
 */
function scroll() {
    return {
        scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        scrollLeft:window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

/**
 * 封装一个获取可视区宽度和高度的函数
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client(){
    return {
        width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height : window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ||0
    };
}

/**
 * 封装一个获取当前页面坐标函数兼容
 * @param event
 * @returns {{pageX: (*|Number), pageY: (*|Number)}}
 */

function page(event){
    return{
        pageX:event.pageX || event.clientX + document.documentElement.scrollLeft,
        pageY:event.pageY || event.clientY + document.documentElement.scrollTop
    }
}

/**
 * 封装了一个给对象注册事件的兼容函数
 * @param obj
 * @param tyle
 * @param Listener /需要执行的函数代码
 */
function addEventListener(obj,type,Listener){
    if(obj.addEventListener){
        obj.addEventListener(type,Listener,false);
    }else if(obj.attachEvent){
        obj.attachEvent("on"+type,Listener);
    }else{
        obj['on'+type] = Listener;
    }
}

/**
 * 封装了一个移除对象事件的兼容函数
 * @param obj
 * @param type
 * @param Listener
 */
function removeEventListener(obj,type,Listener){
    if(obj.removeEventListener){
        obj.removeEventListener(type,Listener,false);
    }else if(obj.detachEvent){
        obj.detachEvent('on'+type,Listener)
    }else{
        obj['on'+type] = null;
    }
}

/**
 * 封装了一个事件中阻止冒泡的兼容函数
 * @param event
 */
function stopPropagation(event){
    if(event&&event.stopPropagation){
        event.stopPropagation();
    }else{
        event.cancelBubble = true;
    }
}