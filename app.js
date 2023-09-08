//padre de la card
// const section_services= document.querySelector(".services");
const cardsServices=document.querySelector(".cards-services");

const services= [
  {
    id: 1,
    tittle: "DEVELOPER ",
    description: "Development of web and mobile applications, committed to quality and creativity, in order to provide optimal solutions to client needs.",
    img: "content/imagen/main/developer.png",
    url: "#contact-me"
  },

  {
    id: 2,
    tittle:" DESIGNER",
    description: "Ideas are transformed into attractive and functional results, creating and innovating user interfaces, websites and mobile applications.",
    img: "content/imagen/main/desing.png",
    url: "#contact-me"
  }
];

const generateCard=()=>{
    services.forEach(services=>createCardServices(services))
    // for (let i = 0; i < services.length; i++) {
    //     createCardServices (services[i]);
    // }
}

const createCardServices = (services) => {
    //CREAR LA CARTA

    //contenedor de la carta
    const container_card_services = document.createElement("div");
    //ASIGNACION DE CLASE AL DIV ANTERIOR
    container_card_services.classList.add("container-card-services");
    //lo que contiene la carta
    //imagen
    const icon = document.createElement("img");
    //propiedades del icono(img)
    // const url_icon="content/imagen/developer.png";<--- una opcion para agregar la imagen
    icon.src =services.img;
  // icon.setAttribute()
  
  //h2
  const h2 = document.createElement("h2");
  h2.textContent = services.tittle;
  
  // parrafo
  const p = document.createElement("p");
  p.classList.add("description");
  p.textContent = services.description;
  
  
  // a
  const a = document.createElement("a");
  a.classList.add("services-btn-developer");
  a.textContent = "More information";
  a.href=services.url
  
  //ORDEN DE LOS ELEMENTOS
  container_card_services.appendChild(icon);
  container_card_services.appendChild(h2);
  container_card_services.appendChild(p);
  container_card_services.appendChild(a);
  
  cardsServices.appendChild(container_card_services);
  // section_services.appendChild(cardsServices);
};

window.addEventListener('DOMContentLoaded', generateCard)
