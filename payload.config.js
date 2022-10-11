import { buildConfig } from 'payload/config';
import Examples from './collections/Examples';
import Movies from './collections/Movies';
import Users from './collections/Users';



export default buildConfig({
  //serverURL: 'http://localhost:3000',
 
  admin: {
    user: Users.slug,
    meta:{
      titleSuffix: 'peliculaz',
      favicon: 'https://imagenes-peliculaz.s3.amazonaws.com/peliculaZ-logo.svg',
      ogImage: 'https://imagenes-peliculaz.s3.amazonaws.com/peliculaZ-logo.png'
    },
    
    
  },
  collections: [
    Users,
    Movies
  ],
  cors: '*',
  csrf: ["https://www.peliculaz.xyz/"],
  
});
