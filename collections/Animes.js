
const Episodios = {
    slug: 'episodios', // required
    imageURL: 'https://google.com/path/to/image.jpg',
    imageAltText: 'A nice thumbnail image to show what this block looks like',
    fields: [ // required
      {
        name: 'episodios',
        type: 'text',
        required: true,
      },
      {
        name: 'netu',
        type: 'text',
        required: true,
      },
      {
        name: 'streamsb',
        type: 'text',
        required: true,
      },
    ]
  };


const Temporadas = {
    slug: 'temporada', // required
    imageURL: 'https://google.com/path/to/image.jpg',
    imageAltText: 'A nice thumbnail image to show what this block looks like',
    fields : [
     
        {
        name: 'episodios',
        type: 'blocks',
        minRows: 1,
        maxRows: 30,
        blocks: [
            Episodios
        ]
        }
      ]
  };

const QuoteBlock = {
  slug: 'archivos', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  fields : [
    {
    name: 'temporadas',
    type: 'blocks',
    minRows: 1,
    maxRows: 30,
    blocks: [
        Temporadas
    ]
    }
  ]
};



const Animes = {
  slug: 'animes',
  fields: [
     {
        name: 'title', // required
        type: 'text', // required
       
      },
      {
        name: 'description',
        type: 'text'
      },
      {
        name: 'info',
        type: 'group',
        fields: [
          {
            name: 'origialTitle',
            type: 'text'
          },
          {
            name: 'director',
            type: 'text'
          },
          {
            name: 'generos',
            type: 'text'
          },
          {
            name: 'actores',
            type: 'text'
          },
        ]
      },
      {
        name: 'years',
        type: 'text'
      },
      {
        name: 'season',
        type: 'text'
      },
      {
        name: 'episode',
        type: 'text'
      },
      {
        name: 'image',
        type: 'text'
      },
    {
      name: 'animes', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 1,
      blocks: [ // required
       QuoteBlock
      ]
    }
    
  ]
}


export default Animes