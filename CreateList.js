function CreateList() {
	this.container = document.createElement("div");
	this.instruction = document.createElement("div");
	this.initialize.apply(this, arguments);
}
CreateList.prototype = {
	initialize: function(data) {		
		var dl, dt, dd, part;
		var arr=[];
		for (var i=0;i<data.length;i++) {
			dl = document.createElement("dl");
			part = data[i];
			var count=0;
			for(var j=0; j<part.length;j++) {
				if(!part[j].href) {
					dd = document.createElement("dt");
					dd.innerHTML = part[j].title + " (" + (part.length - 1) + ")";
				}
				else {
					dd = document.createElement("dd");
					dd.innerHTML = j + ") <a href=\"" + part[j].href + "\" target=\"_blank\">" + part[j].title + "</a>";
					count++;
				}
				dl.appendChild(dd);
			}
			arr.push(count+1);
			this.container.appendChild(dl);
		}
		this.container.id = "container";
		document.body.appendChild(this.container);
		this.instruction.id = "instruction";
		this.instruction.innerHTML = "原生JavaScript学习, By 夜雨声繁";
		document.body.appendChild(this.instruction)
		dt=document.getElementsByTagName("dt");
		for (var i=0;i<dt.length;i++) {
			dt[i].index=i;
			dt[i].onclick = function(e) {
				dl=document.getElementsByTagName("dl");
				for(var i=0;i<dl.length;i++) {
					dl[i].style.height=32+"px";
					dt[i].className="";
				}
				this.className="current";
				var e=e || e.window;
				var finalHeight=arr[this.index]*32;
				var iSpeed;
				var timer = setInterval(function() {
					iSpeed = (finalHeight - e.target.parentNode.offsetHeight)/10;
					iSpeed=Math.ceil(iSpeed);
					e.target.parentNode.offsetHeight == finalHeight ? clearInterval(timer) : e.target.parentNode.style.height = e.target.parentNode.offsetHeight+ iSpeed+"px";
			}, 30);
			};
		}
	}
};