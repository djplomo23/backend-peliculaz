
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
        
    ]
    }
  ]
};



const Series = {
  slug: 'series',
  access: {
    read: () => true,
    create: () => true
  },
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
        name: 'time',
        type: 'text'
      },
      {
        name: 'image', // required
        type: 'upload', // required
        relationTo: 'media', // required
        required: true,
        
        //hooks: {afterRead: [({data: doc}) => (`https://imagenes-peliculaz.s3.amazonaws.com/${req.file.name}`)]},
        
        
      },
    {
      name: 'series', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 30,
      blocks: [ // required
      Temporadas
      ]
    }
    
  ]
}


export default Series