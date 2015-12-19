//********************************************************************
//tool
//********************************************************************document ready
(function () {
    var ie = !!(window.attachEvent && !window.opera);
    var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
    var fn = [];
    var run = function () { for (var i = 0; i < fn.length; i++) fn[i](); };
    var d = document;
    d.ready = function (f) {
        if (!ie && !wk && d.addEventListener)
            return d.addEventListener('DOMContentLoaded', f, false);
        if (fn.push(f) > 1) return;
        if (ie)
            (function () {
                try { d.documentElement.doScroll('left'); run(); }
                catch (err) { setTimeout(arguments.callee, 0); }
            })();
        else if (wk)
            var t = setInterval(function () {
                if (/^(loaded|complete)$/.test(d.readyState))
                    clearInterval(t), run();
            }, 0);
    };
})();

//*************************************************************************Ajax
var Ajax = function(set){
    set.type=set.type=="get"?"get":"post";
    set.async=set.async!=false;
    if(typeof set.data==="object") {
        var tmp='';
        for (var a in set.data)
            tmp+='&'+a+'='+set.data[a];
        set.data=tmp.substring(1);
    }else if(!set.type&&typeof set.data!="string")
        return false;
    if(set.type=='get'){
        if(set.data&&set.data!='')
            set.url+='?'+set.data;
        else
            set.data=null;
    }
    //定义ajax对象
    var ajaxObj=false;
    if(window.XMLHttpRequest){
        ajaxObj = new XMLHttpRequest();
        if(ajaxObj.overrideMimeType)
            ajaxObj.overrideMimeType('text/xml');
    }else if(window.ActiveXObject)
        if(ajaxObj=new ActiveXObject("Msxml2.XMLHTTP")==null)
            if(ajaxObj = new ActiveXObject("Microsoft.XMLHTTP")==null)
                return false;
            else
                return false;
    ajaxObj['onreadystatechange'] = function() {
        if(ajaxObj.readyState == 4){
            if(/^(200|204)$/.test(ajaxObj.status)){
                if(set.success)
                    set.success(ajaxObj.responseText);
            }else if(set.error)
                set.error(ajaxObj.responseText,ajaxObj.status);
        }
    };
    ajaxObj.open(set.type,set.url,set.async);
    ajaxObj.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
    ajaxObj.send(set.data);
};
//****************************************************************************getPageParam
var getPageParam=function(){
    var pos = location.href.lastIndexOf("?");
    if(pos<=0) return null;
    var str = location.href.substring(pos+1),
        arr = str.split("&"),
        tempArr,
        paramObj = {};
    for(var i=0;i<arr.length;i++){
        tempArr = arr[i].split("=");
        if(tempArr.length==2){
            paramObj[tempArr[0]] = tempArr[1];
        }
    }
    return paramObj;
};