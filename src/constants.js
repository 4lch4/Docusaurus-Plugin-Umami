const { name: PluginName } = require('../package.json')

/** The default prefix for all log messages, `[@4lch4/docusaurus-plugin-umami]` */
export const MessagePrefix = `[${PluginName}]:`

/** A string containing a message to "Refer to plugin docs for more info." */
export const DocsReference = 'Refer to plugin docs for more info.'

/**
 * A string containing the message to display when no `umami` property is provided in the
 * [`themeConfig`][0] property of the [`docusaurus.config.js`][1].
 *
 * [0]: https://docusaurus.io/docs/api/docusaurus-config#themeConfig
 * [1]: https://docusaurus.io/docs/api/docusaurus-config
 */
export const NoUmamiObject = `${MessagePrefix} You must specify 'umami' object in 'themeConfig'. ${DocsReference}`

/**
 * A string containing the message to display when no `websiteId` property is provided in the
 * `umami` property of the [`themeConfig`][0] property of the [`docusaurus.config.js`][1].
 *
 * [0]: https://docusaurus.io/docs/api/docusaurus-config#themeConfig
 * [1]: https://docusaurus.io/docs/api/docusaurus-config
 */
export const NoWebsiteId = `${MessagePrefix} You must specify 'websiteId' in 'umami' object in 'themeConfig'. ${DocsReference}`

/**
 * A string containing the message to display when no `src` property is provided in the
 * `umami` property of the [`themeConfig`][0] property of the [`docusaurus.config.js`][1].
 *
 * [0]: https://docusaurus.io/docs/api/docusaurus-config#themeConfig
 * [1]: https://docusaurus.io/docs/api/docusaurus-config
 */
export const NoSrcProperty = `${MessagePrefix} You must specify 'src' property in 'umami' object in 'themeConfig'. ${DocsReference}`
