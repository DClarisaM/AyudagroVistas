import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import Login from "@/pages/Registro/login.vue"
import UserProfile from "@/pages/UserProfile.vue";
//import Notifications from "@/pages/Notifications.vue";
//import Icons from "@/pages/Icons.vue";
//import Maps from "@/pages/Maps.vue";
//import Typography from "@/pages/Typography.vue";
//import TableList from "@/pages/TableList.vue";

import GestionarSubCategorias from "@/pages/Subcategorias/GestionarSubcategorias.vue";
import RegistrarSubCategorias from "@/pages/Subcategorias/RegistrarSubcategorias.vue";
import VerSubcategorias from "@/pages/Subcategorias/VerSubcategorias.vue";
import EditarSubcategoria from "@/pages/Subcategorias/EditarSubcategoria.vue";


import GestionarCategorias from "@/pages/Categorias/GestionarCategorias.vue";
import RegistrarCategorias from "@/pages/Categorias/RegistrarCategorias.vue";
import EditarCategoria from "@/pages/Categorias/EditarCategoria.vue";
import VerCategoria from "@/pages/Categorias/VerCategoria.vue";


import ListarPregunta from "@/pages/Preguntas/ListarPregunta.vue";

import ListaPreguntas from "@/pages/Profesional/ListaPreguntas.vue";

import RegistrarPregunta from "@/pages/Preguntas/RegistrarPregunta.vue";
import VerPregunta from "@/pages/Preguntas/VerPregunta.vue";
import EditarPreguntas from "@/pages/Preguntas/EditarPreguntas.vue";

import ListarRespuesta from "@/pages/Respuestas/ListarRespuesta.vue";
import RegistrarRespuesta from "@/pages/Respuestas/RegistrarRespuesta.vue";
import VerRespuesta from "@/pages/Respuestas/VerRespuesta.vue";
import EditarRespuesta from "@/pages/Respuestas/EditarRespuesta.vue";

import ListarUsuario from "@/pages/Usuarios/ListarUsuario.vue";
import RegistrarUsuario from "@/pages/Usuarios/RegistrarUsuario.vue";
import VerUsuario from "@/pages/Usuarios/VerUsuario.vue";
import EditarUsuario from "@/pages/Usuarios/EditarUsuario.vue";


import ListarSugerencias from "@/pages/Sugerencias/ListarSugerencias.vue";
import RegistrarSugerencias from "@/pages/Sugerencias/RegistrarSugerencias.vue";
import VerSugerencias from "@/pages/Sugerencias/VerSugerencias.vue";
import EditarSugerencia from "@/pages/Sugerencias/EditarSugerencia.vue";


import ListarValoroR from "@/pages/ValoresR/ListarValoroR.vue";
import RegistrarValorR from "@/pages/ValoresR/RegistrarValorR.vue";
import VerValorR from "@/pages/ValoresR/VerValorR.vue";
import EditarValorR from "@/pages/ValoresR/EditarValorR.vue";


import GestionarRol from "@/pages/Roles/GestionarRol.vue";
import RegistrarRol from "@/pages/Roles/RegistrarRol.vue";
import VerRol from "@/pages/Roles/VerRol.vue";
import EditarRol from "@/pages/Roles/EditarRol.vue";

import ListarArchivo from "@/pages/Archivos/ListarArchivo.vue";
import RegistrarArchivo from "@/pages/Archivos/RegistrarArchivo.vue";
import VerArchivo from "@/pages/Archivos/VerArchivos.vue";
import EditarArchivo from "@/pages/Archivos/EditarArchivo.vue";

import SugerenciasArchivo from "@/pages/SugerenciasArchivo/SugerenciasArchivo.vue";
import RegistrarSugerenciaArchivo from "@/pages/SugerenciasArchivo/RegistrarSugerenciaArchivo.vue";
import VerSugerenciaArch from "@/pages/SugerenciasArchivo/VerSugerenciaArch.vue";
import EditarSugerenciasArch from "@/pages/SugerenciasArchivo/EditarSugerenciasArch.vue";

import PreguntaArchivo from "@/pages/PreguntasArchivos/PreguntaArchivo.vue";
import RegistrarPreguntaArchivo from "@/pages/PreguntasArchivos/RegistrarPreguntaArchivo.vue";
import VerPreguntasArchivo from "@/pages/PreguntasArchivos/VerPreguntasArchivo.vue";
import EditarPreguntaArch from "@/pages/PreguntasArchivos/EditarPreguntaArch.vue";

import Preguntar from "@/pages/VistasUsuario/Preguntar.vue";
import MisPreguntas from "@/pages/VistasUsuario/MisPreguntas.vue";
import SinRespuesta from "@/pages/VistasUsuario/SinRespuesta.vue";
import RespuestaP from "@/pages/VistasUsuario/RespuestaP.vue";
import Vistas from "@/pages/VistasUsuario/vistas.vue";
import login from "@/pages/Registro/login.vue";
import Inicio from "@/pages/Registro/Inicio.vue";
import loginProfesional from "@/pages/loginProfesional"


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/Login",
    
    children: [
      { path: "login",
       name: "login",
      component: login 
      },
      {
        path: "loginProfesional",
        name: "loginProfesional",
        component: loginProfesional,
      },
      
      {
        path: "dashboard",
        name: "INICIO",
        component: Dashboard,
      },



      
      {
        path: "stats",
        name: "Perfil",
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
      {
        path: "Editarcategoria/:idCategoria",
        name: "Editarcategoria",
        component: EditarCategoria,
      },
      {
        path: "Vercategoria/:idCategoria",
        name: "Vercategoria",
        component: VerCategoria,
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
      {
        path: "Versubcategorias",
        name: "Versubcategorias",
        component: VerSubcategorias,
      },
      {
        path: "Editarsubcategoria",
        name: "Editarsubcategoria",
        component: EditarSubcategoria,
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
      {
        path: "Verusuario",
        name: "Verusuario",
        component: VerUsuario,
      },
      {
        path: "Editarusuario",
        name: "Editarusuario",
        component: EditarUsuario,
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
      {
        path: "Verpregunta/:idPregunta",
        name: "Verpregunta",
        component: VerPregunta,
      },
      {
        path: "Editarpreguntas",
        name: "Editarpreguntas",
        component: EditarPreguntas,
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
      {
        path: "Verrespuesta",
        name: "Verrespuesta",
        component: VerRespuesta,
      },
      {
        path: "Editarrespuesta",
        name: "Editarrespuesta",
        component: EditarRespuesta,
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
      {
        path: "Versugerencias",
        name: "Versugerencias",
        component: VerSugerencias,
      },
      {
        path: "Editarsugerencia",
        name: "Editarsugerencia",
        component: EditarSugerencia,
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
      {
        path: "VervalorR",
        name: "VervalorR",
        component: VerValorR,
      },
      {
        path: "EditarvalorR",
        name: "EditarvalorR",
        component: EditarValorR,
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
      {
        path: "Verrol",
        name: "Verrol",
        component: VerRol,
      },
      {
        path: "Editarrol",
        name: "Editarrol",
        component: EditarRol,
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
      {
        path: "Verarchivo",
        name: "Verarchivo",
        component: VerArchivo,
      },
      {
        path: "Editararchivo",
        name: "Editararchivo",
        component: EditarArchivo,
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
      {
        path: "VersugerenciaArch",
        name: "VersugerenciaArch",
        component: VerSugerenciaArch ,
      },
      {
        path: "EditarsugerenciasArch",
        name: "EditarsugerenciasArch",
        component: EditarSugerenciasArch ,
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
      },
      {
        path: "VerpreguntaArchivo/:idPreguntaArchivo",
        name: "VerpreguntaArchivo",
        component: VerPreguntasArchivo,
      },
      {
        path: "EditarpreguntaArch",
        name: "EditarpreguntaArch",
        component: EditarPreguntaArch,
      },
      

      {
        path: "preguntar",
        name: "preguntar",
        component: Preguntar,
      },
      {
        path: "MisPreguntas",
        name: "MisPreguntas",
        component: MisPreguntas,
      },
      {
        path: "SinRespuesta",
        name: "SinRespuesta",
        component: SinRespuesta,
      },
      {
        path: "RespuestaP/:preguntaId",
        name: "RespuestaP",
        component: RespuestaP,
      },
      {
        path: "vistas",
        name: "vistas",
        component: Vistas,
      },
      {
        path: "ListaPreguntas",
        name: "ListaPreguntas",
        component: ListaPreguntas,
      },
      {
        path: "Inicio",
        name: "Inicio",
        component: Inicio,
      },
    ],
  },
  // {
  //   path: "/",
  //   redirect: "/dashlogin",
  //   component: DashboardLogin,
  //   children: [
  //     {
  //       path: "dashlogin",
  //       name: "dashlogin",
  //       component: dashlogin,
  //     },

  //   ],
  // },
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
