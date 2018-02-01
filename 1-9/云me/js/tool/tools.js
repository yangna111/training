var Tween = {
	linear: function (t, b, c, d){  //匀速
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){  //加速曲线
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){  //减速曲线
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(t, b, c, d){  //加速减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d){  //加加速曲线
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(t, b, c, d){  //减减速曲线
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	elasticBoth: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c;
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) *
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) *
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 3.70158;  //回缩的距离
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	backBoth: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158;
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
		return c - Tween['bounceOut'](d-t, 0, c, d) + b;
	},
	bounceOut: function(t, b, c, d){
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},
	bounceBoth: function(t, b, c, d){
		if (t < d/2) {
			return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
}

const t = {
	$:function(s,parent = document){  //默认parent为document  s为标签名或者class或者id；
		return parent.querySelectorAll(s);
	},
	el:function(tagName,className='',index = ''){ //创建标签
		let box = document.createElement(tagName);
		box.className = className;
		box.dataset.index = index;//给行间加属性
		return box;
	},
	move:function(data){
		//默认的配置
		  let opt = {
			  obj:null,
			  attrs:{},
			  d:1000,
			  fx:'linear',
			  cb:function(){}
		  }
		  //有配置走配置，没配置走默认
		  Object.assign(opt,data);
		  opt.obj.timerM = null;
		  let newDate = +new Date();
		  let j = {};
	  
		  /*
			  每个属性有自己的一套，起始值和目标点。
		  */
	  
		  for(var attr in opt.attrs){
			  let b;
			  //是透明度就使用parseFloat
			  if(attr === 'opacity'){
				b = parseFloat(getComputedStyle(opt.obj)[attr]);
			  }else{
	  
				b = parseInt(getComputedStyle(opt.obj)[attr]);
			  }
			  // console.log(b);
			  j[attr] = {
				  b: b,
				  c:opt.attrs[attr] - b
			  }
		  }
		  // console.log(j);
		  // return;
		  clearInterval(opt.obj.timerM);
		  opt.obj.timerM = setInterval(function(){
			  let nowDate = +new Date();
			  let t = nowDate - newDate;
			  if(t >= opt.d){
				  t = opt.d;
			  }
			 
			  for(var attr in j){
				  // console.log( j[attr]) 使用每个属性的起始值和目标点
				  let v = Tween[opt.fx](t, j[attr].b,j[attr].c, opt.d);
				  if(attr === 'opacity'){
					  opt.obj.style.opacity = v;
				  }else{
					  opt.obj.style[attr] = v + 'px';
				  }
			  }
	  
			  if(t == opt.d){
				  clearInterval(opt.obj.timerM);
				  opt.cb && opt.cb();
			  }
			  
			},16);
	  },
	  shake:function (json={}){
		  let num = 0;
		  let opt = {
			  callback:function(){},
			  attr:'left',
			  n:10
		  }
		  // 有配置走配置，没配置走默认
		  Object.assign(opt,json);
  
		  
  
		  let arr = [];
		  opt.obj.timer = null;
		  for(var i=opt.n;i>0;i-=2){
			  arr.push(-i,i);
		  }
		  arr.push(0);
		  clearInterval(opt.obj.timer);
		  opt.obj.timer = setInterval(function(){
			  opt.obj.style[opt.attr] = parseInt(getComputedStyle(opt.obj)[opt.attr]) + arr[num] + 'px';
			  num ++;
			  if(num >= arr.length){
				  clearInterval(opt.obj.timer);
				  num = 0;
				  //console.log(callback);
				  opt.callback && opt.callback();//钩子函数
			  }
		  },30);
	  },
	////找出数据里的子级
	 getChilds:function(id){ // 输入一个id  返回值为这个id的子级
        let arr = []; //声明一个空的数组
        for(let attr in data){  //for in 循环这个数组  
            if(data[attr].pid===id){ //判断子级的pid等不等于父级的id
                arr.push(data[attr]) // 如果子级的pid等于父级的id，就把这个这个子级push到空数组里
            }
        }
        return arr; //返回值是新的数组
    }, 

	//// 找到数据里的父级
    
	getParent:function (id){  //  返回值为id父级的pid，通过这个pid可以找到这个id的父级
        let obj = data[id];  //声明一个id是obj
        if(obj){   //如果有这个id 就进if判断 return返回这个id父级的pid
            return data[obj.pid];        
        }
        return null; //如果没有id就返回null
	},

	getAllchilds:function(id){
		delete data[id];
		let c = t.getChilds(id);
		if(c.length){
			c.forEach((e)=>{
				t.getAllchilds(e.id);
			});
		}
	},
 	////找多个父级
 	getParents:function(id){
        let arr = [];
        let box = data[id];//声明一个id为box
        while(box){  //不知道要循环多少次要用while
            arr.push(box);//循环这个id 然后把这个id push到空数组里
            box =t.getParent(box.id); //让这个id始终调用自己循环自身去找自己的父级         
        } 
        return arr;  //返回这个新数组;
    },
	
	//重命名
	reNameFn:function(id,title){
		//data[id].pid  找的是当前id的父级 一个数组
		let arr1 = t.getChilds(data[id].pid);
		//过滤当前id的父级的id 如果不等于传入的id 存到新的数组里
		let arr =arr1.filter(e=>e.id != id);//返回一个过滤之后的新数组
		if(arr.some(e=>e.title == title)){	  //返回一个布尔值	  如果e的title 跟新写入的title一样就进入判断 返回ture.
			return true;
		}else{
			return false;
		}
	},
	
//创建新的文件夹
	create:function(pid,title='新建文件夹'){ //新建文件夹的名字默认为 新建文件夹
		let id = +new Date; 
		data[id]={   //新建文件夹的数据
			id:id,
			pid:pid,
			title:title
		}
		return id;
	},

	//移动到文件
	changePid:function(id,pid){
		data[id].pid = pid; 
	}

}

 //拖拽碰撞
 function bong(a,b){
	/*
		B的四个方向
	*/
	let bl = b.offsetLeft;
	let bt = b.offsetTop;
	let br = bl + b.offsetWidth;
	let bb = bt + b.offsetHeight;


	/*
		A的四个方向
	*/

	let al = a.offsetLeft;
	let at = a.offsetTop;
	let ar = al + a.offsetWidth;
	let ab = at + a.offsetHeight;

	if(br < al || bb < at || bl > ar || bt > ab){
		//没碰到
		return false;
	}else{
	   return true;
	}
}