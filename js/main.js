
window.onload=function(){
	var box=document.getElementById('_box');
	var aLis=box.getElementsByTagName('li');
	var aDiv=box.getElementsByTagName('div');
	for(var j=0;j<aDiv.length;j++){
		aDiv[j].className='no';
	}

	for(var i=0;i<aLis.length;i++){
		aLis[i].onclick=function(event){
			event=event||window.event;
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble=true;
			}
			for(var j=0;j<aDiv.length;j++){
				aDiv[j].className='no';
			}
			var dis=this.getElementsByTagName('div')[0];
			if(dis.className=='bl'){
				return;
			}
			dis.className='bl';	
		};

	}
	document.onclick=function(){
		for(var i=0;i<aDiv.length;i++){
			aDiv[i].className='no';
		}
	};
}