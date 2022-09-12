import axios from 'axios';
import { Agent } from 'https';
export function getAPICliente(ctx?: unknown) {
  const httpsAgent = new Agent({
    rejectUnauthorized: false //
  });

  const api = axios.create({
    baseURL: 'http://localhost:3333',
    httpsAgent
  });
  return api;
}
export const api = getAPICliente();
