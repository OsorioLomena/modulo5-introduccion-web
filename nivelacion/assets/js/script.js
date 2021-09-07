var nombreLibro = prompt("Nombre del libro");
var autoLibro = prompt("Autor del libro");
var precioLibro = prompt("Precio del Libro");



document.write(`
<div class ="container">
    <table class="table mt-5">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titulo</th>
            <th scope="col">Autor</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>${nombreLibro}</td>
            <td>${autoLibro}</td>
            <td>@${precioLibro}</td>
          </tr>
        </tbody>
     
        </tbody>
      </table>

</div>
`)