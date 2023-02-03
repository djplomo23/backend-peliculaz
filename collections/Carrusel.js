const Carrusel = {
  slug: 'carrusel',
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
      name: 'link',
      type: 'text'
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

export default Carrusel;