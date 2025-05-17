const isProd = import.meta.env.PROD;
export const DOMAIN_ROUTE = isProd
  ? "production-route"
  : "http://localhost:8000";
