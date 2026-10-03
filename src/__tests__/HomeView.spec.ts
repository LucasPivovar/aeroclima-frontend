import { afterEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import HomeView from '../views/HomeView.vue'

afterEach(() => vi.unstubAllGlobals())
describe('Página inicial', () => {
  it('mostra disponibilidade quando API e banco respondem', async () => {
    vi.stubGlobal(
      'fetch',
      vi
        .fn<typeof fetch>()
        .mockResolvedValue({ ok: true, json: async () => ({ status: 'ok' }) } as Response),
    )
    const wrapper = mount(HomeView)
    await flushPromises()
    expect(wrapper.text()).toContain('Ambiente conectado')
    wrapper.unmount()
  })
  it('permite repetir uma verificação que falhou', async () => {
    const fetchMock = vi.fn<typeof fetch>().mockRejectedValue(new Error('offline'))
    vi.stubGlobal('fetch', fetchMock)
    const wrapper = mount(HomeView)
    await flushPromises()
    expect(wrapper.text()).toContain('conexão está indisponível')
    fetchMock.mockResolvedValue({ ok: true, json: async () => ({ status: 'ok' }) } as Response)
    await wrapper.get('button').trigger('click')
    await flushPromises()
    expect(wrapper.text()).toContain('Ambiente conectado')
    wrapper.unmount()
  })
})
