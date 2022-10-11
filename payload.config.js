import { buildConfig } from 'payload/config';
import Examples from './collections/Examples';
import Movies from './collections/Movies';
import Users from './collections/Users';


export default buildConfig({
  //serverURL: 'http://localhost:3000',
 
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Movies
  ],
  cors: ["https://www.peliculaz.xyz/"],
  csrf: ["https://www.peliculaz.xyz/"],
  
});
