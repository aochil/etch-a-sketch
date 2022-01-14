fillGrid(256, 'divGrid');

function fillGrid(totalDivs, className) {    // makes a grid depending on number of grid squares and can assign class name
    const grid = document.querySelector('#grid');
    for(i = 1; i <= totalDivs; i++) {
        let newDiv = document.createElement('div');
            newDiv.classList.add(className);
            grid.appendChild(newDiv);
};
}
// will check which class of divs exist, wil delete and make assigned number of divs
const btnSixteen = document.getElementById('sixteen');  
btnSixteen.addEventListener('click', function() {
    if(document.getElementsByClassName('divGrid').length) {
        document.querySelectorAll('.divGrid').forEach(el => el.remove());
            fillGrid(256, 'divGrid');
    }   else if(document.getElementsByClassName('divGrid2').length) {
            document.querySelectorAll('.divGrid2').forEach(el => el.remove());
                fillGrid(256, 'divGrid');
    }       else if(document.getElementsByClassName('divGrid3').length) {
                document.querySelectorAll('.divGrid3').forEach(el => el.remove());
                    fillGrid(256, 'divGrid');
    }
});

// will check which class of divs exist, wil delete and make assigned number of divs
const btnThirtyTwo = document.getElementById('thirtytwo');
btnThirtyTwo.addEventListener('click', function(){
    if (document.getElementsByClassName('divGrid').length) {
        document.querySelectorAll(".divGrid").forEach(el => el.remove());
            fillGrid(1024, 'divGrid2')
    }   else if(document.getElementsByClassName('divGrid2').length) {
            document.querySelectorAll('.divGrid2').forEach(el => el.remove());
                fillGrid(1024, 'divGrid2')
    }       else if(document.getElementsByClassName('divGrid3').length) {
                document.querySelectorAll('.divGrid3').forEach(el => el.remove());
                    fillGrid(1024, 'divGrid2')
    }
});

// will check which class of divs exist, wil delete and make assigned number of divs
const btnSixtyFour = document.getElementById('sixtyfour');
btnSixtyFour.addEventListener('click', function() {
    if(document.getElementsByClassName('divGrid').length) {
        document.querySelectorAll('.divGrid').forEach(el => el.remove());
            fillGrid(4096, 'divGrid3')
    }   else if(document.getElementsByClassName('divGrid2').length) {
            document.querySelectorAll('.divGrid2').forEach(el => el.remove());
                fillGrid(4096, 'divGrid3')
    }       else if(document.getElementsByClassName('divGrid3').length) {
                document.querySelectorAll('.divGrid3').forEach(el => el.remove());
                    fillGrid(4096, 'divGrid3')
            }
});

//after clicking color button, user will be able to draw with color selected
function changeColor(className, queryClass, color) {
    if(document.getElementsByClassName(className).length) {
        document.querySelectorAll(queryClass).forEach(el => 
            el.addEventListener('mouseover', function() {
                el.style.backgroundColor = color;
            }))
    }
}

//will be able to draw with that color on any of the 3 grids
function btnClickColor(colorID, color){
    const btnRed = document.getElementById(colorID);
        btnRed.addEventListener('click', function() {
            changeColor('divGrid', '.divGrid', color);
            changeColor('divGrid2', '.divGrid2', color);
            changeColor('divGrid3', '.divGrid3', color);
        })
        
}

//click any color button and will be able to draw on grid w/ that color
btnClickColor('red', 'red');
btnClickColor('yellow', 'yellow');
btnClickColor('orange', 'orange');
btnClickColor('green', 'green');
btnClickColor('blue', 'blue');
btnClickColor('indigo', 'indigo');
btnClickColor('violet', 'violet');
btnClickColor('black', 'black');
btnClickColor('eraser', 'white');


function clear(className, queryClass) {
    const btnClear = document.getElementById('clear');
    btnClear.addEventListener('click', function() {
        if(document.getElementsByClassName(className).length) {
            document.querySelectorAll(queryClass).forEach(el => 
                el.style.backgroundColor = 'white');
        }
    })
}

clear('divGrid', '.divGrid');
clear('divGrid2', '.divGrid2');
clear('divGrid3', '.divGrid3');