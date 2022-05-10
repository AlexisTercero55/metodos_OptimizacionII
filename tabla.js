/**
 * @author Alexis Tercero
 * @version 1.0
 * @date 10/06/2019
 * @description Tabla dinamica
 * 
 * Se necesta un clase para crear tablas dinamicamente
 * daddos los encabezados [str,st,r...] 
 * y renglones de la tabla [[],[],[],...] como un array de arrays.
 * La tablas de la siguinte forma:
 * |--------------------------------------------------|
 * |col1|col2|col3|col4|col5|col6|col7|col8|col9|col10| encabezados
 * |--------------------------------------------------|
 * |r1,1|r1,2|r1,3|r1,4|r1,5|r1,6|r1,7|r1,8|r1,9|r1,10| rows[0]
 * |--------------------------------------------------|
 * |r2,1|r2,2|r2,3|r2,4|r2,5|r2,6|r2,7|r2,8|r2,9|r2,10| rows[1]
 * |--------------------------------------------------|
 * |r3,1|r3,2|r3,3|r3,4|r3,5|r3,6|r3,7|r3,8|r3,9|r3,10| rows[2]
 * |--------------------------------------------------|
 * |r4,1|r4,2|r4,3|r4,4|r4,5|r4,6|r4,7|r4,8|r4,9|r4,10| rows[3]
 * ...
 * |--------------------------------------------------|
 * |rN,1|rN,2|rN,3|rN,4|rN,5|rN,6|rN,7|rN,8|rN,9|rN,10| rows[rows.length-1]
 * 
 * @param {array} encabezados
 * @param {array} rows
 * @param {string} id
 */
class Tabla {
    constructor(rows, cols, id = "tabla") {
        // atributos
        this.rows = rows;
        this.cols = cols;
        this.id = id;
        // crear tabla, encabezados y cuerpo
        this.table = document.createElement("table");
        this.thead = document.createElement("thead");
        this.tbody = document.createElement("tbody");
        this.table.id = this.id;
        // agregar encabezados como un array
        this.crearEncabezados();
        // agregar cuerpo (celdas) como un array de arrays
        this.crearCuerpo();
        
        
        document.body.appendChild(this.table);
    }

    // metodos
    crearEncabezados() 
    {
        let encabezados = '';
        for (let i = 0; i < this.cols.length; i++)
        {
            encabezados += '<th>'+String(this.cols[i])+'</th>';
        }
        this.thead.innerHTML = encabezados;
        this.table.appendChild(this.thead);
    }

    crearCuerpo()
    {
        let cuerpo = '';
        for (let i = 0; i < this.rows.length; i++)
        {
            cuerpo += `<tr>`;
            for (let j = 0; j < this.rows[i].length; j++) {
                cuerpo += '<td>' + this.rows[i][j] + '</td>';
            }
            cuerpo += `</tr>`;
        }
        this.tbody.innerHTML = cuerpo;
        this.table.appendChild(this.tbody);
    }
}
let encabezados = ["col1", "col2", "col3"];
let rows = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["10", "11", "12"],
    ["13", "14", "15"]];
let tabla = new Tabla(rows, encabezados);
