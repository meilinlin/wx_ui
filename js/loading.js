
    //在页面未加载完毕之前显示的loading Html自定义内容  
    var _LoadingHtml = '<img id="loadingDiv" style="display: block;margin: 100px auto;width:70px; height:70px" src="images/loading.gif" />';
   
    //呈现loading效果  
    document.write(_LoadingHtml);  
      
//    window.onload = function () {  
//        var loadingMask = document.getElementById('loadingDiv');  
//        loadingMask.parentNode.removeChild(loadingMask);  
//			loadingMask.style.display="none";
//    };  
      
    //监听加载状态改变  
    document.onreadystatechange = completeLoading;  
      
    //加载状态为complete时移除loading效果  
    function completeLoading() {  
        if (document.readyState == "complete") {  
            var loadingMask = document.getElementById('loadingDiv');  
            loadingMask.parentNode.removeChild(loadingMask);  
        }  
    }  