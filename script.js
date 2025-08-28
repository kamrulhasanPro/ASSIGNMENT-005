// id make reusable function
function makeId(id){
    return document.getElementById(id)
}

// by class name reusable function
function makeClassName(className){
    return document.getElementsByClassName(className)
}


// add delegation click
makeId('products-section').addEventListener('click', (event)=>{

    // heart increase
    if(event.target.id === 'heart-icon'){

        let hearts = makeClassName('heart-btn');
        for(let heart of hearts){
            heart.innerText = Number(heart.innerText) + 1;
        }
    }


    
    // copy count and alert and copy number in clipboard
    const copyBtn = event.target.closest('#copy-btn')
    if(copyBtn){
        
        // alert
        alert('🧾The number has been copied.')
        
        // copy number
            const copyCard = copyBtn.closest('.card')        
            const copyNumber = copyCard.children[2].innerText;
            navigator.clipboard.writeText(copyNumber)

        
        // how may copy count 
        let copies = makeClassName('copy-inner');
        for(let copy of copies){
            copy.innerText = Number(copy.innerText) + 1;
        }
    }    
    
    

    // call button click coin reduce and history add 
    const callBtn = event.target.closest('#call-btn')
    if(callBtn){
        
        // coin 
        let coins = makeClassName('coin')
        for(let coin of coins){
            //validation check
            if(Number(coin.innerText) < 20){
                    alert('❌ Not allowed, because your coin not enough')
                    return
                }
            
            coin.innerText = Number(coin.innerText) - 20;
        }

        // call alert
        let card = callBtn.closest('.card')
        let title = card.children[0].innerText;
        let number = card.children[2].innerText;
        
        if(callBtn){
            alert(`📞 Calling ${title} at ${number}`)
        }
        
        // call history 
        let currentTime = new Date().toLocaleTimeString()
        let listHistory = document.createElement('li')
        listHistory.innerHTML = `
        <div class="flex items-center justify-between text-lg text-black p-4 rounded-lg bg-[#FAFAFA] mb-2">
                        <div>
                            <h4 class="font-bangla">${title}</h4>
                            <p class="text-[#5C5C5C]">${number}</p>
                        </div>
                        <div>
                            ${currentTime}
                        </div>
        </div>
        `

        // append list history in parent 
        makeId('history-container').appendChild(listHistory)

    }

});


// click clear button then clean call history
makeId('clear-btn').addEventListener('click', function(){
    
    // call history parent 
    const parent = makeId('history-container');
    parent.innerHTML = null;

})