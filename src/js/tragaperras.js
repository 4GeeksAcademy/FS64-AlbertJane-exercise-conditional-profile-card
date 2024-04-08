const OPTIONS = ['🍒','🍉','🎰','♦️','💎','💸'];

let state = ['','',''];

const spin = () => {

    const firstSlot = getFirstSlot();
    const secondSlot = getSecondSlot();
    const thirdSlot = getThirdSlot();

    setState(firstSlot,secondSlot,thirdSlot);
    printSlots();
    checkForWinner();

};

const getFirstSlot = () => {

    const randomIndex = getRandomIndex();
    return OPTIONS[randomIndex];

};

const getSecondSlot = () => {

    const randomIndex = getRandomIndex();
    return OPTIONS[randomIndex];
    
};

const getThirdSlot = () => {

    const randomIndex = getRandomIndex();
    return OPTIONS[randomIndex];
    
};

const getRandomIndex = () => {

    return Math.floor(Math.random() * OPTIONS.length);
};

const setState = (firstSlot,secondSlot,thirdSlot) => {

    state[0] = firstSlot;
    state[1] = secondSlot;
    state[2] = thirdSlot;
    
};

const printSlots = () =>{

    document.querySelector('.imgSlot1').innerHTML = state[0];
    document.querySelector('.imgSlot2').innerHTML = state[1];
    document.querySelector('.imgSlot3').innerHTML = state[2];
    
};


const checkForWinner = () => {
    const isPlayerAWinner = state[0] === state[1] && state[1] === state[2];
    if(isPlayerAWinner){
         document.querySelector('#buttonSpin').disabled = true; 
        const timeout = setTimeout(()=>{
            printWinnerMessage();
            document.querySelector('#buttonSpin').disabled = false;
        },1000);
        
    }
};

const printWinnerMessage = () => {

    document.querySelector('#winnerMessage').classList.remove('hidden');

};


const closeBanner = () => {

    document.querySelector("#winnerMessage").classList.add('hidden');
};