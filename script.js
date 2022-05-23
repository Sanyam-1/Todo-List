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
console.log('Enter key pressed');
    add.click();
add.addEventListener('click', function(){
   var new_element = text.value;
   var item = document.createElement('li');
   item.innerHTML = new_element;
   list.appendChild(item);
   text.value = '';
})
