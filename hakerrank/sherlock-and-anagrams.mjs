[
  'abba',
  'kkkk',
  ((new Array(100)).fill('a').join('')),
].forEach((str) => console.log(str, sherlockAndAnagrams(str)))

function sherlockAndAnagrams(s) {
  const combinationsMemo = {}
  let cnt = 0
  for (let len = 1; len <= s.length - 1; len++) {
    cnt += count(s, len)
  }
  return cnt

  function count(s, len) {
    const stats = {}
    for (let i = 0; i <= s.length - len; i++) {
      const key = [...s.substr(i, len)].sort().join('')
      stats[key] = (stats[key] || 0) + 1
    }
    let cnt = 0
    Object.values(stats)
      .filter(v => v > 1)
      .forEach(v => cnt += combinations(v))
    return cnt
  }

  function combinations(n) {
    if (!combinationsMemo[n]) {
      if (n === 2) {
        return 1
      }
      const m = 2
      combinationsMemo[n] = factorial(n) / (factorial(n - m)) / factorial(m)
    }
    return combinationsMemo[n]
  }

  function factorial(n) {
    let res = n
    let number = n - 1
    while (number > 0) {
      res *= number
      number--
    }
    return res
  }
}
