import { sectionFilmsInterface } from './models/films.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';
  
  public topFiveFilms: sectionFilmsInterface = {
    section: "Los más populares de hoy",
    films: [{
      title: "Black List",
      image: './assets/images/Top10/9-poder.webp'
    },
    {
      title: "La Reina del Flow",
      image: './assets/images/Top10/2-reina.webp'
    },
    {
      title: "Titanes",
      image: './assets/images/Top10/3-titanes.webp'
    },
    {
      title: "Lost in Space",
      image: './assets/images/Top10/4-lostinspace.webp'
    },
    {
      title: "Ricos y Mimados",
      image: './assets/images/Top10/8-ricos.webp'
    },    
  ]
  }

public actionFilms: sectionFilmsInterface = {
  section: "Acción",
  films: [{
    title: "Ejercito de los Muertos",
    image: './assets/images/Accion/ejercitomuertos.jpg'
  },
  {
    title: "El Protector",
    image: './assets/images/Accion/elprotector.webp'
  },
  {
    title: "Kill Bill",
    image: './assets/images/Accion/killbill2.webp'
  },
  {
    title: "John Wick",
    image: './assets/images/Accion/johnwick2.webp'
  },
  {
    title: "El Renacido",
    image: './assets/images/Accion/renacido.webp'
  },
  {
    title: "Terminator 2",
    image: './assets/images/Accion/terminator2.webp'
  }
]
}

public animeFilms: sectionFilmsInterface = {
  section: "Anime",
  films: [{
    title: "El Castillo Ambulante",
    image: './assets/images/Anime/castilloambulante.webp'
  },
  {
    title: "Ajin",
    image: './assets/images/Anime/ajin.jpg'
  },
  {
    title: "La Pricesa Mononoke",
    image: './assets/images/Anime/mononoke.webp'
  },
  {
    title: "Ninokuni",
    image: './assets/images/Anime/ninokuni.jpg'
  },
  {
    title: "Porco Rosso",
    image: './assets/images/Anime/porcorosso.webp'
  },
  {
    title: "Evangelion",
    image: './assets/images/Anime/evangelion.webp'
  }
]
}

public comedyFilms: sectionFilmsInterface = {
  section: "Comedia",
  films: [{
    title: "Juerga Hasta el Fin",
    image: './assets/images/Comedia/juerga.webp'
  },
  {
    title: "El Dictador",
    image: './assets/images/Comedia/dictador.webp'
  },
  {
    title: "Rick and Morty",
    image: './assets/images/Comedia/rickandmorty.webp'
  },
  {
    title: "La Terminal",
    image: './assets/images/Comedia/laterminal.webp'
  },
  {
    title: "Regreso al Futuro",
    image: './assets/images/Comedia/regresofuturo.webp'
  },
  {
    title: "Ted",
    image: './assets/images/Comedia/ted2.webp'
  }
]
}
public dramaFilms: sectionFilmsInterface = {
  section: "Drama",
  films: [{
    title: "El Club de la Lucha",
    image: './assets/images/Drama/clublucha.webp'
  },
  {
    title: "Arrival",
    image: './assets/images/Drama/arrival.webp'
  },
  {
    title: "Culpable",
    image: './assets/images/Drama/culpable.jpg'
  },
  {
    title: "El Precio del Poder",
    image: './assets/images/Drama/scarface.webp'
  },
  {
    title: "Salvar al Soldado Ryan",
    image: './assets/images/Drama/salvaralsoldado.webp'
  },
  {
    title: "La Lista de Schindler",
    image: './assets/images/Drama/schindler.webp'
  }
]
}

public scifiFilms: sectionFilmsInterface = {
  section: "Sci-fi",
  films: [{
    title: "12 Monos",
    image: './assets/images/Sci-fi/12monos.webp'
  },
  {
    title: "Core",
    image: './assets/images/Sci-fi/core.webp'
  },
  {
    title: "Doom",
    image: './assets/images/Sci-fi/doom.webp'
  },
  {
    title: "Watchmen",
    image: './assets/images/Sci-fi/watchmen.webp'
  },
  {
    title: "Star Trek",
    image: './assets/images/Sci-fi/startrek.webp'
  },
  {
    title: "Jumper",
    image: './assets/images/Sci-fi/jumper.webp'
  }
]
}


}
