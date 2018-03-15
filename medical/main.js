/*导航js部分*/
var oProduct=document.getElementById("product");
var oConnection=document.getElementById("connection");
var aDownList=document.getElementsByClassName("downList");
oProduct.onmouseover=function(){
    aDownList[0].style.display="block";
};
oConnection.onmouseover=function(){
    aDownList[1].style.display="block";
};
oProduct.onmouseout=function(){
   var time1=setTimeout(function(){
       aDownList[0].style.display="none";}
       ,500);
    aDownList[0].onmouseover=function(){
        clearTimeout(time1);
    };
    aDownList[0].onmouseout=function(){
        var time1=setTimeout(function(){
                aDownList[0].style.display="none";}
            ,500);
    };
};
oConnection.onmouseout=function(){
    var time2=setTimeout(function(){
            aDownList[1].style.display="none";}
        ,500);
    aDownList[1].onmouseover=function(){
        clearTimeout(time2);
    };
    aDownList[1].onmouseout=function(){
        var time2=setTimeout(function(){
                aDownList[1].style.display="none";}
            ,500);
    };
};
/**/