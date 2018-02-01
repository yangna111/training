const section = t.$('#section')[0];
const head = t.$('#head')[0];
let headH = head.scrollHeight;
const fullTipBox = t.$('.full-tip-box')[0];
styleV();
window.onresize = styleV;

function styleV(){
    const iH = window.innerHeight;
    section.style.height = iH-headH+'px';
}

//提示框

function fullK(title){//title=弹框的提示内容
    fullTipBox.innerHTML = title;
    t.move({  //运动的初始值
        obj:fullTipBox,  // 谁运动
        attrs:{  //运动的方向和运动起始值
            top:0
        },
        d:500, //运动时间
        cb:function(){  //回调函数 运动之后执行的效果
            setTimeout(function(){
                t.move({
                    obj:fullTipBox,  
                    attrs:{
                        top:-40
                    },
                    d:400
                })
            },1000)
        }


    })
}
