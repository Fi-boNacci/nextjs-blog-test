const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.NODE_ENV === "production",
});

export const previewClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token:
    "skHMIQ6abQa9b9V24DsEurg08UCJl31KYH8zhmwTIJKOkTkq3FCGfYtlvSyn04wmpFGl5uA9Ap1j5uX5bdl3wONTP1P9Vb40lEh73rUbhMEtGsPXbOaSbTgYDGzDnh0saUPbdGVEif8WRoS9Yhkm4jo2SLJF3UuoQztTKpUbUeJIhJpJmZLf",
});
export default client;
