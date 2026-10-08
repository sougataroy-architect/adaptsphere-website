# Security

No form endpoint, CMS, third-party tracking, cookies or client-side credentials are included. Security headers disable framing, MIME sniffing and unused browser permissions. CSP restricts objects, frames, base URI and form destinations; it is not a complete script policy. Implement and validate script hashes/nonces on staging before enforcing script-src. Next.js JSON-LD escapes less-than characters. Use HTTPS, current Node runtime and dependency updates. Do not place environment secrets in source or screenshots. Verify final Hostinger response headers and redirect behavior.
