const Movies = {
  slug: 'movies',
  access: {
    read: () => true,
    create: () => true
  },
  fields: [
    {
      name: 'title',
      type: 'text'
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
      name: 'pelisLink',
      type: 'group',
      fields: [
        {
          name: 'netu',
          type: 'text'
        },
        {
          name: 'streamsb',
          type: 'text'
        },
      ]
    },
    {
      name: 'image', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
      
      //hooks: {afterRead: [({data: doc}) => (`https://imagenes-peliculaz.s3.amazonaws.com/${req.file.name}`)]},
      
      
    },
      
  
   
    
  ],
};

export default Movies;