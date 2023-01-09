import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s – Docs LoArt & Dev'
      }
    }
  },
  logo: <span>Docs - LoArt & Dev</span>,
  project: {
    link: 'https://github.com/SimonLopezJara/Docs-LoArtDev',
  },
  chat: {
    link: 'https://discord.gg/fzANSPZvCh',
  },
  docsRepositoryBase: 'https://github.com/SimonLopezJara/Docs-LoArtDev/tree/main',
  footer: {
    text: 'Docs - LoArt & Dev',
  },
}

export default config
