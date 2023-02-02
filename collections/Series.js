
const Episodios = {
    slug: 'episodios', // required
    access: {
      read: () => true,
      create: () => true
    },
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



const Series = {
  slug: 'series',
  fields: [
    {
        name: 'title', // required
        type: 'text', // required
       
      },
    {
      name: 'series', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 1,
      blocks: [ // required
       QuoteBlock
      ]
    }
    
  ]
}


export default Series