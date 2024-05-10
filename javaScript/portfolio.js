function portfolio() {
    var buttons = document.querySelectorAll('.btn');
    var storeImages = document.querySelectorAll('.store-items');
    
    buttons.forEach((button)=>{
        button.addEventListener('click',(e) => {
            e.preventDefault();
            var filter = e.target.dataset.filter;

            storeImages.forEach((item) => {
                if(filter == 'all')
                {
                    item.style.display ='block';
                }
                else
                {
                    if(item.classList.contains(filter)){
                        item.style.display = 'block';
                    }
                    else
                    {
                        item.style.display = 'none';
                    }
                }
            })

           
        })
    })
}
portfolio();