function renderTree(pid){
    num ++;
   // let pData = data[pid]; //父级对象
    let html = '';
    html += `<ul style="padding-left:${num*5}px;display:block">`;
    let arr = t.getChilds(pid);
    arr.forEach(e=>{
        let arr = t.getChilds(e.id);
        html += `<li>
            <div class="tree-title close">
                <span data-index="${e.id}" class="${arr.length?'open':''}">
                    <i></i>
                    ${e.title}
                </span>
            </div>
            ${renderTree(e.id)}
        </li>`;
    });
    html += '</ul>';
    return html;
}
treeMenu.innerHTML = renderTree(-1);
addEvent()

function addEvent(){
    let treeTitle= Array.from(t.$('.tree-title'));

    treeTitle.forEach(e=>{
            e.onclick = function(){                    
                const next = e.nextElementSibling; //ul  
                        
                if(next && next.children.length){
                if(next.style.display == 'block'){
                        next.style.display = 'none';
                        e.children[0].className = 'tree-ico';
                       
                    }else{
                        next.style.display = 'block';
                        e.children[0].className = 'open';
                      
                    }
                }            
            }                
        })
    
    
    
}

let spans = Array.from(t.$('.tree-title span'));
spans.forEach(function(e,i){
    e.onclick = function(ev){
        var target = ev.target;
        var fildId= target.dataset.index * 1;//找到当前点击的treetitle的id；
        renderNav(fildId);
        render(fildId);
      
    }
})









