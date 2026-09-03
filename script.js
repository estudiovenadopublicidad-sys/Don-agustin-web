const phone="5493462414401";
const wa=(text)=>`https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

document.getElementById("heroWhatsApp").href=wa("Hola Don Agustín, quiero hacer un pedido.");
document.getElementById("promoWhatsApp").href=wa("Hola Don Agustín, quiero consultar las ofertas.");
document.getElementById("deliveryWhatsApp").href=wa("Hola Don Agustín, quiero consultar por un envío.");
document.getElementById("contactWhatsApp").href=wa("Hola Don Agustín, quiero hacer una consulta.");
document.getElementById("bottomWhatsApp").href=wa("Hola Don Agustín, quiero hacer un pedido.");
document.getElementById("year").textContent=new Date().getFullYear();

const offersBox=document.getElementById("offers");
offers.forEach(o=>{
  offersBox.innerHTML+=`<article class="card"><h3>${o.name}</h3><p>${o.detail}</p>${o.price?`<div class="price">${o.price}</div>`:""}<a class="text-link" target="_blank" href="${wa("Hola Don Agustín, quiero consultar: "+o.name)}">Consultar →</a></article>`;
});

const productsBox=document.getElementById("products");
products.forEach(cat=>{
  let rows=cat.items.map(p=>`<div class="row"><span>${p.name}</span><strong>${p.price||"Consultar"}</strong></div>`).join("");
  productsBox.innerHTML+=`<div class="category"><h3>${cat.category}</h3><div class="price-list">${rows}</div></div>`;
});
