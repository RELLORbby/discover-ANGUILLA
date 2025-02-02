
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    // Use the base path for GitHub Pages
    paths: {
      // Ensure this path is a root-relative path and doesn't end with a slash
      base: process.env.NODE_ENV === 'production' ? '/discover-ANGUILLA' : ''
    },
    adapter: adapter({strict: false}),
  }
};