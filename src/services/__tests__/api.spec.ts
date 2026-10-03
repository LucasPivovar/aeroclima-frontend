import { afterEach, describe, expect, it, vi } from 'vitest'
import { getHealth } from '../api'

afterEach(() => vi.unstubAllGlobals())
describe('Cliente da API', () => {
  it('consulta o readiness no prefixo configurado', async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue({
      ok: true,
      json: async () => ({ status: 'ok', database: 'up' }),
    } as Response)
    vi.stubGlobal('fetch', fetchMock)
    await expect(getHealth(true)).resolves.toEqual({ status: 'ok', database: 'up' })
    expect(fetchMock.mock.calls[0]?.[0]).toBe('/api/v1/health/ready')
  })
  it('trata respostas HTTP de falha', async () => {
    vi.stubGlobal('fetch', vi.fn<typeof fetch>().mockResolvedValue({ ok: false } as Response))
    await expect(getHealth()).rejects.toThrow('Serviço indisponível')
  })
})
