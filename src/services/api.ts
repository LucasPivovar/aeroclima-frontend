export type Health = { status: string; service?: string; database?: string }
const baseUrl = import.meta.env.VITE_API_BASE_URL ?? '/api/v1'

export async function getHealth(ready = false): Promise<Health> {
  const response = await fetch(`${baseUrl}/health${ready ? '/ready' : ''}`, {
    signal: AbortSignal.timeout(8000),
    headers: { Accept: 'application/json' },
  })
  if (!response.ok) throw new Error('Serviço indisponível. Tente novamente.')
  return response.json() as Promise<Health>
}
