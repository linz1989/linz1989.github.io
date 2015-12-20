document.ready(function(){
    var param = getPageParam();
    if(!param || !param.id){
        location.href = "404.html";
    }

    ajax({
        url : "data/article/"+param.id+".json",
        type : "get",
        success : function(res){
            res = JSON.parse(res);
            document.querySelector("#main-content>h2.title").innerHTML = res.title;
            document.querySelector("#main-content>h3.tip").innerHTML = res.publishTime;
        }
    });

    ajax({
        url : "data/article/"+param.id+".html",
        type : "get",
        success : function(res){
            document.querySelector("#main-content>div.content").innerHTML = res;
        }
    });
});