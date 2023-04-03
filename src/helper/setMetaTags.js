export const setMetaTags = (res) => {
  document.title = `${
    res?.seo_title ? res.seo_title : res.title
  } | Shoolini University`
  document
    .querySelector('meta[name="description"]')
    .setAttribute('content', res?.seo_description)
  document
    .querySelector('meta[name="keywords"]')
    .setAttribute('content', res?.seo_keywords)
}

export const resetMetaTags = () => {
  document.title = 'Shoolini University'
  document.querySelector('meta[name="description"]').setAttribute('content', '')
  document.querySelector('meta[name="keywords"]').setAttribute('content', '')
}
