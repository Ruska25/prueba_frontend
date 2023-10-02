(async () => {
    try{
        let color = await fetch("https://prueba-backand.onrender.com/").then(respuesta => respuesta.json());
         
        document.querySelector("body").style.backgroundColor = `rgb(${[r,g,b].join(",")})`;
        document.querySelector("h1").innerHTML = [r,g,b].join(",");

    }catch(error){
        document.querySelector("h1").innerHTML = "¡ERROR!";

    }
})();