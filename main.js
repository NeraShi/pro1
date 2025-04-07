const row = document.getElementById("tableRow");
const template = document.getElementById("columnTemplate").content;
colNum = 0

function addNewColumn() {
    colNum++;
    const newColumn = template.cloneNode(true);
    row.appendChild(newColumn);
    row.lastElementChild.innerHTML = `${colNum} Колонка <div class="resizer"></div>`;
    console.log(document.getElementById("tableRow"))
}

function popLastColumn() {
    colNum < 1 ? colNum : colNum--;
    if (row.children.length > 1) 
        { row.removeChild(row.lastElementChild); }
}