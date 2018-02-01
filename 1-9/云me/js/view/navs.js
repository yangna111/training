const checkall = t.$('.checkall i')[0];
const  breadNav = t.$('.bread-nav')[0];
let num = -1;  // padding值  

/*
    <a href="javascript">微云</a>
	<span>我的音乐</span>
*/
renderNav(0)
//生成面包屑
    function renderNav(id){
        let parents = t.getParents(id).reverse();  //翻转 获取到父级id的数组
        let html = '';
        parents.forEach((e,i)=>{ //循环数组里的每一个id 如果这个id正好等于数组的最后一个位 就进入if判断
            if(i === parents.length-1){
                html +=`<span data-index="${e.id}">${e.title}</span>`  //把这个id的数据渲染到页面
            }else{
                html += `<a href="javascript:;"data-index="${e.id}">${e.title}</a>` // 如果不是就把数据渲染到a标签；
            }
        })
        breadNav.innerHTML = html;
        breadNav.onclick = function(ev){  //事件源  事件委托 把点击事件绑定在父级身上
            let id = ev.target.dataset.index*1;  //找到当前点击元素绑定的行间属性的id
            renderNav(id);
            render(id);
        }
        
    }


