
let textInput = document.getElementById('textInput');
const addTask = document.getElementById('addTask');
const showTask = document.getElementById('showTask');




addTask.addEventListener('click', () => {

  if (!textInput.value.trim()) {
   alert(' Please enter your task ')
   return; 
  }

  
  const li = document.createElement('li');
  const span = document.createElement("span");
  span.textContent = textInput.value;
  li.classList.add('liElement');
  span.classList.add('hoverEffect')

  

 
  
    span.addEventListener("click",function(){
      span.classList.toggle("liToggle")
    })
 


  const removeBtn = document.createElement("button")
  removeBtn.textContent = "Remove";
 
  removeBtn.classList.add('removeBtnDesign');
  removeBtn.addEventListener('click', () => {
  showTask.removeChild(li);
  });
  


  
  li.append(span)
  li.append(removeBtn);
  showTask.append(li);
  textInput.value = '';
});

