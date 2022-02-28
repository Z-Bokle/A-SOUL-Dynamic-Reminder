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

var live_topic={
    ava:"",
    bella:"",
    carol:"",
    diana:"",
    eileen:"",
    asoul:""
};// 最新直播间标题

var last_live_status={
    ava:0,
    bella:0,
    carol:0,
    diana:0,
    eileen:0,
    asoul:0
}// 上一次开播状态

var settings={'ava':1,'bella':1,'carol':1,'diana':1,'eileen':1,'asoul':1,'sound':1};//是否启用通知/个性化语音

var init_status={'ava':0,'bella':0,'carol':0,'diana':0,'eileen':0,'asoul':0}//初始化成功项目数(每人最多两项)

function update_settings(obj){//更新设置
    var views = chrome.extension.getViews({type:'popup'});
    if(views.length > 0) {
	settings=obj;
    console.log(Date() + "\nbackground已更新来自popup的设置");
    }

}


function show_notification(obj,dynamic,owner){//新建动态通知
    var type=obj.desc.type;

    if(type==1)// 转发
        forwardNoti(
            dynamic.user.face,
            "https://t.bilibili.com/"+obj.desc.dynamic_id_str,
            dynamic.user.uname,
            dynamic.item.content,
            settings.sound
            );
    if(type==2)// 图片动态
        pictureNoti(
            dynamic.user.head_url,
            "https://t.bilibili.com/"+obj.desc.dynamic_id_str,
            dynamic.user.name,
            dynamic.item.description,
            dynamic.item.pictures[0].img_src,
            settings.sound
            );
    if(type==4)// 文字动态
        textNoti(
            dynamic.user.face,
            "https://t.bilibili.com/"+obj.desc.dynamic_id_str,
            dynamic.user.uname,
            dynamic.item.content,
            settings.sound
            );
    if(type==8)// 视频动态
        videoNoti(
            obj.desc.user_profile.info.face,
            "https://www.bilibili.com/video/"+obj.desc.bvid,
            obj.desc.user_profile.info.uname,
            dynamic.title,
            dynamic.first_frame,
            settings.sound
            );
    if(type==64)// 专栏动态
        columnNoti(
            obj.desc.user_profile.info.face,
            "https://www.bilibili.com/read/cv"+dynamic.id,
            obj.desc.user_profile.info.uname,
            dynamic.title,
            dynamic.origin_image_urls[0],
            settings.sound
            );

    if(type>64)// 其他类型
        textNoti(
            null,
            "https://t.bilibili.com/"+obj.desc.dynamic_id_str,
            owner,
            "请点击通知跳转到动态页面",
            settings.sound
            );
}


chrome.alarms.onAlarm.addListener(function(alarm){

    if(init_status.ava!=2)
    {
        init_status.ava=0;
        console.log("AvA信息已同步");
        $.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
            host_uid:672346917,
            offset_dynamic_id:0
        },
        function(data,status){
            obj=data.data.cards[0];
            dynamic=JSON.parse(obj.card);
            dynamic_id.ava=obj.desc.dynamic_id_str;
            if(status=='success') init_status.ava++;
        });  

        $.get("https://api.live.bilibili.com/room/v1/Room/get_info",{id:22625025},
        function(data,status){
            live_topic.ava=data.data.title;
            last_live_status.ava=data.data.live_status;
            if(status=='success') init_status.ava++;
        });
    }

    if(init_status.bella!=2)
    {
        init_status.bella=0;
        console.log("Bella信息已同步");
        $.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
            host_uid:672353429,
            offset_dynamic_id:0
        },
        function(data,status){
            obj=data.data.cards[0];
            dynamic=JSON.parse(obj.card);
            dynamic_id.bella=obj.desc.dynamic_id_str;
            if(status=='success') init_status.bella++;
        });    

        $.get("https://api.live.bilibili.com/room/v1/Room/get_info",{id:22632424},
        function(data,status){
            live_topic.bella=data.data.title;
            last_live_status.bella=data.data.live_status;
            if(status=='success') init_status.bella++;
        });
    }

    if(init_status.carol!=2)
    {
        init_status.carol=0;
        console.log("Carol信息已同步");
        $.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
            host_uid:351609538,
            offset_dynamic_id:0
        },
        function(data,status){
            obj=data.data.cards[0];
            dynamic=JSON.parse(obj.card);
            dynamic_id.carol=obj.desc.dynamic_id_str;
            if(status=='success') init_status.carol++;
        }); 

        $.get("https://api.live.bilibili.com/room/v1/Room/get_info",{id:22634198},
        function(data,status){
            live_topic.carol=data.data.title;
            last_live_status.carol=data.data.live_status;
            if(status=='success') init_status.carol++;
        });
    }

    if(init_status.diana!=2)
    {
        init_status.diana=0;
        console.log("Diana信息已同步");
        $.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
            host_uid:672328094,
            offset_dynamic_id:0
        },
        function(data,status){
            obj=data.data.cards[0];
            dynamic=JSON.parse(obj.card);
            dynamic_id.diana=obj.desc.dynamic_id_str;
            if(status=='success') init_status.diana++;
        });   

        $.get("https://api.live.bilibili.com/room/v1/Room/get_info",{id:22637261},
        function(data,status){
            live_topic.diana=data.data.title;
            last_live_status.diana=data.data.live_status;
            if(status=='success') init_status.diana++;
        });
    }
    
    if(init_status.eileen!=2)
    {
        init_status.eileen=0;
        console.log("Eileen信息已同步");
        $.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
            host_uid:672342685,
            offset_dynamic_id:0
        },
        function(data,status){
            obj=data.data.cards[0];
            dynamic=JSON.parse(obj.card);
            dynamic_id.eileen=obj.desc.dynamic_id_str;
            if(status=='success') init_status.eileen++;
        });   

        $.get("https://api.live.bilibili.com/room/v1/Room/get_info",{id:22625027},
        function(data,status){
            live_topic.eileen=data.data.title;
            last_live_status.eileen=data.data.live_status;
            if(status=='success') init_status.eileen++;
        });
    }

    if(init_status.asoul!=2)
    {
        init_status.asoul=0;
        console.log("ASOUL信息已同步");
        $.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
            host_uid:703007996,
            offset_dynamic_id:0
        },
        function(data,status){
            obj=data.data.cards[0];
            dynamic=JSON.parse(obj.card);
            dynamic_id.asoul=obj.desc.dynamic_id_str;
            if(status=='success') init_status.asoul++;
        });  

        $.get("https://api.live.bilibili.com/room/v1/Room/get_info",{id:22632157},
        function(data,status){
            live_topic.asoul=data.data.title;
            last_live_status.asoul=data.data.live_status;
            if(status=='success') init_status.asoul++;
        }); 
    }

    // 向晚
    if(settings.ava==1&&init_status.ava==2){
        console.log(Date()+"\nAvA请求数据");
        // 个人动态
        $.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
            host_uid:672346917,
            offset_dynamic_id:0
        },
        function(data,status){
            console.log("dynamic "+status);
            obj=data.data.cards[0];
            dynamic=JSON.parse(obj.card);
            if(dynamic_id.ava<obj.desc.dynamic_id_str)
            {
                dynamic_id.ava=obj.desc.dynamic_id_str;
                show_notification(obj,dynamic,"向晚");
            }
        });    
   
        // 直播间信息
        $.get("https://api.live.bilibili.com/room/v1/Room/get_info",{id:22625025},
        function(data,status){
            console.log("live "+status);
            if(live_topic.ava!=data.data.title)//更新标题
            {
                live_topic.ava=data.data.title;
                liveNoti(
                    1,
                    ".\\images\\240px\\Q_Ava.png",
                    "https://live.bilibili.com/"+data.data.room_id,
                    "向晚",
                    data.data.title,
                    data.data.user_cover
                );                
            }
            if(last_live_status.ava!=1 && data.data.live_status==1)//开播
            {
                last_live_status.ava=data.data.live_status;
                liveNoti(
                    2,
                    ".\\images\\240px\\Q_Ava.png",
                    "https://live.bilibili.com/"+data.data.room_id,
                    "向晚",
                    data.data.title,
                    data.data.user_cover
                );  
            }
            if(last_live_status.ava==1 && data.data.live_status!=1)//下播
                last_live_status.ava=data.data.live_status;
        });
    }

    // 贝拉
    if(settings.bella==1&&init_status.bella==2){
        console.log(Date()+"\nBella请求数据");
        //个人动态
        $.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
            host_uid:672353429,
            offset_dynamic_id:0
        },
        function(data,status){
            console.log("dynamic "+status);
            obj=data.data.cards[0];
            dynamic=JSON.parse(obj.card);
            if(dynamic_id.bella<obj.desc.dynamic_id_str)
            {
                dynamic_id.bella=obj.desc.dynamic_id_str;
                show_notification(obj,dynamic,"贝拉");
            }
        });          
        
        // 直播间信息
        $.get("https://api.live.bilibili.com/room/v1/Room/get_info",{id:22632424},
        function(data,status){
            console.log("live "+status);
            if(live_topic.bella!=data.data.title)//更新标题
            {
                live_topic.bella=data.data.title;
                liveNoti(
                    1,
                    ".\\images\\240px\\Q_Bella.png",
                    "https://live.bilibili.com/"+data.data.room_id,
                    "贝拉",
                    data.data.title,
                    data.data.user_cover
                );                
            }
            if(last_live_status.bella!=1 && data.data.live_status==1)//开播
            {
                last_live_status.bella=data.data.live_status;
                liveNoti(
                    2,
                    ".\\images\\240px\\Q_Bella.png",
                    "https://live.bilibili.com/"+data.data.room_id,
                    "贝拉",
                    data.data.title,
                    data.data.user_cover
                );  
            }
            if(last_live_status.bella==1 && data.data.live_status!=1)//下播
                last_live_status.bella=data.data.live_status;
        });
    }
  
    // 珈乐
    if(settings.carol==1&&init_status.carol==2){
        console.log(Date()+"\nCarol请求数据");
        $.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
            host_uid:351609538,
            offset_dynamic_id:0
        },
        function(data,status){
            console.log("dynamic "+status);
            obj=data.data.cards[0];
            dynamic=JSON.parse(obj.card);
            if(dynamic_id.carol<obj.desc.dynamic_id_str)
            {
                dynamic_id.carol=obj.desc.dynamic_id_str;
                show_notification(obj,dynamic,"珈乐");
            }
        });     
        
        // 直播间信息
        $.get("https://api.live.bilibili.com/room/v1/Room/get_info",{id:22634198},
        function(data,status){
            console.log("live "+status);
            if(live_topic.carol!=data.data.title)//更新标题
            {
                live_topic.carol=data.data.title;
                liveNoti(
                    1,
                    ".\\images\\240px\\Q_Carol.png",
                    "https://live.bilibili.com/"+data.data.room_id,
                    "珈乐",
                    data.data.title,
                    data.data.user_cover
                );                
            }
            if(last_live_status.carol!=1 && data.data.live_status==1)//开播
            {
                last_live_status.carol=data.data.live_status;
                liveNoti(
                    2,
                    ".\\images\\240px\\Q_Carol.png",
                    "https://live.bilibili.com/"+data.data.room_id,
                    "珈乐",
                    data.data.title,
                    data.data.user_cover
                );  
            }
            if(last_live_status.carol==1 && data.data.live_status!=1)//下播
                last_live_status.carol=data.data.live_status;
        });
    }
 
    // 嘉然
    if(settings.diana==1&&init_status.diana==2){
        console.log(Date()+"\nDiana请求数据");
        $.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
            host_uid:672328094,
            offset_dynamic_id:0
        },
        function(data,status){
            console.log("dynamic "+status);
            obj=data.data.cards[0];
            dynamic=JSON.parse(obj.card);
            if(dynamic_id.diana<obj.desc.dynamic_id_str)
            {
                dynamic_id.diana=obj.desc.dynamic_id_str;
                show_notification(obj,dynamic,"嘉然");
            }
        });       
        
        // 直播间信息
        $.get("https://api.live.bilibili.com/room/v1/Room/get_info",{id:22637261},
        function(data,status){
            console.log("live "+status);
            if(live_topic.diana!=data.data.title)//更新标题
            {
                live_topic.diana=data.data.title;
                liveNoti(
                    1,
                    ".\\images\\240px\\Q_Diana.png",
                    "https://live.bilibili.com/"+data.data.room_id,
                    "嘉然",
                    data.data.title,
                    data.data.user_cover
                );                
            }
            if(last_live_status.diana!=1 && data.data.live_status==1)//开播
            {
                last_live_status.diana=data.data.live_status;
                liveNoti(
                    2,
                    ".\\images\\240px\\Q_Diana.png",
                    "https://live.bilibili.com/"+data.data.room_id,
                    "嘉然",
                    data.data.title,
                    data.data.user_cover
                );  
            }
            if(last_live_status.diana==1 && data.data.live_status!=1)//下播
                last_live_status.diana=data.data.live_status;
        });
    }
  
    // 乃琳
    if(settings.eileen==1&&init_status.eileen==2){
        console.log(Date()+"\nEileen请求数据");
        $.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
            host_uid:672342685,
            offset_dynamic_id:0
        },
        function(data,status){
            console.log("dynamic "+status);
            obj=data.data.cards[0];
            dynamic=JSON.parse(obj.card);
            if(dynamic_id.eileen<obj.desc.dynamic_id_str)
            {
                dynamic_id.eileen=obj.desc.dynamic_id_str;
                show_notification(obj,dynamic,"乃琳");
            }
        });     
        
        // 直播间信息
        $.get("https://api.live.bilibili.com/room/v1/Room/get_info",{id:22625027},
        function(data,status){
            console.log("live "+status);
            if(live_topic.eileen!=data.data.title)//更新标题
            {
                live_topic.eileen=data.data.title;
                liveNoti(
                    1,
                    ".\\images\\240px\\Q_Eileen.png",
                    "https://live.bilibili.com/"+data.data.room_id,
                    "乃琳",
                    data.data.title,
                    data.data.user_cover
                );                
            }
            if(last_live_status.eileen!=1 && data.data.live_status==1)//开播
            {
                last_live_status.eileen=data.data.live_status;
                liveNoti(
                    2,
                    ".\\images\\240px\\Q_Eileen.png",
                    "https://live.bilibili.com/"+data.data.room_id,
                    "乃琳",
                    data.data.title,
                    data.data.user_cover
                );  
            }
            if(last_live_status.eileen==1 && data.data.live_status!=1)//下播
                last_live_status.eileen=data.data.live_status;
        });
    }
 
    // 官号
    if(settings.asoul==1&&init_status.asoul==2){
        console.log(Date()+"\nASOUL请求数据");
        $.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{
            host_uid:703007996,
            offset_dynamic_id:0
        },
        function(data,status){
            console.log("dynamic "+status);
            obj=data.data.cards[0];
            dynamic=JSON.parse(obj.card);
            if(dynamic_id.asoul<obj.desc.dynamic_id_str)
            {
                dynamic_id.asoul=obj.desc.dynamic_id_str;
                show_notification(obj,dynamic,"A-SOUL官号");
            }
        });       
        
        // 直播间信息
        $.get("https://api.live.bilibili.com/room/v1/Room/get_info",{id:22632157},
        function(data,status){
            console.log("live "+status);
            if(live_topic.asoul!=data.data.title)//更新标题
            {
                live_topic.asoul=data.data.title;
                liveNoti(
                    1,
                    ".\\images\\240px\\Cao.png",
                    "https://live.bilibili.com/"+data.data.room_id,
                    "官号",
                    data.data.title,
                    data.data.user_cover
                );                
            }
            if(last_live_status.asoul!=1 && data.data.live_status==1)//开播
            {
                last_live_status.asoul=data.data.live_status;
                liveNoti(
                    2,
                    ".\\images\\240px\\Cao.png",
                    "https://live.bilibili.com/"+data.data.room_id,
                    "官号",
                    data.data.title,
                    data.data.user_cover
                );  
            }
            if(last_live_status.asoul==1 && data.data.live_status!=1)//下播
                last_live_status.asoul=data.data.live_status;
        });
    }

});


