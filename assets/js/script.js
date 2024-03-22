const initApp = () => {
     const accordionBtns = Array.from(document.querySelectorAll('.accordion button'));
     const answers = Array.from(document.querySelectorAll('.accordion .answer'));


     const hideAnswers = () => {
          answers.forEach(answer => {
               if(!answer.classList.contains('hide')){
                    const buttonIcon = answer.previousElementSibling.querySelector('img');
                    buttonIcon.setAttribute('src', './assets/images/icon-plus.svg')
                    answer.classList.add('hide')
               }
          })
     }
     
     const showAnswer = (e) => {
          const answer = e.currentTarget.parentElement.nextElementSibling;
          const buttonIcon = e.currentTarget.querySelector('img');
          
          const isHidden = answer.classList.contains('hide');
        
          hideAnswers();
          
          if (isHidden) {
            answer.classList.remove('hide');
            buttonIcon.setAttribute('src', './assets/images/icon-minus.svg');
          } else {
            buttonIcon.setAttribute('src', './assets/images/icon-plus.svg');
          }
        };

     for (const accordionBtn of accordionBtns){
          accordionBtn.addEventListener('click',  showAnswer)
     }

}

document.addEventListener('DOMContentLoaded', initApp);

