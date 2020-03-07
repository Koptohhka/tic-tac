(() => {
    const ticTacList = document.querySelector('.tic-tac-wrapper__list');
    const ticTacItem = document.querySelectorAll('.tic-tac-wrapper__list-item');

    let flag = true;
    let cellClassArr = [];

    //
    let tesss = [ 
        ['cell-1', 'cell-2', 'cell-3'],
        ['cell-1', 'cell-4', 'cell-7'],
        ['cell-7', 'cell-8', 'cell-9'],
        ['cell-6', 'cell-3', 'cell-9'],
        ['cell-1', 'cell-5', 'cell-9'],
        ['cell-3', 'cell-5', 'cell-7'],
        ['cell-5', 'cell-2', 'cell-8'],
        ['cell-4', 'cell-5', 'cell-6']
    ];  
    //

    let pinTicOrTac = (it) => {        
        if (flag) {
            it.style.backgroundColor = 'green';
            it.classList.add('tic');
            cellClassArr.push(it.id);
        } else {
            it.style.backgroundColor = 'red';
            it.classList.add('tac');
        }
        console.log(cellClassArr);
    }

    let changeFlag = () => {
        flag ? (flag = false) : flag = true;
    }

    let testCheckResult = () => { 
        let count = 0;       
        
        
        for (let l = 0; l < tesss.length; l++) {
            for (let i = 0; i < cellClassArr.length; i++) {
            
                for (let j = 0; j < cellClassArr.length; j++) {
                    if (cellClassArr[i] === tesss[l][j]) {
                        count++;
                    }
                    if (count === 3) {
                        console.log('tic won!');
                    }
                }
    
            }
            count = 0;
        }
        console.log(count);

    }

    ticTacItem.forEach((it) => {
        it.addEventListener('click', () => {
            pinTicOrTac(it);
            changeFlag();
            testCheckResult();
        });
    })
}) ()