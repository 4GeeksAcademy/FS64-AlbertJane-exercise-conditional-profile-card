const SLOT_ONE = document.querySelector("#slot1");
const SLOT_TWO = document.querySelector("#slot2");
const SLOT_THREE = document.querySelector("#slot3");

const constellations = {
    0:{title:"Aries", img:"img_constellations/aries.jpg"},
    1:{title:"Cancer", img:"img_constellations/cancer.jpg"},
    2:{title:"Aquarius", img:"img_constellations/aquarius.jpg"}
    
};



const clickOnRoll = () => {
    
      
    const pickedConstellations = getConstellations();    
    showRandomAnimation();
    printConstellation(pickedConstellations);
    
    
    };

    const getConstellations = () => {

        const randomNumbers = getThreeRandomNumbers();
        console.log(randomNumbers);
        return [constellations[randomNumbers[0]],constellations[randomNumbers[1]],constellations[randomNumbers[2]]];
        
    };

    const showRandomAnimation = () => {
        



    };

    const printConstellation = (constellationsToPrint) => {
        console.log(constellationsToPrint);
    };

    const getThreeRandomNumbers = () => {
        const number1 = Math.floor(Math.random() * 3);
        const number2 = Math.floor(Math.random() * 3);
        const number3 = Math.floor(Math.random() * 3);
        if(number1 !== number2 && number1 !== number3 && number2 !== number3){ 
            return [number1,number2,number3];
        }
        return getConstellations();
    };

    const link= `<img class="rounded" src='img_constellations/aquarius.jpg' width="200" height="400" alt="">`;