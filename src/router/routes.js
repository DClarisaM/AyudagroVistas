import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
//import Notifications from "@/pages/Notifications.vue";
//import Icons from "@/pages/Icons.vue";
//import Maps from "@/pages/Maps.vue";
//import Typography from "@/pages/Typography.vue";
//import TableList from "@/pages/TableList.vue";

import GestionarSubCategorias from "@/pages/Subcategorias/GestionarSubcategorias.vue";
import RegistrarSubCategorias from "@/pages/Subcategorias/RegistrarSubcategorias.vue";

import GestionarCategorias from "@/pages/Categorias/GestionarCategorias.vue"
import RegistrarCategorias from "@/pages/Categorias/RegistrarCategorias.vue"

import ListarPregunta from "@/pages/Preguntas/ListarPregunta.vue";
import RegistrarPregunta from "@/pages/Preguntas/RegistrarPregunta.vue"

import ListarRespuesta from "@/pages/Respuestas/ListarRespuesta.vue";
import RegistrarRespuesta from "@/pages/Respuestas/RegistrarRespuesta.vue"

import ListarUsuario from "@/pages/Usuarios/ListarUsuario.vue";
import RegistrarUsuario from "@/pages/Usuarios/RegistrarUsuario.vue"

import ListarSugerencias from "@/pages/Sugerencias/ListarSugerencias.vue";
import RegistrarSugerencias from "@/pages/Sugerencias/RegistrarSugerencias.vue"

import ListarValoroR from "@/pages/ValoresR/ListarValoroR.vue";
import RegistrarValorR from "@/pages/ValoresR/RegistrarValorR.vue"

import GestionarRol from "@/pages/Roles/GestionarRol.vue";
import RegistrarRol from "@/pages/Roles/RegistrarRol.vue";

import ListarArchivo from "@/pages/Archivos/ListarArchivo.vue";
import RegistrarArchivo from "@/pages/Archivos/RegistrarArchivo.vue"

import SugerenciasArchivo from "@/pages/SugerenciasArchivo/SugerenciasArchivo.vue";
import RegistrarSugerenciaArchivo from "@/pages/SugerenciasArchivo/RegistrarSugerenciaArchivo.vue"

import PreguntaArchivo from "@/pages/PreguntasArchivos/PreguntaArchivo.vue"
import RegistrarPreguntaArchivo from "@/pages/PreguntasArchivos/RegistrarPreguntaArchivo.vue"
import Preguntar from "@/pages/VistasUsuario/Preguntar.vue"
import MisPreguntas from "@/pages/VistasUsuario/MisPreguntas.vue"



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



      // {
      //   path: "categorias",
      //   name: "categorias",
      //   component: GestionarCategorias,
      // },

      //inicio de rutas de categorias
      {
        path: "categorias",
        name: "categorias",
        component: GestionarCategorias,
      },
      {
        path: "Registrarcategorias",
        name: "Registrarcategorias",
        component: RegistrarCategorias,
      },

      //inicio de rutas de subcategorias
      {
        path: "subcategorias",
        name: "subcategorias",
        component: GestionarSubCategorias,
      },

      {
        path: "Registrarsubcategorias",
        name: "Registrarsubcategorias",
        component: RegistrarSubCategorias,
      },

      // inicio de rutas usuario
      {
        path: "usuario",
        name: "usuario",
        component: ListarUsuario,
      },
      {
        path: "Registrarusuario",
        name: "Registrarusuario",
        component: RegistrarUsuario,
      },

      //inicio de rutas de preguntas
      {
        path: "pregunta",
        name: "pregunta",
        component: ListarPregunta,
      },
      {
        path: "Registrarpregunta",
        name: "Registrarpregunta",
        component: RegistrarPregunta,
      },

      //inicio de rutas respuesta
      {
        path: "respuesta",
        name: "respuesta",
        component: ListarRespuesta,
      },
      {
        path: "Registrarrespuesta",
        name: "Registrarrespuesta",
        component: RegistrarRespuesta,
      },

      // inicio de rutas sugerencias
      {
        path: "sugerencias",
        name: "sugerencias",
        component: ListarSugerencias,
      },
      {
        path: "Registrarsugerencias",
        name: "Registrarsugerencias",
        component: RegistrarSugerencias,
      },

      //inicio de rutas de Valor Respuesta
      {
        path: "valorR",
        name: "valorR",
        component: ListarValoroR,
      },
      {
        path: "RegistrarvalorR",
        name: "RegistrarvalorR",
        component: RegistrarValorR,
      },

      //aqui inicia las rutas de rol
      {
        path: "rol",
        name: "rol",
        component: GestionarRol,
      },
      {
        path: "Registrarrol",
        name: "Registrarrol",
        component: RegistrarRol,
      },

      // rutas de archivo
      {
        path: "archivo",
        name: "archivo",
        component: ListarArchivo,
      },
      {
        path: "Registrararchivo",
        name: "Registrararchivo",
        component: RegistrarArchivo,
      },

      //inicio de rutas sugerencia archivo
      {
        path: "sugerenciaArchivo",
        name: "sugerenciaArchivo",
        component: SugerenciasArchivo,
      },
      {
        path: "RegistrarsugerenciaArchivo",
        name: "RegistrarsugerenciaArchivo",
        component: RegistrarSugerenciaArchivo,
      },

       //inicio de rutas pregunta archivo
      {
        path: "preguntaArchivo",
        name: "preguntaArchivo",
        component: PreguntaArchivo,
      },
      {
        path: "RegistrarpreguntaArchivo",
        name: "RegistrarpreguntaArchivo",
        component: RegistrarPreguntaArchivo,
        path: "preguntar",
        name: "preguntar",
        component: Preguntar,
      },
      {
        path: "MisPreguntas",
        name: "MisPreguntas",
        component: MisPreguntas,
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
