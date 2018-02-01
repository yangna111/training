folders.onmousedown = function(ev){
    t.$('.title a')[0].outline = 'none'; //a标签的外边框隐藏
    t.$('.title a')[0].focus(); //一个页面只能有一个聚焦；

    if(ev.target!=this)return;  //排除自己；
    
    let disX = ev.pageX; //鼠标到窗口的x轴距离
    let disY = ev.pageY; // 鼠标到窗口的y轴距离

    let dragBox = t.el('div','kuang')//创建一个div，classname为kuang
    dragBox.style.position = 'absolute';
    dragBox.style.left = disX+'px';  //dragbox的left和top跟鼠标down下去位置是一样的
    dragBox.style.top = disY-headH +'px';  //减去headH的值是为了让鼠标和dragbox的位置是一样的
    folders.appendChild(dragBox);

    folders.onmousemove = function(ev){
        let ml = Math.min(disX,ev.pageX);// 通过Math.min来判断移动的距离是增加还是减少，来确定dragBox移动的方向和盒子的width和height
        let mt = Math.min(disY,ev.pageY);

        dragBox.style.width = Math.abs(ev.pageX-disX)+'px';//取绝对值（负数时可以来移动）当前鼠标移动到位置-之前鼠标down下去的位置，就会dragbox的宽和高；
        dragBox.style.height = Math.abs(ev.pageY-disY)+'px';
        dragBox.style.left =ml+'px'; //dragBox move之后的定位位置
        dragBox.style.top = mt-headH+'px';

        let foldersChild = Array.from(folders.children); 
        foldersChild =foldersChild.filter(e=>e!=dragBox);//排除自己 foldersChild的length是3包含dragbox
        for(let i=0;i<foldersChild.length;i++){    //循环foldersChild
            if(bong(foldersChild[i],dragBox)){     //如果dragBox碰到foldersChild 就给foldersChild[i]加hov，给他里面的children[3]加checked
                foldersChild[i].classList.add('hov');
                foldersChild[i].children[3].classList.add('checked');
            }else{
                foldersChild[i].classList.remove('hov');
                foldersChild[i].children[3].classList.remove('checked');
            }
        }
//通过every来筛选foldersChild的每一个含不含hov，如果都包含hov，就给checkall加classname 为checked
        checkall.className = foldersChild.every(e=>e.classList.contains('hov'))?'checked':'checkAll';
    }

    document.onmouseup = function(){
        dragBox.remove();
        folders.onmousemove = document.onmouseup = null;

    }

    return false;
}