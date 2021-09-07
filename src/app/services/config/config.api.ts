import { HttpHeaders } from '@angular/common/http';

export const apiToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTMxOWVlNWE5MDUzOTAwMjFiNzBiMjIiLCJpYXQiOjE2MzA2NDE4OTR9.axNieH2FmX1CVjccsGZTecOnfAR7oy2-5nYmy1qjmWw';

export const header: HttpHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${apiToken}`,
});
