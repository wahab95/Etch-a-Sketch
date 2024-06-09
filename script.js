//      ::::::::Vars::::::::
const container = document.querySelector('.container');


//      ::::::::Functions & Methods::::::::
function makeGrid(row=16, col=16) {
    container.style['display']='flex';
    container.style['width']=`${22*col}px`;
    container.style['height']=`${22*row}px`;
    container.style['flex-wrap']='wrap';
    container.style['padding']='0px';
    container.style['margin-left']='1em';
    container.style['margin-top']='1em';
    container.style['justify-content']='space-evenly';
    container.style['align-content']='center';

    for (let i = 1; i <= row; i++) {
        for (let k = 1; k <= col; k++) {
            const cellDiv = document.createElement('div'); // Create a new div for each cell
            cellDiv.setAttribute('id',`${i}-${k}`);
            cellDiv.style['border']='1px solid black';
            cellDiv.style['width']='20px';
            cellDiv.style['height']='20px';
            cellDiv.style['padding']='0';
            cellDiv.style['margin']='0';
            cellDiv.style['flex']='1 1 auto';
            
            container.appendChild(cellDiv);
        }
    }
}
function hoverOver(){

}

//      ::::::::Actions::::::::
makeGrid(20,20);
