const Users = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    create: () => true
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;