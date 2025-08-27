function makeId(id){
    return document.getElementById(id)
}

// heart count
makeId('products-section').addEventListener('click', (event)=>{

    // heart increase
    if(event.target.id === 'heart-icon'){

        let heart = document.getElementsByClassName('heart-btn');
        for(let i of heart){
            i.innerText = Number(i.innerText) + 1;
        }
    }


    
    // copy count and alert and copy number in clipboard
    if(event.target.id === 'copy-btn' || event.target.parentNode.id === 'copy-btn'){

        // alert
        alert('The number is copy')

        // copy number
        if(event.target.id === 'copy-btn'){
            const copyNumber = event.target.parentNode.parentNode.children[2].innerText.trim();
            navigator.clipboard.writeText(copyNumber)
        }else if(event.target.parentNode.id === 'copy-btn'){
            console.log('hello');
            const copyNumber = event.target.parentNode.parentNode.parentNode.children[2].innerText.trim();
            navigator.clipboard.writeText(copyNumber)
        }

        // how may copy count 
        let copy = document.getElementsByClassName('copy-inner');
        for(let i of copy){
            i.innerText = Number(i.innerText) + 1;
        }
    }    

    

});
