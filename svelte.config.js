import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
		strict: false
	}),
    paths: {
      base: '/discover-ANGUILLA'
    },
  },
};

export default config;

