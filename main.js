let likes=document.querySelectorAll('.fa')
let bplus=document.querySelectorAll('.plus-btn')
let q=document.querySelectorAll('.Quant')
let bmoin=document.querySelectorAll('.minus-btn')
let priceart=document.querySelectorAll('.price')
let fp=document.querySelector('#finalPrice')
let del=document.querySelectorAll('.delete')



// like button
for (let i=0;i<likes.length;i++){
    likes[i].style.color ='rgb(226, 192, 209)';
    likes[i].addEventListener("click",function(){
        if(likes[i].style.color === 'rgb(226, 192, 209)' ){
            likes[i].style.color = 'red'   
        }else{likes[i].style.color ='rgb(226, 192, 209)'}   
    })
}
// + - button
for (let i=0;i<bplus.length;i++){
    bplus[i].addEventListener('click',function(){
        q[i].value=Number(q[i].value)+1 
        total()  
    }) 
}
for (let i=0;i<bmoin.length;i++){
    bmoin[i].addEventListener('click',function(){
        if( Number(q[i].value>1) ){
        q[i].value=Number(q[i].value)-1}
        total()
    })
}

for (let i=0;i<del.length;i++){
    del[i].addEventListener('click',function(){
        
        del[i].parentNode.remove()
        total()
    })

}


function total(){
    let priceart=document.querySelectorAll('.price')
    let q=document.querySelectorAll('.Quant')
    
    let sumu=0;
    for(let i=0;i<priceart.length;i++){
        sumu=priceart[i].innerHTML*q[i].value+sumu
    }  
    document.querySelector('#finalPrice').value=sumu  
}









