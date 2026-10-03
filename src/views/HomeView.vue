<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getHealth } from '@/services/api'

const state = ref<'loading' | 'ready' | 'error'>('loading')
const checking = ref(false)
async function checkServices() {
  if (checking.value) return
  checking.value = true
  state.value = 'loading'
  try {
    await Promise.all([getHealth(), getHealth(true)])
    state.value = 'ready'
  } catch {
    state.value = 'error'
  } finally {
    checking.value = false
  }
}
onMounted(checkServices)
</script>

<template>
  <main class="page">
    <header>
      <a class="brand" href="/">AeroClima<span>Planeje. Explore. Viaje.</span></a
      ><span class="badge">Em desenvolvimento</span>
    </header>
    <section class="hero">
      <p class="eyebrow">Sua próxima viagem começa aqui</p>
      <h1>Mais tempo para<br />aproveitar o caminho.</h1>
      <p class="intro">
        Voos, hospedagens, lugares e rotas reunidos para acompanhar cada etapa da sua viagem.
      </p>
      <div class="status" aria-live="polite">
        <span :class="['dot', state]"></span>
        <span v-if="state === 'loading'">Verificando conexão…</span>
        <span v-else-if="state === 'ready'">Ambiente conectado. Pronto para começar.</span>
        <span v-else>A conexão está indisponível no momento.</span>
      </div>
      <button :disabled="checking" @click="checkServices">
        {{ checking ? 'Verificando…' : 'Verificar conexão' }}
      </button>
    </section>
    <section class="features" aria-label="Funcionalidades planejadas">
      <article>
        <span>01 / ORGANIZE</span>
        <h2>Seu roteiro, em um lugar</h2>
        <p>Compromissos, voos e hospedagens organizados por dia.</p>
      </article>
      <article>
        <span>02 / DESCUBRA</span>
        <h2>Encontre seu próximo destino</h2>
        <p>Salve lugares e transforme ideias em planos de viagem.</p>
      </article>
      <article>
        <span>03 / EXPLORE</span>
        <h2>Leve o caminho com você</h2>
        <p>Mapas e rotas offline fazem parte da evolução planejada.</p>
      </article>
    </section>
    <footer>
      Uma base para novas jornadas. As funcionalidades de viagem serão construídas nas próximas
      etapas.
    </footer>
  </main>
</template>
