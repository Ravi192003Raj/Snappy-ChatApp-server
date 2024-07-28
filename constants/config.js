const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://snappychatapp-73l823nyd-ravi-rajs-projects-f79ece4d.vercel.app",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const SNAPPY_TOKEN = "Snappy-token";

export { corsOptions, SNAPPY_TOKEN };
