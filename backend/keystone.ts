import 'dotenv/config';
import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schemas/User';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';


const databaseURL = process.env.DATABASE_URL || '';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: Add in initial roles
  }
});

export default withAuth(
  // @ts-ignore
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
    },
    lists: createSchema({
      User
    }),
    ui: {
      // Show the ui only to people who pass this test
      isAccessAllowed: ({ session }) => {
        console.log(session);
        return !!session?.data
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id name email`
    })
  })
);
