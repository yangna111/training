let rename = t.$('#rename')[0];
remove = t.$('#remove')[0];
del = t.$('#del')[0];
create = t.$('#create')[0];
modalTree = t.$('.modal-tree')[0];
content = t.$('.content',modalTree)[0];
close = t.$('.modal-tree i')[0];
cancel = t.$('.cancel')[0];
getId = -1;
treeMenu = t.$('.tree-menu')[0];



    rename.onclick = function(){ 
        //folders就是页面中的文件夹
        checkFile(function(d,id){  //d 选中的            
            let dChild = d.children;//选中的file-item 的children
            dChild[1].style.display = 'none'; //  span 文件名            
            dChild[2].style.display = 'block';  //input 输入框
            dChild[2].focus();
            dChild[2].onblur = function(){
                let v = this.value.trim();//input 输入框的内容的value；
                //没有重复
                if(v){ //如果有内容，进入判断
                    if(!t.reNameFn(id,v)){  //重命名的内容跟其他的文件内容不一样就是false 进入判断
                        data[id].title = v;   
                    }
                }else{
                    fullK('名字不能重复');
                }
                num = -1;
                treeMenu.innerHTML = renderTree(-1);
                addEvent()  
                render(t.getParent(id).id*1);
            }
        },
        '请选择**一个**重命名文件',  // t1
        '请选择重命名文件'  //t2
        )
    }

  
    del.onclick = function(){
        checkFile(function(f,id){
            let tan = t.$('#tanbox')[0];
            let btns = t.$('.conf-btn a',tan);
            
            tan.style.display = 'block';
            //确定删除
            btns[0].onclick = function(){
                //找到pid为了渲染父级下的子级
                let pid = data[id].pid*1;  

                //删除某个id下的所有子级（包括自己）
                t.getAllchilds(id);//
                render(pid);
                //console.log(num);                
                num = -1;  
                //console.log(num);
                            
                treeMenu.innerHTML = renderTree(-1);
                addEvent()
                tan.style.display = 'none';
            }
            //点击弹框的任何地方除了(‘确定键’）和取消键 弹框就会none
            tan.children[0].onclick = btns[1].onclick = function(){
                tan.style.display = 'none';
            }
            
            
        },'请选择**一个**删除的文件','请选择删除的文件')//t1 和 t2

    }
    
    //新建文件夹
    
    create.onclick = function(){
       // console.log( t.$('span',breadNav)[0]);
        
        let pid = t.$('span',breadNav)[0].dataset.index * 1;
        //创建一条数据
        let id = t.create(pid);  // 新建文件的pid
        if(t.reNameFn(id,'新建文件夹')){
            fullK('请修改新建文件夹这个名字!');
            delete data[id];
        }else{
            render(pid);
            num = -1;
            treeMenu.innerHTML = renderTree(-1);
            addEvent()
        }
    }
    
    
    //移动到
    remove.onclick = function(){
        let foldersChilds = Array.from(folders.children);
        // 如果有一个file-item 有hov 返回布尔值是ture  进入if
        if(foldersChilds.some(e=>e.classList.contains('hov'))){
            modalTree.style.display = 'block';
            num = -1;
            content.innerHTML = renderTree(-1);
            addEvent()
        }else{
            fullK('请选择要移动的文件夹');
        }
    }
    
    content.onclick = function(ev){  //content 移动到 弹框的主体内容，通过事件委托来点击所有的span；
        if(ev.target.tagName === 'SPAN'){ //点击的标签为span的进入if判断
             
            let id = ev.target.dataset.index * 1;  //要移动到的id      
          // console.log(id);           
            getId = id;  //要移动到的span 的id  ???
           // console.log( getId);           
            let trees = Array.from(t.$('.tree-title',content));  //数组 tree-title;                
            trees.forEach(e=>e.style.background = '');  //大清洗
            ev.target.parentNode.style.background = '#ccc'; // 给当前的tree-title加上背景颜色
        }
    }
    /*
        有了移动的pid,把所有选中的pid，换成想要移动的pid就可以了
        
    */
 
    //移动到弹框的确定按钮
    t.$('.ok')[0].onclick = function(){
        //getId:pid
        let foldersChilds = Array.from(folders.children);
        //过滤出含有hov的foldersChilds
        let f = foldersChilds.filter(e=>e.classList.contains('hov'))
        console.log(f);
        
        f = f.map(e=>e.dataset.index*1); //要移动的文件的id
        console.log(f);
        //changePid?
        f.forEach(e=>t.changePid(e,getId));  //要移动的文件的id
        console.log(f); 

        modalTree.style.display = 'none';
        num = -1;
        render(getId);
        treeMenu.innerHTML = renderTree(num);
        addEvent()
        renderNav(getId);
    }
    
    cancel.onclick  = close.onclick =function(){
        modalTree.style.display = 'none';
    }
    
    function checkFile(cb,t1,t2){
        let foldersChilds = Array.from(folders.children);
        //some返回值是布尔值  如果是true就进入if判断，要不就进else判断 
        if(foldersChilds.some(e=>e.classList.contains('hov'))){ 
            // f 是file-item;是一个数组，filter的返回值数组
            let f = foldersChilds.filter(e=>e.classList.contains('hov'));
           // console.log(f);
            
            if(f.length>1){  // 如果选中的file-item的length>1就弹t1的内容
                fullK(t1);
            }else{  //file-item的length<1 就执行cb这个函数 
                let d = f[0];    //因为是数组所以要加下标；
                let id = d.dataset.index*1;  //获取当前的file-item的id              
                cb(d,id)
            }
        }else{
            fullK(t2);  //如果是true就进入if判断，要不就进else判断  弹出t2
        }


}


