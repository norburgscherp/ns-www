/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function (doc) {
  
  // Making "lang" work with i18n
  let lang = doc.lang.substring(0, 2)

  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'startpage') {
    return '/'
  }

  if (doc.type === 'page') {
    return '/' + lang + '/page/' + doc.uid
  }

  if (doc.type === 'people') {
    return '/' + lang + '/people/'
  }

  if (doc.type === 'person') {
    return '/' + lang + '/people/' + doc.uid
  }

  return '/not-found'
}
