let html=document.querySelector('#html')
let style=document.querySelector('#style')
let n=0
let text=`/*你好，我是一名前端新人
接下来我要加样式了
我要加的样式是div*/
#div1{
  border:1px solid red;
  width:200px;
  height:200px;
}
/*接下来把div变成一个太极图
注意看好了
首先，把div变成一个园*/
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*现在来画太极中的阴阳*/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*阳中有阴*/
#div1::before{
  width:100px;
  height:100px;
  top:0;
  left:50px;
  border-radius:50%;
  background: #fff;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
  }
/*阴中有阳*/
#div1::after{
  width:100px;
  height:100px;
  bottom:0;
  left:50px;
  border-radius:50%;
  background:#000;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
`
text1=''
html.innerHTML=text.substring(0,0)
let step=()=>{
  setTimeout(()=>{
    if(text[n]==='\n'){
      text1+='<br>'
    }else if(text[n]===' '){
      text1+='&nbsp'
    }else{
      text1+=text[n]
    }
    html.innerHTML=text1
    style.innerHTML=text.substring(0,n)
    window.scrollTo(0,9999)
    html.scrollTo(0,9999)
    n+=1
    if(n<text.length){
      step()
    }
  },0)
}
step()