$(document).ready(function(){

    default_data={'ava':1,'bella':1,'carol':1,'diana':1,'eileen':1,'asoul':1};
    // 读取设置
        chrome.storage.sync.get({'data':default_data},function(result){
            if($("input[id='avaCB']").prop("checked")!=result['data'].ava) $("input[id='avaCB']").click();
            if($("input[id='bellaCB']").prop("checked")!=result['data'].bella) $("input[id='bellaCB']").click();
            if($("input[id='carolCB']").prop("checked")!=result['data'].carol) $("input[id='carolCB']").click();
            if($("input[id='dianaCB']").prop("checked")!=result['data'].diana) $("input[id='dianaCB']").click();
            if($("input[id='eileenCB']").prop("checked")!=result['data'].eileen) $("input[id='eileenCB']").click();
            if($("input[id='asoulCB']").prop("checked")!=result['data'].asoul) $("input[id='asoulCB']").click();
        });

    // 全选
    $("#selectall").click(function(){    
        $("input[type='checkbox']").each(function(){
            var state=$(this).prop("checked");
            if(!state)
            {
                $(this).click();
            }
        });
    });

    // 保存设置
    $("#save").click(function(){ 
        var obj={'ava':0,'bella':0,'carol':0,'diana':0,'eileen':0,'asoul':0};
        $("input[type='checkbox']").each(function(){
            var name=$(this).val();
            var state=$(this).prop("checked");
            if(state) obj[name]=1; 
        });
        console.log(obj);
        chrome.storage.sync.set({'data':obj},function(){console.log("保存成功");});
    })



  });