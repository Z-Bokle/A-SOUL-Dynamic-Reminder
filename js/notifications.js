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
        body:"动态小助手开始运行",
    });
    notification.onclick=function(){
        notification.close();
    }
}

//文字动态
function textNoti(profile,target,owner,text)//头像 点击跳转url 动态拥有者 动态文本
{
    console.log(owner);
    var notification=new Notification(owner+"发布了新的文字动态",{
        body:text,
        icon:profile,
    });
    notification.onclick=function(){
        window.open(target);
        notification.close();
    }
}

function pictureNoti(profile,target,owner,text,pic)//头像 点击跳转url 动态拥有者 动态文本 图片url
{
    console.log(owner);
    var notification=new Notification(owner+"发布了新的图片动态",{
        body:text,
        icon:profile,
        image:pic
    });
    notification.onclick=function(){
        window.open(target);
        notification.close();
    }
}

function videoNoti(profile,target,owner,text,pic)//头像 点击跳转url 动态拥有者 动态文本 图片url
{
    console.log(owner);
    var notification=new Notification(owner+"发布了新的视频动态",{
        body:text,
        icon:profile,
        image:pic
    });
    notification.onclick=function(){
        window.open(target);
        notification.close();
    }
}

function forwardNoti(profile,target,owner,text)
{
    console.log(owner);
    var notification=new Notification(owner+"转发了动态",{
        body:text,
        icon:profile,
    });
    notification.onclick=function(){
        window.open(target);
        notification.close();
    }
}

function columnNoti(profile,target,owner,text,pic)
{
    console.log(owner);
    var notification=new Notification(owner+"发布了专栏",{
        body:text,
        icon:profile,
        image:pic
    });
    notification.onclick=function(){
        window.open(target);
        notification.close();
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