const url = "https://jsonplaceholder.typicode.com/photos";

async function obtenerFotos() {

    const respuesta = await fetch(url);

    const datos = await respuesta.json();

    const galeria = document.getElementById("galeria");

    const fotos = datos.slice(0, 10);

    fotos.forEach(foto => {

        const tarjeta = document.createElement("div");
        const imageUrl = `https://picsum.photos/seed/${foto.id}/600/400`;

        tarjeta.innerHTML = `
            <img src="${imageUrl}" alt="${foto.title}" loading="lazy">
            <h3>${foto.title}</h3>
        `;

        galeria.appendChild(tarjeta);
    });
}

obtenerFotos();