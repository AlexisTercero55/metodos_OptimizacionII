/**
 * @author Alexis Tercero
 * @version 1.0
 * @date 10/05/2022
 * @description Tabla dinamica
 * 
 * Se necesta un clase para crear tablas dinamicamente
 * daddos los encabezados [str,str,...] 
 * y renglones de la tabla [[],[],[],...] como un array de arrays.
 * La tablas de la siguinte forma:
 * |-----------------------------|
 * |col1|col2|col3|col4|col5|coln| encabezados
 * |-----------------------------|
 * |r1,1|r1,2|r1,3|r1,4|r1,5|r1,n| rows[0]
 * |-----------------------------|
 * |r2,1|r2,2|r2,3|r2,4|r2,5|r2,n| rows[1]
 * |-----------------------------|
 * ...
 * |-----------------------------|
 * |rm,1|rm,2|rm,3|rm,4|rm,5|rm,n| rows[rows.length-1]
 * |-----------------------------|
 * 
 * @param {array} encabezados
 * @param {array} rows
 * @param {string} id
 */
class Tabla 
{
    constructor(rows, cols=null, id = "tabla") 
    {
        // atributos
        this.rows = rows;
        this.cols = cols;
        this.id = id;
        // crear tabla, encabezados y cuerpo
        this.table = document.createElement("table");
        // Estilod de la tabla
        // agregar border="1"
        this.table.setAttribute("border", "1");

        // crear encabezados solo si se pasaron encabezados
        if (this.cols != null)
        {
            this.thead = document.createElement("thead");
            // agregar encabezados como un array
            this.crearEncabezados();
        }
        this.tbody = document.createElement("tbody");
        this.table.id = this.id; // id de la tabla para html

        // agregar cuerpo (celdas) como un array de arrays
        this.crearCuerpo();
        
        
        // agregar tabla a un div id="output"
        let output = document.getElementById("output");
        output.appendChild(this.table);
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
            for (let j = 0; j < this.rows[i].length; j++) 
            {
                cuerpo += '<td>' + this.rows[i][j] + '</td>';
            }
            cuerpo += `</tr>`;
        }
        this.tbody.innerHTML = cuerpo;
        this.table.appendChild(this.tbody);
    }
}


// test: crear tabla [aprobado]
// let encabezados = ["col1", "col2", "col3"];
// let rows = [
//     ["1", "2", "3"],
//     ["4", "5", "6"],
//     ["7", "8", "9"],
//     ["10", "11", "12"],
//     ["13", "14", "15"]];
// let tabla = new Tabla(rows, encabezados);
