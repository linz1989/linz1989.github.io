document.ready(function(){
    Ajax({
        url : "data/home.json",
        type : "get",
        success : function(res){
            res = JSON.parse(res);
            var timeLine = document.getElementById("time-line");
            var html = "";
            res = res["data"];
            for(var i=0;i<res.length;i++){
                html +="<li>\
                                    <time datetime='"+res[i]["publishTime"]+"'>\
                                        <span>"+res[i]["publishTime"].split(" ")[0].replace(/-/g,"/")+"</span>\
                                        <span>"+res[i]["publishTime"].split(" ")[1]+"</span>\
                                    </time>\
                                    <div class='circle'></div>\
                                    <div class='content'>\
                                        <a href='"+res[i]["link"]+"'>"+res[i]["title"]+"</a>\
                                        <div>"+res[i]["abstract"]+"</div>\
                                    </div>\
                                </li>";
            }
            timeLine.innerHTML = html;
        }
    });
});