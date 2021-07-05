const idsByPrefix: { [id: string]:number } = {
  id: 0
}

export default function (prefix = 'id') {
  if (prefix in idsByPrefix) {
    idsByPrefix[prefix]++
  } else {
    idsByPrefix[prefix] = 0
  }
  return `${prefix}-${idsByPrefix[prefix]}`
}
