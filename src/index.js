import { NoSrcProperty, NoUmamiObject, NoWebsiteId } from './constants'
import { logger } from '@4lch4/logger'

export default function (context) {
  const { siteConfig } = context
  const { themeConfig } = siteConfig
  const { umami } = themeConfig || {}

  if (!umami) throw new Error(NoUmamiObject)

  if (!umami.websiteId) throw new Error(NoWebsiteId)
  if (!umami.src) throw new Error(NoSrcProperty)

  return {
    name: PluginName,

    injectHtmlTags() {
      logger.debug(`[${this.name}#injectHtmlTags]: Injecting Umami script...`)

      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              async: true,
              defer: true,
              'data-website-id': umami.websiteId,
              src: umami.src,
            },
          },
        ],
      }
    },
  }
}
