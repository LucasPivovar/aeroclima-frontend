// Importe esta função somente na futura página de mapa.
// O estilo deve vir de um fornecedor que permita o uso desejado.
export async function createMap(container: HTMLElement, styleUrl: string) {
  const { Map } = await import('maplibre-gl')
  await import('maplibre-gl/dist/maplibre-gl.css')
  return new Map({ container, style: styleUrl, center: [-49.27, -25.43], zoom: 10 })
}
