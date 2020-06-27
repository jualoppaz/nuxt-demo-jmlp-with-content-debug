import Vue from 'vue'
import NuxtContent from './nuxt-content'

Vue.component(NuxtContent.name, NuxtContent)

export default (ctx, inject) => {
  console.log('==========> Entramos en el plugin.server.js')

  const $content = ctx.ssrContext.$content

  inject('content', $content)
  ctx.$content = $content

  console.log('==========> Salimos del plugin.server.js')
}
