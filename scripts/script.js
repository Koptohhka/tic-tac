(() => {
    const ticTacList = document.querySelector('.tic-tac-wrapper__list');
    const ticTacItem = document.querySelectorAll('.tic-tac-wrapper__list-item');

    let flag = true;
    let ticArr = [];
    let tocArr = [];

    let pinTicOrTac = (it) => {        
        if (flag) {
            it.classList.add('tic');
            ticArr.push(it.id);
        } else {
            it.classList.add('tac');
            tocArr.push(it.id);
        }
    }

    let changeFlag = () => {
        flag ? (flag = false) : flag = true;
    }

    let testCheckResult = (arr) => { 
        let count = 0;       
        
        
        for (let l = 0; l < window.combinations.length; l++) {
            for (let i = 0; i < arr.length; i++) {
            
                for (let j = 0; j < arr.length; j++) {
                    if (arr[i] === window.combinations[l][j]) {
                        count++;
                    }
                    if (count === 3) {
                        if (flag) {
                            console.log('toc won!');
                        } else {
                            console.log('tic won');
                        }
                        break;
                    }
                }
    
            }
            count = 0;
        }
    }

    ticTacItem.forEach((it) => {
        let callbackFunc = () => {
            pinTicOrTac(it);
            changeFlag();
            testCheckResult(ticArr);
            testCheckResult(tocArr);
            it.removeEventListener('click', callbackFunc);
        }

        it.addEventListener('click', callbackFunc);
    })
}) ()