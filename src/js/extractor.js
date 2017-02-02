export default ({content, parliamentarians}) => {
  // magic logic
  // console.log(content)
  const textIndex = content.split(' ').reduce(
    (index, word, i) => {
      index[word] = index[word] || []
      index[word].push(i)
      return index
    },
    {}
  )

  const lastNames = parliamentarians.map(parl => parl.lastName)
  const parlIds = parliamentarians.reduce(
    (index, parl) => {
      index[parl.lastName] = parl.id
      return index
    },
    {}
  )
  const matches = lastNames.filter(ln => textIndex[ln]).map(ln => ({matches: textIndex[ln], parlId: parlIds[ln]}))
  // console.log(matches)
  return matches.map(match => match.parlId)
}
