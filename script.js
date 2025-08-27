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


    
    // copy increase
    if(event.target.id === 'copy-btn' || event.target.parentNode.id === 'copy-btn'){
        // alert('The number is copy')
        // console.log();

        let copyNumber = event.target.parentNode.parentNode.children[2].innerText
        navigator.clipboard.writeText(copyNumber)
        let copy = document.getElementsByClassName('copy-inner');
        for(let i of copy){
            i.innerText = Number(i.innerText) + 1;
        }
    }    

    

});
