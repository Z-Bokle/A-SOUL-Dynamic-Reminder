//测试动态
function testNoti()
{
    Notification.requestPermission().then(function(permission) {
        if(permission === 'granted'){
            console.log('用户允许通知');
        }else if(permission === 'denied'){
            console.log('用户拒绝通知');
        }
    });

    var notification=new Notification("动态小助手",{
        body:"动态小助手正在运行",
    });
    notification.onclick=function(){
        notification.close();
    }
}

//文字动态
function textNoti(profile,target,owner,text,sound)//头像 点击跳转url 动态拥有者 动态文本 启用个性语音
{
    console.log(owner);
    var notification=new Notification(owner+"发布了新的文字动态",{
        body:text,
        icon:profile,
        silent:sound
    });
    notification.onclick=function(){
        window.open(target);
        notification.close();
    }
    notification.onshow=function(){
        var td=new Date();
        var audio = new Audio('./audio/' + name_2_letter[owner] + td.getTime()%2 + '.wav');
        if(sound)
        audio.play();
    }
}

function pictureNoti(profile,target,owner,text,pic,sound)//头像 点击跳转url 动态拥有者 动态文本 图片url 启用个性语音
{
    console.log(owner);
    var notification=new Notification(owner+"发布了新的图片动态",{
        body:text,
        icon:profile,
        image:pic,
        silent:sound
    });
    notification.onclick=function(){
        window.open(target);
        notification.close();
    }
    notification.onshow=function(){
        var td=new Date();
        var audio = new Audio('./audio/' + name_2_letter[owner] + td.getTime()%2 + '.wav');
        if(sound)
        audio.play();
    }
}

function videoNoti(profile,target,owner,text,pic,sound)//头像 点击跳转url 动态拥有者 动态文本 图片url 启用个性语音
{
    console.log(owner);
    var notification=new Notification(owner+"发布了新的视频动态",{
        body:text,
        icon:profile,
        image:pic,
        silent:sound
    });
    notification.onclick=function(){
        window.open(target);
        notification.close();
    }
    notification.onshow=function(){
        var td=new Date();
        var audio = new Audio('./audio/' + name_2_letter[owner] + td.getTime()%2 + '.wav');
        if(sound)
        audio.play();
    }
}

function forwardNoti(profile,target,owner,text,sound)
{
    console.log(owner);
    var notification=new Notification(owner+"转发了动态",{
        body:text,
        icon:profile,
        silent:sound
    });
    notification.onclick=function(){
        window.open(target);
        notification.close();
    }
    notification.onshow=function(){
        var td=new Date();
        var audio = new Audio('./audio/' + name_2_letter[owner] + td.getTime()%2 + '.wav');
        if(sound)
        audio.play();
    }
}

function columnNoti(profile,target,owner,text,pic,sound)
{
    console.log(owner);
    var notification=new Notification(owner+"发布了专栏",{
        body:text,
        icon:profile,
        image:pic,
        silent:sound
    });
    notification.onclick=function(){
        window.open(target);
        notification.close();
    }
    notification.onshow=function(){
        var td=new Date();
        var audio = new Audio('./audio/' + name_2_letter[owner] + td.getTime()%2 + '.wav');
        if(sound)
        audio.play();
    }
}

function liveNoti(type,profile,target,owner,topic,pic)
{
    console.log(owner);
    if(type==1)//标题修改
    {
        var notification=new Notification(owner+"直播间标题修改",{
            body:"直播间标题修改为 "+topic,
            icon:profile,
            image:pic
        });
        notification.onclick=function(){
            window.open(target);
            notification.close();
        }
    }
    if(type==2)//开播提醒
    {
        var notification=new Notification(owner+"开始直播",{
            body:topic,
            icon:profile,
            image:pic
        });
        notification.onclick=function(){
            window.open(target);
            notification.close();
        }
    }
}