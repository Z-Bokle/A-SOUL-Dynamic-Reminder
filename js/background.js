var d=new Date();
var dynamic,obj;
var times=0;
chrome.alarms.create("default_alarm",{
    delayInMinutes:1,
    periodInMinutes:1
});

var dynamic_id={
    ava:"0",
    bella:"0",
    carol:"0",
    diana:"0",
    eileen:"0",
    asoul:"0"
};// 最新动态dynamic_id

var settings={'ava':1,'bella':1,'carol':1,'diana':1,'eileen':1,'asoul':1};//是否启用通知

function update_settings(obj){//更新设置
    var views = chrome.extension.getViews({type:'popup'});
    if(views.length > 0) {
	settings=obj;
    console.log(Date() + "\nbackground已更新来自popup的设置");
}

}

testNoti();// 开始运行时发布测试通知

function show_notification(obj,dynamic,owner){//新建通知
    var type=obj.desc.type;

    if(type==1)// 转发
    forwardNoti(
        dynamic.user.face,
        "https://t.bilibili.com/"+obj.desc.dynamic_id_str,
        dynamic.user.uname,
        dynamic.item.content
        );
    if(type==2)// 图片动态
    pictureNoti(
        dynamic.user.head_url,
        "https://t.bilibili.com/"+
        obj.desc.dynamic_id_str,
        dynamic.user.name,
        dynamic.item.description,
        dynamic.item.pictures[0].img_src
        );
    if(type==4)// 文字动态
    textNoti(
        dynamic.user.face,
        "https://t.bilibili.com/"+obj.desc.dynamic_id_str,
        dynamic.user.uname,
        dynamic.item.content
        );
    if(type==8)// 视频动态
    videoNoti(
        obj.desc.user_profile.info.face,
        "https://www.bilibili.com/video/"+obj.desc.bvid,
        obj.desc.user_profile.info.uname,
        dynamic.desc,
        dynamic.first_frame
        );
    if(type>8)// 其他类型
    textNoti(
        null,
        "https://t.bilibili.com/"+obj.desc.dynamic_id_str,
        owner,
        "请点击通知跳转到动态页面"
        );
}


console.log("AvA动态id已同步");
$.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
    host_uid:672346917,
    offset_dynamic_id:0
},
function(data,status){
    console.log(status);
    obj=data.data.cards[0];
    dynamic=JSON.parse(obj.card);
    dynamic_id.ava=obj.desc.dynamic_id_str;
});    
console.log("Bella动态id已同步");
$.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
    host_uid:672353429,
    offset_dynamic_id:0
},
function(data,status){
    console.log(status);
    obj=data.data.cards[0];
    dynamic=JSON.parse(obj.card);
    dynamic_id.bella=obj.desc.dynamic_id_str;
});    
console.log("Carol动态id已同步");
$.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
    host_uid:351609538,
    offset_dynamic_id:0
},
function(data,status){
    console.log(status);
    obj=data.data.cards[0];
    dynamic=JSON.parse(obj.card);
    dynamic_id.carol=obj.desc.dynamic_id_str;
});   
console.log("Diana动态id已同步");
$.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
    host_uid:672328094,
    offset_dynamic_id:0
},
function(data,status){
    console.log(status);
    obj=data.data.cards[0];
    dynamic=JSON.parse(obj.card);
    dynamic_id.diana=obj.desc.dynamic_id_str;
});   
console.log("Eileen动态id已同步");
$.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
    host_uid:672342685,
    offset_dynamic_id:0
},
function(data,status){
    console.log(status);
    obj=data.data.cards[0];
    dynamic=JSON.parse(obj.card);
    dynamic_id.eileen=obj.desc.dynamic_id_str;
});   
console.log("ASOUL动态id已同步");
$.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
    host_uid:703007996,
    offset_dynamic_id:0
},
function(data,status){
    console.log(status);
    obj=data.data.cards[0];
    dynamic=JSON.parse(obj.card);
    if(dynamic_id.asoul!=obj.desc.dynamic_id_str)
    dynamic_id.asoul=obj.desc.dynamic_id_str;
});   




chrome.alarms.onAlarm.addListener(function(alarm){
    // 向晚
    if(settings.ava==1){
        console.log(Date()+"\nAvA请求数据");
        $.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
            host_uid:672346917,
            offset_dynamic_id:0
        },
        function(data,status){
            console.log(status);
            obj=data.data.cards[0];
            dynamic=JSON.parse(obj.card);
            if(dynamic_id.ava!=obj.desc.dynamic_id_str)
            {
                dynamic_id.ava=obj.desc.dynamic_id_str;
                show_notification(obj,dynamic,"向晚");
            }
        });    
   
    }

    // 贝拉
    if(settings.bella==1){
        console.log(Date()+"\nBella请求数据");
        $.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
            host_uid:672353429,
            offset_dynamic_id:0
        },
        function(data,status){
            console.log(status);
            obj=data.data.cards[0];
            dynamic=JSON.parse(obj.card);
            if(dynamic_id.bella!=obj.desc.dynamic_id_str)
            {
                dynamic_id.bella=obj.desc.dynamic_id_str;
                show_notification(obj,dynamic,"贝拉");
            }
        });          
    }
  
    // 珈乐
    if(settings.carol==1){
        console.log(Date()+"\nCarol请求数据");
        $.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
            host_uid:351609538,
            offset_dynamic_id:0
        },
        function(data,status){
            console.log(status);
            obj=data.data.cards[0];
            dynamic=JSON.parse(obj.card);
            if(dynamic_id.carol!=obj.desc.dynamic_id_str)
            {
                dynamic_id.carol=obj.desc.dynamic_id_str;
                show_notification(obj,dynamic,"珈乐");
            }
        });          
    }
 
    // 嘉然
    if(settings.diana==1){
        console.log(Date()+"\nDiana请求数据");
        $.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
            host_uid:672328094,
            offset_dynamic_id:0
        },
        function(data,status){
            console.log(status);
            obj=data.data.cards[0];
            dynamic=JSON.parse(obj.card);
            if(dynamic_id.diana!=obj.desc.dynamic_id_str)
            {
                dynamic_id.diana=obj.desc.dynamic_id_str;
                show_notification(obj,dynamic,"嘉然");
            }
        });         
    }
  
    //乃琳
    if(settings.eileen==1){
        console.log(Date()+"\nEileen请求数据");
        $.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
            host_uid:672342685,
            offset_dynamic_id:0
        },
        function(data,status){
            console.log(status);
            obj=data.data.cards[0];
            dynamic=JSON.parse(obj.card);
            if(dynamic_id.eileen!=obj.desc.dynamic_id_str)
            {
                dynamic_id.eileen=obj.desc.dynamic_id_str;
                show_notification(obj,dynamic,"乃琳");
            }
        });          
    }
 
    //官号
    if(settings.asoul==1){
        console.log(Date()+"\nASOUL请求数据");
        $.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
            host_uid:703007996,
            offset_dynamic_id:0
        },
        function(data,status){
            console.log(status);
            obj=data.data.cards[0];
            dynamic=JSON.parse(obj.card);
            if(dynamic_id.asoul!=obj.desc.dynamic_id_str)
            {
                dynamic_id.asoul=obj.desc.dynamic_id_str;
                show_notification(obj,dynamic,"A-SOUL官号");
            }
        });           
    }

});


