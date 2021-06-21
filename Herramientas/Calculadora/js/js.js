


function operacion(parametro) {


if(parametro=="ac")
{
    document.getElementById('resul').value+= "";
}else{
    if(parametro =="="){
    
        total = eval(document.getElementById('resul').value);
        document.getElementById('resul').value =total;
    }else{
        document.getElementById('resul').value+=parametro;
    }

}
}
