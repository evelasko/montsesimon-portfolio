
const PORTADA_QUERY = `
{
  portada(id: "4yFkfSGA8e0Bp3ofZfk7nH") {
    tituloPrincipal
    listaAnimadaFrontal
    videoPortada {
      url
    }
    imagenPortada {
      url
    }
    tituloBio
    subtituloBio {
      json
    }
    bio {
      json
    }
    detallesBioCollection {
      items {
        etiqueta
        dato
      }
    }
    cv {
      url
    }
    imagenBio {
      url
    }
    tituloTrabajos
    subtituloDeTrabajos
    tituloContacto
    subtituloDeContacto
    direccionPostal
    direccionesDeEmail
    numerosDeTelefono
    facebook
    instagram
    linkedin
    youtube
  }
  categoriasCollection(limit: 100) {
    items {
      nombre
    }
  }
  productsCollection(limit: 8) {
    items {
      titulo
      subtitulo
      categoriasCollection {
        items {
          nombre
        }
      }
      imagenPrincipal {
        url
      }
      descripcion {
        json
        links {
          assets {
            hyperlink {
              url
            }
          }
        }
      }
    }
  }
  carrera(id: "DUtew5pqlgjPdnZgrK5M2") {
    educacionCollection {
      items {
        tiempo
        titulo
        detalle
      }
    }
    experienciaCollection {
      items {
        tiempo
        titulo
        detalle
      }
    }
    habilidadesCollection {
      items {
        habilidad
        capacidad
      }
    }
  }
  testimoniosCollection {
    items {
      orden
      nombre
      contenido
      evaluacion
      imagen {
        url
      }
    }
  }
}`;

export default PORTADA_QUERY;