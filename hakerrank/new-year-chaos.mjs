[
  [2,1,5,3,4],
].forEach(minimumBribes)

function minimumBribes(q) {
  let max = 0
  let missing = []
  let cnt = 0
  for (let i = 0; i < q.length; i++) {
    const current = q[i]
    const diff = current - max
    if (diff > 3) {
      console.log('Too chaotic')
    }
    missing = missing.filter(number => number !== current)
    if (diff === 2) {
      missing.push(current - 1)
    }
    if (diff === 3) {
      missing.push(current - 2)
    }
    cnt += missing.filter(number => number < current).length
    max = Math.max(max, current)
  }
  console.log(cnt)
}
