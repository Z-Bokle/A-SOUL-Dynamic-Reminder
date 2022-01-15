const url=new Map([
    ['ava',"/images/240px/Q_Ava.png"],
    ['bella',"/images/240px/Q_Bella.png"],
    ['carol',"/images/240px/Q_Carol.png"],
    ['diana',"/images/240px/Q_Diana.png"],
    ['eileen',"/images/240px/Q_Eileen.png"],
    ['asoul',"/images/240px/Cao.png"]
]);

const names=new Map([
   ['ava','向晚'],
   ['bella','贝拉'],
   ['carol','珈乐'],
   ['diana','嘉然'],
   ['eileen','乃琳'],
   ['asoul','A-SOUL_Official'] 
]);

$(document).ready(function(){
    $("#noti").click(function(){
        textNoti('ava',"晚上好兄弟们66666666666666666666666666666666666666");
    });
});

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

    var notification=new Notification("通知标题",{
        body:"通知内容",
        icon:url.get('asoul'),
        image:"/images/Diana.png"
    })
}

//文字动态
function textNoti(target,owner,text)//点击跳转url 动态拥有者 动态文本
{
    console.log(names.get(owner));
    var notification=new Notification(names.get(owner)+"发布了新的文字动态",{
        body:text,
        icon:url.get(owner),
    })
}

function pictureNoti(target,owner,text,pic)//点击跳转url 动态拥有者 动态文本 图片url
{
    console.log(names.get(owner));
    var notifiction=new Notification(names.get(owner)+"发布了新的图片动态",{
        body:text,
        icon:url.get(owner),
        image:pic
    })
}

function videoNoti(target,owner,text,pic)//点击跳转url 动态拥有者 动态文本 图片url
{
    console.log(names.get(owner));
    var notifiction=new Notification(names.get(owner)+"发布了新的视频动态",{
        body:text,
        icon:url.get(owner),
        image:pic
    })
}

function forwardNoti(target,owner,text)
{
    console.log(names.get(owner));
    var notification=new Notification(names.get(owner)+"转发了动态",{
        body:text,
        icon:url.get(owner),
    })
}