

function validar_datos(){
    const NOMBRES = ['carlos', 'susana']
    const DNI = ['123', '321']
    
    let nombre = document.getElementById('nombre').value;
    let dni = document.getElementById('dni').value;
    let alerta = document.getElementById('alerta');
    if ((nombre === '') || (dni == '')){
        alerta.textContent = 'Debe completar todos los campos';
        alerta.style.color = 'red'
        
    } else {

        if (NOMBRES.includes(nombre) && DNI.includes(dni)){
            alerta.textContent = 'Usted ya a solicitado su plan';
            alerta.style.color = 'red'
        } else{
            alerta.textContent = 'Solicitud realizada con exito!';
            alerta.style.color = '#32CD32'
        }
    }

    
}

function validar_datos_inicio(){
    const USUARIO = ['admin']
    const PASSWORD = ['123']
    
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let alert = document.getElementById('alert');
    console.log(user, pass)
    if (USUARIO.includes(user) && PASSWORD.includes(pass)){
        window.location.href = 'https://09021998f.github.io/090211998f.github.io/home_tecnico.html';
    } else{
        alert.textContent = 'Usuario o Contraseña incorrectos.';
    }

}

// '../home_tecnico.html' para local



// document.getElementById('formulario').addEventListener('submit', function (even) {
//     const NOMBRES = ['carlos', 'susana']
//     const DNI = ['123', '321']
    
//     let name = document.getElementById('dni').value;
//     let dni = document.getElementById('nombre').value;
//     let alerta = document.getElementById('alerta');


//     if (NOMBRES.includes(name) && DNI.includes(dni)){
//         alerta.textContent = '${name} Usted ya a solicitado su plan';
//     } else{
//         alerta.textContent = 'Solicitud realizada con exito!';
//     }


// })