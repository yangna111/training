const folders = t.$('.folders')[0];
const fEmpty = t.$('.f-empty')[0];

render(0);//初始化页面
function render(id){
    folders.innerHTML = '';
    checkall.className = 'checkedAll';
    let childs = t.getChilds(id);
    if(!childs.length){   //判断folders包括他的子级的子级里有没有children;
        fEmpty.style.display = 'block';  // 如果没有fEmpty背景图片就block;
    }else{
        fEmpty.style.display = 'none'; // 如果有fEmpty背景图片就none;
    };
    childs.forEach((e,i)=>{
        const div = t.el('div','file-item',e.id);//创建一个div，className为file-item，自定义为e.id
        const img = t.el('img');  //创建一个img;
        img.src ='img/folder-b.png'; //img的src
        img.ondblclick = function(){
            renderNav(e.id);//点击的时候渲染面包屑的数据
            render(e.id);// 点击的时候找到他的子级 递归
        }
        const span = t.el('span','folder-name');//创建span标签
        span.innerText = e.title;  // span的内容
        const input = t.el('input','editor');  //创建input
        input.type = 'text'; //input的type text
        input.value = e.title;//input的value为data里的title
        const ii = t.el('i');//创建i标签

        ii.onclick = function(){  //点击文件的选框
            ii.classList.toggle('checked');// classList只能和toggle合用，开关的切换
            div.classList.toggle('hov');//   文件的hover 切换

            let divs =Array.from(folders.children);    
            //div的classlist包不包含hov，如果有hover，checkall就被选中，要没有就不选中；
            checkall.className = divs.every(e=>e.classList.contains('hov'))?'checked':'checkedAll';
        }

        div.appendChild(img);
        div.appendChild(span);
        div.appendChild(input);
        div.appendChild(ii);
        folders.appendChild(div);
    })

}

    checkall.onclick = function(){
        let divs = Array.from(folders.children);
        this.classList.toggle('checked');//设置开关的切换
        if(this.classList.contains('checked')){ // 如果checkall的classlist包含checked就进入if判断
            divs.forEach(e=>{
                e.classList.add('hov');  //给每个divs加上hover
                e.children[3].classList.add('checked');//给ii标签加上checked
            });
        }else{//不包含checked
            divs.forEach(e=>{
                e.classList.remove('hov');  //给每个divs移除hover
                e.children[3].classList.remove('checked');//给ii标签移除checked
            })
        }
    }

