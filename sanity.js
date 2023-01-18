import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: "wldop1mm",
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

const builder = imageUrlBuilder(config);

function urlFor(source) {
  return builder.image(source);
}

export const sanityClient = createClient(config);