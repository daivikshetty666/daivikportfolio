console.log('This is for client side');
if(getTitle == "Business Contact List"){
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("This record will be deleted. Do you want to continue?")) 
            {
                event.preventDefault();
            }
        });
    }
}
