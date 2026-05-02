import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "Lineamientos Vue.js",
  description: "Lineamientos de Desarrollo para Aplicaciones Vue",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Menu principal',
        items: [
          { text: 'Introducción', link: '/introduccion' },
          { text: 'Componentes', link: '/componentes' },
          { text: 'Errores comunes', link: '/errores-comunes' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/davicotico' }
    ]
  }
})
