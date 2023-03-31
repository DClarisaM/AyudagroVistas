<template>
    <div>
   <div class="col-4 offset-3 text-center">
      <card class="card-user text-center">
        <div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Usuario</label>
                <div class="form-floating">
                    <input class="form-control" placeholder="example@example.com" id="floatingTextarea2" style="height: 50px">
                </div>
            </div>
        </div>
        <div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Contraseña</label>
                <div class="form-floating">
                    <input type="password" class="form-control" placeholder="Escriba su contraseña" id="floatingTextarea3" style="height: 50px"/>
                </div>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck2">
                <label class="form-check-label" for="dropdownCheck2">Recordarme</label>
            </div>
        </div>      
        <div class="text-center">
           <p-button type="info" round @click.native.prevent="">
             Ingresar
           </p-button>
         </div>
      </card>
   </div>
 </div>
 </template>
 