export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Handle SPA routing - serve index.html for all routes
    if (!url.pathname.includes('.')) {
      return env.ASSETS.fetch(new URL('/index.html', request.url));
    }
    
    // Serve static assets normally
    return env.ASSETS.fetch(request);
  }
};
