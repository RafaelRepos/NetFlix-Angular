export interface filmsInterface {
    title: string;
    image: string;
}

export interface sectionFilmsInterface {
    section: string;
    films: filmsInterface[];
}


// comedyFilms = {
//     section: “Comedia”,    
//     films: [{    
//     title: “Titulo”,    
//     image: “Imagen”    
//     }