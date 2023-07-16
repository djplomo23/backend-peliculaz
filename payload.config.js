import { buildConfig  } from 'payload/config';
import Animes from './collections/Animes';
import Movies from './collections/Movies';
import Series from './collections/Series';
import Users from './collections/Users';
import Login from './component/BeforeLogin'
import s3Upload from 'payload-s3-upload';
import Media from './collections/Media';
import Carrusel from './collections/Carrusel';




export default buildConfig({
  //serverURL: 'http://localhost:4000',

 
 
  admin: {
    user: Users.slug,
    meta:{
      titleSuffix: 'peliculaz',
      favicon: 'https://imagenes-peliculaz.s3.amazonaws.com/favicon.png',
      ogImage: 'https://imagenes-peliculaz.s3.amazonaws.com/peliculaZ-logo.svg'
    },   
  },

  collections: [
    Users,
    Movies,
    Series,
    Animes,
    Media,
    Carrusel,
    
  ],
 

  cors: '*',
  plugins: [
    s3Upload({
      region: 'us-east-1',
      credentials: {
        accessKeyId: process.env.ACCESS_KEY_S3,
        secretAccessKey: process.env.SECRET_ACCESS_KEY_S3,
      },
    }),
  ],
  
});
