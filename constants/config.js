const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const SNAPPY_TOKEN = "Snappy-token";

export { corsOptions, SNAPPY_TOKEN };
