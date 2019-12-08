const config = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || 'bolt://localhost',
    port: process.env.DB_PORT || '7687',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  }
}

export type Config = typeof config

export default config