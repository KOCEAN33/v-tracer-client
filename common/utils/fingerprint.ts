import FingerprintJS from '@fingerprintjs/fingerprintjs';

export default (async () => {
  // Get the visitor identifier when you need it.
  if (typeof window !== 'undefined') {
    // Initialize an agent at application startup.
    const fpPromise = FingerprintJS.load();
    const fp = await fpPromise;
    const result = await fp.get();
    // This is the visitor identifier:
    return result.visitorId;
  }
})();
