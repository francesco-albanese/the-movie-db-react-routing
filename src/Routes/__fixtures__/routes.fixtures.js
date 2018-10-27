export const pages = [
  {
    'name': 'FavouritesPage',
    'paths': {
      'it': '/it/favoriti',
      'en': '/en/favourites'
    },
    'reference': 'favourites-page',
    'sections': {
      'Favourites': [
        {
          'MyFavourites': {
            'name': {
              'en-GB': 'MyFavourites'
            },
            'lineOne': {
              'it': 'I miei preferiti',
              'en-GB': 'My Favourites'
            }
          }
        }
      ]
    }
  },
  {
    'name': 'HomePage',
    'paths': {
      'it': '/it',
      'en': '/en'
    },
    'reference': 'home-page',
    'sections': {
      'SearchMovies': [
        {
          'SearchMoviesText': {
            'name': {
              'en-GB': 'SearchMoviesText'
            },
            'lineOne': {
              'it': 'Cerca Film',
              'en-GB': 'Search Movies'
            }
          }
        }
      ]
    }
  },
  {
    'name': 'MovieDetailsPage',
    'paths': {
      'it': '/it/film/:movieid',
      'en': '/en/movie/:movieid'
    },
    'reference': 'movie-details-page',
    'sections': {
      'MovieDetails': [
        {
          'Title': {
            'name': {
              'en-GB': 'Title'
            },
            'lineOne': {
              'it': 'Titolo',
              'en-GB': 'Title'
            },
            'lineTwo': {
              'it': 'Citazione',
              'en-GB': 'Tagline'
            }
          }
        },
        {
          'Overview': {
            'name': {
              'en-GB': 'Overview'
            },
            'lineOne': {
              'it': 'Breve Descrizione',
              'en-GB': 'Overview'
            },
            'lineTwo': {
              'it': 'Informazioni',
              'en-GB': 'Information'
            }
          }
        },
        {
          'Genre': {
            'name': {
              'en-GB': 'Genre'
            },
            'lineOne': {
              'it': 'Genere',
              'en-GB': 'Genre'
            },
            'lineTwo': {
              'it': 'Lancio',
              'en-GB': 'Released'
            }
          }
        },
        {
          'Runtime': {
            'name': {
              'en-GB': 'Runtime'
            },
            'lineOne': {
              'it': 'Durata',
              'en-GB': 'Runtime'
            },
            'lineTwo': {
              'it': 'Voto',
              'en-GB': 'Rating'
            }
          }
        },
        {
          'Cast&Crew': {
            'name': {
              'en-GB': 'Cast&Crew'
            },
            'lineOne': {
              'it': 'Squadra produzione',
              'en-GB': 'Cast and crew'
            },
            'lineTwo': {
              'it': 'Attori',
              'en-GB': 'Actors'
            }
          }
        },
        {
          'DirectorsProducers': {
            'name': {
              'en-GB': 'DirectorsProducers'
            },
            'lineOne': {
              'it': 'Regista',
              'en-GB': 'Director'
            },
            'lineTwo': {
              'it': 'Produttori',
              'en-GB': 'Producers'
            }
          }
        }
      ]
    }
  }
]

export const activeLocale = {
  'code': 'en',
  'name': 'English (United Kingdom)',
  'default': true,
  'path': '/en'
}

export const routesConfig = [
  {
    reference: 'home-page',
    exact: true,
    component: (props) => props.children
  },
  {
    reference: 'favourites-page',
    exact: true,
    component: (props) => props.children
  },
  {
    reference: 'movie-details-page',
    exact: true,
    component: (props) => props.children
  },
  {
    reference: 'four-oh-four',
    exact: true,
    path: null,
    component: (props) => props.children
  }
]