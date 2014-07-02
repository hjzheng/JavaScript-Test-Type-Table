/**
 * Created by hjzheng on 2014/7/3.
 */
function createTable(tableId, data) {
    var table = document.getElementById(tableId);
    for(var i=0; i<data[0].length; i++) {
        var row = table.insertRow(table.rows.length);
        for(var j=0; j< data.length; j++) {
            var cell = row.insertCell(j);
            cell.innerHTML = data[j][i];
        }
    }
}