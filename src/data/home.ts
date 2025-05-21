import type { HomeData } from "../interfaces/Home";

export const homeData: HomeData = {
    benfits: [
        {
            img: "/img/icono-1.png",
            titulo: "Conexión rápida y confiable"
        },
                {
            img: "/img/icono-2.png",
            titulo: "Lleva tu entretenimiento a otro nivel"
        },
                {
            img: "/img/icono-3.png",
            titulo: "Soporte local"
        },
                {
            img: "/img/icono-4.png",
            titulo: "Red 100% fibra óptica"
        },
    ],
    plansInt: [
        {
            nombre: "Start",
            mbps: "40",
            precio: "329",
            subida: "40",
            folioIFT: "1234567"
        },
                {
            nombre: "Plus",
            mbps: "80",
            precio: "379",
            subida: "80",
            folioIFT: "1234567"
        },
                {
            nombre: "Turbo",
            mbps: "120",
            precio: "429",
            subida: "120",
            folioIFT: "1234567"
        },
        {
            nombre: "Pro",
            mbps: "300",
            precio: "599",
            subida: "300",
            folioIFT: "1234567"
        },
    ],
    plansTV: [
        {
            nombre: "Entretenimiento",
            canales: "40",
            precio: "149",
            img: "/img/pla-entretenimiento.png"
        },
                {
            nombre: "Diversión",
            canales: "50",
            precio: "149",
            img: "/img/pla-diversion.png"
        },
    ]
}