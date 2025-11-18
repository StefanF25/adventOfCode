export const checkRules = (str: string): boolean => {
  const vowelRegex = /(\w*[aeuio]\w*){3,}/i
  const doubleRegex = /([a-z])\1/i
  const exceptionRegex = /(ab|cd|pq|xy)+/i

  const vowelMatch = vowelRegex.test(str)
  const doubleMatch = doubleRegex.test(str)
  const exceptionMatch = exceptionRegex.test(str)

  return vowelMatch && doubleMatch && !exceptionMatch
}

export const checkRules2 = (str: string): boolean => {
  const rule1Regex = /([a-z]{2}).*\1/
  const rule2Regex = /([a-z]).\1/

  const rule1Match = rule1Regex.test(str)
  const rule2Match = rule2Regex.test(str)

  return rule1Match && rule2Match
}
