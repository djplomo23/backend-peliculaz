const Media = {
    slug: 'media',
    access: {
      read: () => true,
      create: () => true
    },
    upload: {
      staticURL: '',
    staticDir: '',
      disableLocalStorage: true,
      s3: {
        bucket: 'peliculaz',
        prefix: '', // files will be stored in bucket folder images/xyz
        // prefix: ({ doc }) => `assets/${doc.type}`, // dynamic prefixes are possible too
        commandInput: {
          // optionally, use here any valid PutObjectCommandInput property
          // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/putobjectcommandinput.html
          //ACL: 'public-read',  
          
        },
      },
      
      adminThumbnail: ({ doc }) =>
        `https://peliculaz.s3.amazonaws.com/${doc.filename}`,
        
        
    },
    fields: [
      {
        name: 'url',
        type: 'text',
        access: {
          create: () => false,
        },
        admin: {
          disabled: true,
        },
        hooks: {
          afterRead: [
            ({ data: doc }) =>
            `https://peliculaz.s3.amazonaws.com/${doc.filename}`,
          ],
        },
      },
    ],
   
  };
  
  export default Media;