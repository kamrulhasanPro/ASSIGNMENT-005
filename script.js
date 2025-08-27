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
    
    
    // call button click 
    const callBtn = event.target.id === 'call-btn';
    const callIconParent = event.target.parentNode.id === 'call-btn'; 
    if( callBtn||callIconParent ){
        
        
        // coin 
        let coins = document.getElementsByClassName('coin')
        // console.log(coins);
        for(let coin of coins){
            // console.log(coin.innerText);
            if(Number(coin.innerText) < 20){
                    alert('❌ else not allowed because your coin not enough')
                    return
                }
            
            coin.innerText = Number(coin.innerText) - 20;
        }
        let title = event.target.parentNode.parentNode.parentNode.children[0].innerText;
        
        let number = event.target.parentNode.parentNode.parentNode.children[2];
        if(callIconParent){
            alert(`📞 This title ${title} and this number ${number.innerText}`)
        }
        else if(callBtn){
            title = event.target.parentNode.parentNode.children[0].innerText;
            number = event.target.parentNode.parentNode.children[2].innerText
            
            alert(`📞 This title ${title} and this number ${number}`)
        }
        



    }
});
