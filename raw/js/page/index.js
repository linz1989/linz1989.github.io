document.ready(function(){
    Ajax({
        url : "data/home.json",
        type : "get",
        success : function(res){
            res = JSON.parse(res);
            var timeLine = document.getElementById("time-line");
            var html = "";
            for(var i=0;i<res.data.length;i++){
                html +="<li>\
                                    <time datetime='2015-12-13 10:01'>\
                                        <span>2015/12/13</span>\
                                        <span>10:01</span>\
                                    </time>\
                                    <div class='circle'></div>\
                                    <div class='content'>\
                                        <h3>Ricebean black-eyed pea</h3>\
                                        <div></div>\
                                    </div>\
                                </li>";

            }
        }
    });
});