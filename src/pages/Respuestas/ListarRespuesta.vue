<template>
    <div class="row">
      <div class="col-12">
      <card class="card-plain">
        <div class="table-full-width table-responsive">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="categoria in listaCategorias">
                <th scope="row">{{ categoria.id_categoria }}</th>
                <td>{{ categoria.titulo }}</td>
                <td>{{ categoria.descripcion }}</td>
                <td>
                  <button class="btn btn-sm bg-primary text-white">
                    <i class="fas fa-eye"></i>
                  </button>
                  <button class="btn btn-sm bg-success text-white">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="btn btn-sm bg-danger text-white">
                    <i class="fas fa-trash-alt"></i>
                  </button>


                </td>
              </tr>

            </tbody>
          </table>
         
        </div>
      </card>
    </div>
      
  
      
    </div>
  </template>
  <script>
  import { PaperTable } from "@/components";
  const tableColumns = ["Id", "Name", "Acciones"];
  
  const tableData =
  [
    {
      id: 1,
      name: "Dakota Rice"
    },
    {
      id: 2,
      name: "Minerva Hooper"
    },
    {
      id: 3,
      name: "Sage Rodriguez"
    },
    {
      id: 4,
      name: "Philip Chaney"
    },
    {
      id: 5,
      name: "Doris Greene"
    },
  ];
  
  export default {
    components: {
      PaperTable,
    },
    data() {
      return {
        listaCategorias:[],
        table2: {
          title: "Categorias",
          subTitle: "Aquì veràs el listado de las categorias",
          columns: [...tableColumns],
          data: [...tableData],
        },
      };
    },
  };
  </script>
  <style></style>
  