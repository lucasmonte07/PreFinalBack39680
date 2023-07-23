const socket = io()

//Función para rescatar los datos cargados en el form del html de gestorProducts    
function Ingresar () {                    

    let muestrausername = document.getElementById("iduser").value;
    let muestrapwd = document.getElementById("idpwd").value;

    // carga de datos a enviar al servidor.
    envioLog = {nameUser:muestrausername, password:muestrapwd}    
    //envio al servidor
    socket.emit('env-log', envioLog) 
    
    Cancelar()        
}        

function Cancelar() {
    document.getElementById("iduser").value = "";
    document.getElementById("idpwd").value = "";
}

socket.on("estado", inf => {    
    mostrar.innerHTML =  
       `<p>${inf}</p>`
})

