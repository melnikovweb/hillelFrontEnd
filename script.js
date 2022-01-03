let block = document.querySelector(".block");
const STEP = 10;
const maxWidth = element => innerWidth - element.offsetWidth;
const maxHeight = element => innerHeight - element.offsetHeight;


const BEMS = element => {
    let div = document.createElement(`div`);
    div.innerText = `БЭМС`;
    div.classList.add(`bems`);
    element.append(div);
    setTimeout(() => div.remove(), 2000)
}

const KEYS = {
    37: element => {
        if (element.offsetLeft <= 0) {
            element.style.left = `${parseInt(element.style.left) + (STEP * 2)}px`;
            BEMS(element);
        } else {
             element.style.left = element.style.left === '' ? `-${STEP}px` : `${parseInt(element.style.left) - STEP}px`;
        }
    },
    39: element => {
        if (element.offsetLeft >= maxWidth(element))
        {
            element.style.left = `${parseInt(element.style.left) - (STEP * 2)}px`;
            BEMS(element);
        } else {
            element.style.left = element.style.left === '' ? `${STEP}px` : `${parseInt(element.style.left) + STEP}px`;
        }
    },
    38: element => {
        if (element.offsetTop <= 0) {
            element.style.top = `${parseInt(element.style.top) + (STEP * 2)}px`;
            BEMS(element);
        } else {
            element.style.top = element.style.top === "" ? `-${STEP}px` : `${parseInt(element.style.top) - STEP}px`;
        }
    },
    40: element => {
        if (element.offsetTop >= maxHeight(element)) {
            element.style.top = `${parseInt(element.style.top) - (STEP * 2)}px`;
            BEMS(element);
        } else element.style.top = element.style.top === '' ? `${STEP}px` : `${parseInt(element.style.top) + STEP}px`;
    },
    32: element => {
        let startPosition = element.style.top;
        element.style.top = element.style.top === '' ? `-${STEP}px` : `${parseInt(element.style.top) - STEP}px`;
        document.addEventListener(`keyup`, ev => {
            if (ev.keyCode === 32) {
                element.style.top = startPosition;
            }
        });
    },
    17: element => {
        let startTop = element.offsetHeight;
        let startWidth = element.offsetWidth;
        let startMarginTop = '0px';
        element.style.height = `${startTop - (startTop * 0.25)}px`;
        element.style.width = `${startWidth + (startWidth * 0.4)}px`;
        element.style.marginTop = `${(startTop * 0.25)}px`;

        document.addEventListener(`keyup`, ev => {
            element.style.height = `${startTop}px`;
            element.style.width = `${startWidth}px`;
            element.style.marginTop =  startMarginTop;
        })
    }

};

document.addEventListener('keydown', event => {
    if (event.keyCode === 32 || event.keyCode === 17) {
        if (!event.repeat) {
            KEYS[event.keyCode] && KEYS[event.keyCode](block);
        }
    } else KEYS[event.keyCode] && KEYS[event.keyCode](block);

});