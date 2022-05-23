var list = document.querySelector('#Todo_list');
var add = document.querySelector('#Add_button');
var text =document.querySelector('#list');

document.addEventListener('keypress', (e)=>{
    if (e.key === 'Enter') {
        // code for enter
    console.log('Enter key pressed');
    add.click();
    }
});

add.addEventListener('click', function(){
   var new_element = text.value;
   var item = document.createElement('li');
   var delete_button = document.createElement('button');
   delete_button.addEventListener('click', function(){
       item.remove();
       delete_button.remove();
   })
   delete_button.innerHTML = 'Remove';
   item.innerHTML = new_element;
   item.appendChild(delete_button);
   list.appendChild(item);
   text.value = '';
})
