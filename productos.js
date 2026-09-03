// EDITÁ SOLAMENTE ESTE ARCHIVO PARA CAMBIAR PRECIOS Y OFERTAS.
// Ejemplo de precio: "$10.900". Si un producto no tiene precio, dejalo en "".

const offers = [
  { name: "Oferta de la semana", detail: "Consultá las promociones vigentes", price: "" },
  { name: "Comprá Más + Pagás Menos", detail: "Promociones por cantidad", price: "" },
  { name: "Ofertas del día", detail: "Preguntá por WhatsApp", price: "" }
];

const products = [
  {
    category: "Vacuno",
    items: [
      { name: "Asado", price: "" },
      { name: "Vacío", price: "" },
      { name: "Matambre", price: "" },
      { name: "Colita de cuadril", price: "" },
      { name: "Tapa de asado", price: "" },
      { name: "Marucha", price: "" },
      { name: "Costeleta", price: "" },
      { name: "Pulpas", price: "" }
    ]
  },
  {
    category: "Cerdo",
    items: [
      { name: "Costilla", price: "$10.900" },
      { name: "Vacío", price: "$10.900" },
      { name: "Matambre", price: "$14.500" },
      { name: "Tapa", price: "$10.900" },
      { name: "Marucha", price: "$9.900" },
      { name: "Costeleta", price: "$8.500" },
      { name: "Bondiola", price: "$11.000" },
      { name: "Pulpas", price: "$10.900" },
      { name: "Pechito", price: "$10.900" },
      { name: "Milanesas de cerdo", price: "$8.600" },
      { name: "Rueda entera", price: "$9.800" },
      { name: "Solomillo", price: "$9.900" }
    ]
  },
  {
    category: "Pollo y otros",
    items: [
      { name: "Pollo", price: "" },
      { name: "Pechuga", price: "" },
      { name: "Hígado", price: "" },
      { name: "Chorizos", price: "" }
    ]
  }
];
