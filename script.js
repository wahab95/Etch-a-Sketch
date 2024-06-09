//      ::::::::Vars::::::::
const container = document.querySelector('.container');


//      ::::::::Functions & Methods::::::::
function makeGrid(row=16, col=16) {
    container.style['display']='flex';
    container.style['width']=`${22*col}px`;
    container.style['height']=`${22*row}px`;
    container.style['flex-wrap']='wrap';
    container.style['gap']='0px';
    container.style['padding']='0';
    container.style['margin']='0';
    container.style['justify-content']='space-evenly';
    container.style['align-content']='center';

    for (let i = 0; i < row; i++) {
        for (let k = 0; k < col; k++) {
            const cellDiv = document.createElement('div'); // Create a new div for each cell
            cellDiv.setAttribute('id',`${i}${k}`);
            cellDiv.style['border']='1px solid black';
            cellDiv.style['width']='20px';
            cellDiv.style['height']='20px';
            cellDiv.style['padding']='0';
            cellDiv.style['margin']='0';
            container.appendChild(cellDiv);
        }
    }
}

//      ::::::::Actions::::::::
makeGrid();
