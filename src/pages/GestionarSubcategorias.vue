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
  const tableColumns = ["Id", "name", "age", "otra columna"];
  
  const tableData =
  [
    {
      id: 1,
      name: "Dakota Rice",
      age: 2
    },
    {
      id: 2,
      name: "Minerva Hooper",
      age: 2
    },
    {
      id: 3,
      name: "Sage Rodriguez",
      age: 2
    },
    {
      id: 4,
      name: "Philip Chaney",
      age: 2
    },
    {
      id: 5,
      name: "daira",
      age: 2
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