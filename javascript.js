const container = document.getElementById('container')
console.log(container);

for (let i = 0; i <= 99; i++) {
    const grid = document.createElement('div');
    grid.classList.add(`grid`);
    grid.dataset.seq=`'${i+1}'`;    
    console.log();
    container.appendChild(grid);
}
