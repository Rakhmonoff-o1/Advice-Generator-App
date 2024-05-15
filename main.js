const cardBtn = document.querySelector('.card-btn');
const cardId = document.querySelector('.card_id');
const cardText = document.querySelector('.card_text');

const getAdvice = async () => {
    try {
        const result = await axios.get('https://api.adviceslip.com/advice');
        cardText.innerText = result.data.slip.advice;
        cardId.innerText = result.data.slip.id;
    } catch (error) {
        console.log('ERROR', error);
    }
}

cardBtn.addEventListener('click',  getAdvice);