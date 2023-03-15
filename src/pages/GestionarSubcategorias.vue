<template>
    <div class="row">
      <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <paper-table
              type="hover"
              :title="table2.title"
              :sub-title="table2.subTitle"
              :data="table2.data"
              :columns="table2.columns"
            >
            </paper-table>
          </div>
        </card>
      </div>
    </div>
  </template>
  <script>
  import { PaperTable } from "@/components";
<<<<<<< HEAD
  import axios from 'axios';


  axios.get("http://localhost:3000/listarCategoria")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  const tableColumns = ["Id", "name", "age", "otra columna"];
=======
  const tableColumns = ["Id", "nombre","categoria" ];
>>>>>>> 43ef2be40ee390e9d598ca16186e6acc040e0173
  
  const tableData =
  [
    {
      id: 1,
      nombre: "Dakota Rice",
      categoria:"verduras"
    },
    {
      id: 2,
      nombre: "Minerva Hooper",
      categoria: "Verduras"
    },
    {
      id: 3,
      nombre: "Sage Rodriguez",
      categoria:"Frutas"
    },
    {
      id: 4,
      nombre: "Philip Chaney",
      categoria:"Animales"
    },
    {
      id: 5,
      nombre: "daira",
      categoria:"Hortalizas"
    },
  ];
  
  export default {
    components: {
      PaperTable,
    },
    data() {
      return {
        listaSubcategorias:[],
        table2: {
          title: "Categorias",
          subTitle: "Aquì veràs el listado de las categorias",
          columns: [...tableColumns],
          data: [...tableData]
        },
      };
    },
  };
  </script>
  <style></style>