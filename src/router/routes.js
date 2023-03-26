import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
//import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";

import GestionarCategorias from "@/pages/GestionarCategorias.vue"
import GestionarSubCategorias from "@/pages/GestionarSubcategorias.vue";
import ListarPregunta from "@/pages/ListarPregunta.vue";
import ListarRespuesta from "@/pages/ListarRespuesta.vue";
import ListarUsuario from "@/pages/ListarUsuario.vue";
import ListarSugerencias from "@/pages/ListarSugerencias.vue";
import ListarValoroR from "@/pages/ListarValoroR.vue";
import ListarArchivo from "@/pages/ListarArchivo.vue";
import GestionarRol from "@/pages/GestionarRol.vue"
 


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "stats",
        name: "stats",
        component: UserProfile,
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications,
      },
      {
        path: "icons",
        name: "icons",
        component: Icons,
      },
      //{
        //path: "maps",
        //name: "maps",
        //component: Maps,
     // },
      {
        path: "typography",
        name: "typography",
        component: Typography,
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList,
      },


      {
        path: "categorias",
        name: "categorias",
        component: GestionarCategorias,
      },
      {
        path: "subcategorias",
        name: "subcategorias",
        component: GestionarSubCategorias,
      },
      {
        path: "usuario",
        name: "usuario",
        component: ListarUsuario,
      },
      {
        path: "pregunta",
        name: "pregunta",
        component: ListarPregunta,
      },
      {
        path: "respuesta",
        name: "respuesta",
        component: ListarRespuesta,
      },
      {
        path: "sugerencias",
        name: "sugerencias",
        component: ListarSugerencias,
      },
      {
        path: "valorR",
        name: "valorR",
        component: ListarValoroR,
      },
      {
        path: "archivo",
        name: "archivo",
        component: ListarArchivo,
      },
      {
        path: "rol",
        name: "rol",
        component: GestionarRol,
      },

    ],
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
