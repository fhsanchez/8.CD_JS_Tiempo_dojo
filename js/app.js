function clickCity()
{
    alert('Cargando mensaje meteorológico');
}

function hiddenPolicy()
{
    document.querySelector(".footer").style.display = "none";
}

function convierteTemp()
{
    // Formula para pasar de Celsius a Farenheit
    // centi = parseFloat(prompt("Ingresa grados centígrados"));
    // fare = (9/5*centi)+32;
    
    let t_max_f = 0;
    let t_min_f = 0;

    
    const t_max = document.querySelectorAll(".t_max");
    const t_min = document.querySelectorAll(".t_min");

    const t_max_id = document.querySelectorAll("#t_max");
    const t_min_id = document.querySelectorAll("#t_min");
    for(let i=0;i<t_max.length;i++)
    {
        t_max[i].innerHTML = Math.round(((9 / 5 ) * parseFloat(t_max[i].innerHTML))+32);
        t_min[i].innerHTML = Math.round(((9 / 5 ) * parseFloat(t_min[i].innerHTML))+32);

        t_max_id[i].innerHTML = "F";
        t_min_id[i].innerHTML = "F";
    }

}

// Agreando evento de ocultar footer o politicas
const temperatura = document.querySelector("#convierteTemp");
temperatura.addEventListener("change", convierteTemp);

// Agreando evento de ocultar footer o politicas
const elemento = document.querySelector(".footer");
elemento.addEventListener("click", hiddenPolicy);


// Mensaje para todas las opciones del menu
const elementos = document.querySelectorAll(".botones");
for(let i=0;i<elementos.length;i++)
{
    elementos[i].addEventListener("click", clickCity);
}



