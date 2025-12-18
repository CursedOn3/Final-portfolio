import { generateIconUrls } from "../lib/utils";

export const BACKEND_IMAGES = generateIconUrls([
  // Languages
  "nodejs",
  "python",
  "java",

  // Frameworks
  "express",
  "django",
  "fastapi",
  "nestjs",


  // Auth & Security
  "jwt",
  "oauth",
  "bcrypt",

  // APIs & Communication
  "rest",
  "graphql",
  "websocket",

  // DevOps & Infrastructure
  "docker",
  "nginx",
  "kubernetes",

  // Tools
  "postman",
  "swagger",
]);
