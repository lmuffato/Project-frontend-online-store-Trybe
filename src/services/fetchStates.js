export default async function fetchCities() {
  const response = await fetch(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`,
  );
  const data = await response.json();
  return data;
}
