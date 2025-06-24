    //Inicializacion del programa
    console.log ("Bienvenidos al sistema interactivo");

    let name = prompt("Ingresa tu nombre ");
    let age = parseInt(prompt ("Ingrese tu edad"));

    while (isNaN(age) || age <=0 || !Number.isInteger(age)){
        console.error("Ingresa numeros positivos")
        let age = parseInt(prompt ("Ingrese tu edad"));
    }

    if (age < 18){
        alert(`Hola ${name}, eres menor de edad. ¡ Sigue aprendiendo y disfrutando del codigo!`);
    } else{
        alert(`Hola ${name}, eres mayor de edad. ¡ Preparate para grandes oportunidades en el mundo de la programacion!`);
    }