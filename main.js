const row = document.getElementById("tableRow");
const table = document.getElementById('tableId');
const template = document.getElementById("columnTemplate").content;
colNum = 0

function addNewColumn() {
    const newColumn = template.cloneNode(true);
    table.style.width = table.offsetWidth + row.children[0].offsetWidth + 'px';

    row.appendChild(newColumn);
    colNum++;

    row.lastElementChild.children[0].textContent = `${colNum} Колонка`;
    setColListeners(row.lastElementChild);
}

function popLastColumn() {
    colNum < 1 ? colNum : colNum--;
    if (row.children.length > 1) { 
        table.style.width = table.offsetWidth - row.lastElementChild.offsetWidth - 5 + "px";
        row.removeChild(row.lastElementChild); 
    }
}

function setColListeners(col) {
    var pageX, curCol, curColWidth, tableWidth;
    div = col.children[1];

    div.addEventListener('mousedown', function(e) { 
        tableWidth = table.offsetWidth;
        curCol = e.target.parentElement;
        pageX = e.pageX;

        curColWidth = curCol.offsetWidth - 5;
    });

    document.addEventListener('mousemove', function(e) {
        if (curCol) {
            var diffX = e.pageX - pageX;
            
            if (curColWidth + diffX >= 150) {
                curCol.style.width = (curColWidth + diffX) + 'px'; 
                table.style.width = tableWidth + diffX + "px"
                
                // фиксируем размер колонки
                curCol.style.minWidth = curCol.style.width;
                curCol.style.maxWidth = curCol.style.width;   
            }
        }
    });
    
    document.addEventListener('mouseup', function(e) {
        pageX = undefined;
        curCol = undefined;
        curColWidth = undefined;
        tableWidth = undefined;
    });
}
