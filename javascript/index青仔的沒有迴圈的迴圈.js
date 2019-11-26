(function(){
  let inputX = 9
  let inputY = 9
  let tempValue = []
  let h1 = document.querySelector('h1')
  let table = document.querySelector('table')
    
  let genTag = function(tagName,value){           
    let tag = document.createElement(tagName)
    if(value) tag.innerText = value
    return tag
  }  

  let genTr = function(){
      let tr = genTag('tr')
      tempValue.forEach(temp => {
        tr.appendChild(temp)  
      })      
      table.appendChild(tr)
      tempValue.length = 0
  }
  
  let computed = function(x=inputX,y=inputY,maxX=inputX,maxY=inputY) {
    let a = maxX - x
    let b = maxY - y
    
    // 內容使用td
    if(a*b !== 0 ) tempValue.push(genTag('td',a*b))
    else{
      // th部分 都是0的時候顯示X
      let val = a===0 ? b===0 ? 'X' : b : a
      tempValue.push(genTag('th',val))
    }
    
    if(x>0) computed(x-1,y)
    else if(y>=0){
      genTr()
      computed(maxX,y-1)      
    }
  }  
  
  h1.innerText = `${inputX}X${inputY}乘法表`
  computed()
  
})()