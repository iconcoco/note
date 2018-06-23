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
 * ����һ����ȡ��ǩ֮���ı����ݵķ���/ innerText �� textContent �����ļ���
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
 * ��װһ������ǩ��������ݵķ���--innerText �� textContent �����ļ���
 * @param ele
 * @param content
 */
function setContent(ele, content) {
    if (typeof ele.innerText == "string") { //��Ԫ��û������ʱ��ele.innerterxt booleanֵ����false,�����ж�����ֻ��ele.innerText �����Ͻ�������Ӧ�ôӻ�õ�ֵ���������ж���������Ƿ����
        ele.innerText = content;
    } else {
        ele.textContent = content;
    }
}

/**
 * ��װһ����ȡԪ��ǰһ���ڵ�ļ��ݷ���
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
 * ��װһ����ȡԪ����һ���ڵ�ļ��ݷ���
 * @param ele
 * @returns {*}
 */
function getNextNode(ele) {
    if (ele) {//�ж�Ԫ���Ƿ�Ϊ��
        if (ele.nextElementSibling) {//ӦΪnextElementNode���Ը��Ӽ�ֱ�ӵĻ�ȡ����ǩ�ڵ㣬��������Ҫ�ж�������Ƿ����ø÷�����
            return ele.nextElementSibling;
        } else {
            ele = ele.nextSibling;//����ͨ��nextSibling������õĽڵ�����ǿ��ַ�������ע��
            while (ele.nodeType != 1) {//��Ҫ�жϻ�õ������Ƿ�Ϊ��ǩ�ڵ㣬���Խ����ж�
                ele = ele.nextSibling;//�����õ��Ľڵ㲻�Ǳ�ǩ�ڵ�ͼ�����������һ���ڵ�
            }
            return ele;
        }
    }
}

/**
 * ��װһ����ȡԪ�ص�һ����ǩ�ڵ�ĺ�����
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
                ele = ele.nextSibling;//��һ��������Ǳ�ǩ�ڵ㣬��ֻ�ܼ��������ң������õ��ķ�����nextSibling;
            }
            return ele;
        }
    }
}

/**
 * ��װһ����ȡԪ�����һ����ǩ�ڵ�ĺ�����
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
 * ��װ��һ����ȡԪ�����Եĺ���
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
 * ��װ��һ�������Ա仯��������
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
 * ��װ��һ����ȡ��ҳ���ȥ�ľ���ĺ���
 * @returns {{scrollTop: (Number|number), scrollLeft: (Number|number)}}
 */
function scroll() {
    return {
        scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        scrollLeft:window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

/**
 * ��װһ����ȡ��������Ⱥ͸߶ȵĺ���
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client(){
    return {
        width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height : window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ||0
    };
}

/**
 * ��װһ����ȡ��ǰҳ�����꺯������
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
 * ��װ��һ��������ע���¼��ļ��ݺ���
 * @param obj
 * @param tyle
 * @param Listener /��Ҫִ�еĺ�������
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
 * ��װ��һ���Ƴ������¼��ļ��ݺ���
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
 * ��װ��һ���¼�����ֹð�ݵļ��ݺ���
 * @param event
 */
function stopPropagation(event){
    if(event&&event.stopPropagation){
        event.stopPropagation();
    }else{
        event.cancelBubble = true;
    }
}