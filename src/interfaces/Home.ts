export interface HomeData {
    benfits: Benfit[];
    plansInt: PlanInternet[];
    plansTV: PlanTV[];
}

export interface Benfit {
    img: string,
    titulo: string,
}

export interface PlanInternet {
    nombre: string,
    mbps: string,
    precio: string
    subida: string,
    folioIFT: string,
}

export interface PlanTV {
    nombre: string,
    canales: string,
    precio: string
    img: string,
}