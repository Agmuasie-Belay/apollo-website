import flight from "../assets/service_images/flight.png"
import library from "../assets/images/library.webp"
import stock from "../assets/images/stock.png"
export const services = [

{
title:"Airline Ticketing",
description:
"Reliable flight booking solutions with competitive fares and professional assistance.",
image:flight,
icon:"plane",
link:"/services/airline-ticketing",
featured: true
},


{
title:"Hotel Reservations",
description:
"Comfortable accommodation solutions worldwide tailored to your travel needs.",
image:library,
icon:"hotel",
link:"/services/hotel-reservations",
featured: true
},


{
title:"Car Rentals",
description:
"Flexible transportation solutions for business and leisure travelers.",
image:stock,
icon:"car",
link:"/services/car-rental",
featured: true,
},


{
title:"Corporate Travel",
description:
"Dedicated travel management services for organizations and institutions.",
image:"/images/services/business.jpg",
icon:"building",
link:"/services/corporate-travel",
featured: false
}

];