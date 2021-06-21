//modal

function CerrarModal(){
document.getElementById("mymodal").style.display ="none";
borrarInput()
}

function AbrirModal(){
    document.getElementById("mymodal").style.display ="flex";
    
    }


//modal editar

    function CerrarModalEdit(){
        document.getElementById("mymodaleditar").style.display ="none";
        borrarInput()
        }
        
        function AbrirModalEdit(){
            document.getElementById("mymodaleditar").style.display ="flex";
            
            }
        

            function GuardarEditar() {

                datos.splice(
                    xEdit, 1 ,{ 
                     
                    Titulo:  document.getElementById("inputTituloEdit").value 
                    , Descripcion:  document.getElementById("inputDescripcionEdit").value
            });
            
            
            CerrarModalEdit()
            
            
            
                actualizar()
                }
            


 //Almacenar Datos (id ,titulo, Descripcion)
 
 //Almacenar Datos (id ,titulo, Descripcion)
   var xEdit = 0
    ContadorId = 0;
    var datos =[
       
    ]

 //Fin
 ContadorId = 0;
 var datos =[
    
 ]

//Fin
    

 //guardar Datos de los input del Modal   

function Guardar() {
    datos.push({ 
        Titulo: document.getElementById("inputTitulo").value
    , Descripcion: document.getElementById("inputDescripcion").value});
    CerrarModal()

    actualizar()
    }



function borrarInput() {
    document.getElementById("inputTitulo").value=" ";
    document.getElementById("inputDescripcion").value=" ";
}

    
function Eliminar(num) {
    datos.splice(num , 1)
  actualizar()
}



function Editar(x) {
 
    document.getElementById("inputTituloEdit").value= datos[x].Titulo ;
    document.getElementById("inputDescripcionEdit").value= datos[x].Descripcion;
    xEdit = x

    AbrirModalEdit() 

  actualizar()
}
          
        

    function actualizar() {
        

        document.getElementById("contenedor").innerHTML = "";
        for (var x = 0; x < datos.length; x++) {
                    
                     
            document.getElementById("contenedor").innerHTML +=`
               
    
                <div class="caja">
                                <div>
                               
                           
                                    <p id="titulo">Titulo:  ${datos[x].Titulo}</p>
                                    <p id="descripcion">Descripcion:  ${datos[x].Descripcion}</p>
                                </div> 
                                <div>
                                <button class="Editar" onclick="Editar(${x})">Editar</button><button class="Eliminar" onclick="Eliminar(${x})">Eliminar</button> 
                                </div>
                            </div>
                            
                    </div>
                
                ` ;  
        //fin
        }  



    }