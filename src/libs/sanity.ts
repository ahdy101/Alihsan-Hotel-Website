import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN, // Only needed if writing to the dataset
  apiVersion: "2023-05-03" // Use current date or your preferred API version
});

export default sanityClient;