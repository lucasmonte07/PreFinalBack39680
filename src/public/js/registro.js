const socket = io()

//Función para rescatar los datos cargados en el form html de registro   
function Agregar () {                    
    let muestralastname = document.getElementById("idlastname").value;
    let muestrafirstname = document.getElementById("idfirstname").value;
    let muestraage = document.getElementById("idage").value;
    let muestraemail = document.getElementById("idemail").value;
    let muestrarol = document.getElementById("idrol").value;
    let muestranameuser = document.getElementById("idnameuser").value;
    let muestrapassword = document.getElementById("idpassword").value;    

    // carga de datos a enviar al servidor.
        envioReg = {lastName: muestralastname, 
        firstName: muestrafirstname,  
        age: muestraage, 
        email: muestraemail,      
        rol: muestrarol,
        nameUser: muestranameuser,
        password: muestrapassword
    }                     
    
    // enviando datos al servidor
        socket.emit('env-reg',         
        envioReg    
    )
      
    Cancelar()        
}        

function Cancelar() {
    document.getElementById("idlastname").value = "";
    document.getElementById("idfirstname").value = "";
    document.getElementById("idage").value = "";
    document.getElementById("idemail").value = "";
    document.getElementById("idrol").value = "";
    document.getElementById("idnameuser").value = "";
    document.getElementById("idpassword").value = "";
    alert(hola)
}