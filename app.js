


let button = document.getElementById('add-button');
button.addEventListener('click', function onclick(){
  let input = document.getElementById('input-item').value;

  if (input === ""){
    alert('Input Box Should Not be Empty!!')
  }
  else{

    let ol = document.getElementById('ordered-list');
    let li = document.createElement('li');
    li.className ="list-items";
    ol.appendChild(li);
    let text = document.createTextNode(input);
    li.appendChild(text);

    let btn = document.createElement('button');
    btn.innerHTML='Clear';
    btn.className ='delete-item'
    btn.style.backgroundColor ='red';
    btn.style.fontWeight ='bold'
    btn.style.color ='orange'
    btn.style.border ='none'
    btn.style.cursor ='pointer'
    btn.style.borderRadius ='3px';
    btn.style.width ='4rem'
    btn.style.float ='right'
    li.appendChild(btn);

    // to target single element and remove
    document.body.addEventListener('click', function(e){
      if(e.target.parentElement.classList.contains('list-items')){
        e.target.className==="delete-item"
        e.target.parentElement.remove();
      }
    })

    // to remove all list at once

    clear.addEventListener('click', function(){
      let a = document.querySelectorAll('.list-items');
      for (let i = 0; i < a.length; i++ ){
        a[i].remove();
      }
    })


  }

})