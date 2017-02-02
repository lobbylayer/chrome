export default ({content, parliamentarians}) => {
  // magic logic
  // console.log(content)
  const tokens = content.split(/\s+/)
  const textIndex = tokens.reduce(
    (index, word, i) => {
      index[word] = index[word] || []
      index[word].push(i)
      return index
    },
    {}
  )
  console.log(textIndex)

  const lastNames = parliamentarians.map(parl => parl.lastName)
  // const fullNames = parliamentarians.map(parl => parl.name)

  const parlIds = parliamentarians.reduce(
    (index, parl) => {
      index[parl.name] = parl.id
      return index
    },
    {}
  )

  const candidates = lastNames.filter(ln => textIndex[ln]).map(ln => ({matches: textIndex[ln], lastName: ln}))
  // only find candidates where prename is also available
  let matches = []
  console.log(candidates)
  for (const candidate in candidates) {
    // go through each candidate and its matches in the textIndex
    let finalMatchesPerCandidate = []
    candidates[candidate].matches.forEach((idx) => {
      const fullNameCandidate = tokens[idx - 1] + ' ' + tokens[idx]
      console.log(fullNameCandidate)
      // TODO: not only look for exact matches but also where fullNameCandidate contains a real name
      let finalMatchPerCandidate = {}
      if (parlIds[fullNameCandidate] !== undefined) {
        finalMatchPerCandidate.parlId = parlIds[fullNameCandidate]
        finalMatchPerCandidate.lastNameIdx = idx
        finalMatchPerCandidate.firstNameIdx = idx - 1
      }
      finalMatchesPerCandidate.push(finalMatchPerCandidate)
    })
    // combine all these finalMatchesPerCandidate into matches array, but only those that are not undefined
    matches = matches.concat(finalMatchesPerCandidate)
  }
  // reduce to contain only unique pms (for the current use case, anyway)
  let finalMatches = [...new Set(matches.map(parl => parl.parlId))].filter(val => val !== undefined)

  console.log(finalMatches)

  return finalMatches
}
