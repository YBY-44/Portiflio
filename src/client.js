import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const { REACT_APP_SANITY_P_ID, REACT_APP_SANITY_P_TOKEN } = process.env;

if (!REACT_APP_SANITY_P_ID || !REACT_APP_SANITY_P_TOKEN) {
  throw new Error('Missing SANITY_P_ID or SANITY_P_TOKEN environment variable');
}

export const client = createClient({
    projectId: REACT_APP_SANITY_P_ID,
    dataset: 'production',
    apiVersion: '2024-06-16',
    useCdn: true,
    token: REACT_APP_SANITY_P_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
}

