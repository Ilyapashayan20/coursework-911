
const modalExit = document.getElementById('modal-exit')
const modalHelp = document.getElementById('modal-help')
const helpMessage = document.getElementById('message')
const about = document.getElementById('about')

const adviceDay = document.getElementById('adviceDay')


function openExitModal(){
    modalExit.style.display = 'block'
}

function exit(){
    console.log('test');
     window.location.href = 'index.html'
}

function closeExitModal(){
    modalExit.style.display = 'none'
}

function openHelpModal(){
    modalHelp.style.display = 'block'
    console.log('Help Modal')
}

function closeHelpModal(){
    modalHelp.style.display = 'none'
    about.style.display = 'none'
    helpMessage.value += helpMessage.value;
}

function openAbout(){
    about.style.display = 'block'
}



function openList(){
    adviceDay.style.display = 'block'
    fetch("text.json").then(function(response) {
        console.log(response);
      });
}

function closeAdModal(){
    adviceDay.style.display = 'none'
}

// console.log(data)