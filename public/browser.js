//alert('hi')

document.addEventListener('click',function(e){
    //DELETE FEATURE
    if(e.target.classList.contains('delete-me')) {
        //pop up
        if(confirm('Do you really want to delete this item?')){
            axios.post('/delete-item',{id:e.target.getAttribute("data-id")})
                .then(function(){

                    //when delete complete
                    e.target.parentElement.parentElement.remove();

                })
                .catch(function () {
                    console.log('Please try again later');
                })
        }
    }
    //UPDATE FEATURE
    if(e.target.classList.contains('edit-me')){
        //alert('click');
       let userInput = prompt('Enter your new text', e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
       //console.log(userInput);
        if(userInput){
            axios.post('/update-item',{newTextInput:userInput, id:e.target.getAttribute("data-id")})
                .then(function(){
                    //TODO
                    //when update complete
                    e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;

                })
                .catch(function () {
                    console.log('Please try again later');
                })

        }
    }
});