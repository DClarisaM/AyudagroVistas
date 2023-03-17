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
