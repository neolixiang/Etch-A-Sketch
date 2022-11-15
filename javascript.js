


//user click the button to confirm the side grid count
btn = document.querySelector('#confirm');
const container = document.getElementById('container')
btn.addEventListener('click', () => {
    //grab the cound of grids on the side of the squre
    let gridCount = document.querySelector('input').value;
    console.log(gridCount);
    if (gridCount > 100) {
        document.getElementById("gridCount").value = 100;
        gridCount = 100
    }

    //clear the grids created from last round;
    let lastChild = container.lastElementChild;
    while (lastChild) {
        container.removeChild(lastChild);
        lastChild = container.lastElementChild;
    }

    for (let i = 0; i <= gridCount ** 2 - 1; i++) {
        const div = document.createElement('div');
        div.classList.add(`grid`);
        div.dataset.seq = `'${i + 1}'`;
        container.appendChild(div)
    }

    // container.style.flex = '0 0 500px'

    // format the newly created grids
    const grids = document.querySelectorAll('.grid');
    const gheight = 500 / gridCount - 2;
    const gwidth = 500 / gridCount - 2;
    grids.forEach((e) => {
        e.style.height = `${gheight}px`;
        e.style.width = `${gwidth}px`;
        e.style.margin = `-1px`;
        e.style.border = 'solid purple 2px';
    })

})







