/** @type {import('next').NextConfig} */

const path = require("path");
const ContentSecurityPolicy = `
  upgrade-insecure-requests;
`;

// Es posible revisar las politicas de Seguridad
// En la siguiente URL https://securityheaders.com/
const securityHeaders = [
  {
    key: "Strict-Transport-Security", // This header informs browsers it should only be accessed using HTTPS, instead of using HTTP.
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options", // This header indicates whether the site should be allowed to be displayed within an iframe.
    value: "DENY",
  },
  // When performing a same-origin request to the same protocol level (HTTP→HTTP, HTTPS→HTTPS),
  // send the origin, path, and query string.
  // Send only the origin for cross origin requests and requests to less secure destinations (HTTPS→HTTP).
  {
    key: "Referrer-Policy",
    value: "no-referrer-when-downgrade",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self)",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  // This protection is not necessary when sites implement a strong Content-Security-Policy
  // disabling the use of inline JavaScript ('unsafe-inline'),
  // it can still provide protection for older web browsers that don't support CSP.
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];
const nextConfig = {
  async headers() {
    return [
      {
        // Apply securityHeaders to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Apply securityHeaders to Home path
        source: "/",
        headers: securityHeaders,
      },
    ];
  },
  reactStrictMode: true,
  sassOptions: {
    /* prependData nos permite inyectar el string que le pasemos
    en la cabecera de todos los archivos .scss
    y asi poder usar los mixins, variables, etc en los .module.scss */
    prependData: `@import '@/styles/config.scss';`,
    includePaths: [path.join(__dirname, "styles")],
    /* con functions obtenemos la info de las variables de entorno
  para inyectar como variables de css */
  },
};

module.exports = nextConfig;
