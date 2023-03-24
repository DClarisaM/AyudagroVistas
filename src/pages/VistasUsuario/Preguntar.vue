<template>
    <div>
   <div class="col-6 offset-3">
 
     <card class="card-user">
        <div class="image">
          <img src="@/assets/img/background.jpg" alt="..." />
        </div>
        <div>
          <div class="author">
            <img
              class="avatar border-white"
              src="@/assets/img/faces/face-2.jpg"
              alt="..."
            />
            <h4 class="title">
              Danier
            </h4>
          </div>
          </div>
          <div class="form-group">
                <label for="exampleFormControlSelect1">Categoria</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option value="1">Frutas</option>
                    <option value="2">verduras</option>
                    <option value="3">animales</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Subcategoria</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option value="1">Mango</option>
                    <option value="2">Manzana</option>
                    <option value="3">Vaca</option>
                </select>
              </div>
        <input type="text">
        <div class="text-center">
           <p-button type="info" round @click.native.prevent="">
             Publicar
           </p-button>
         </div>
      </card>
   </div>
 
 
   
 
 
 </div>
 
 </template>
 