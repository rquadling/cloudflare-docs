
process.stdin.on('data', chunk => {
  let changedProducts = new Set(  )
  // let changedProducts = []
  let transformedProducts =  chunk.toString().trim().split(" ")
  transformedProducts.forEach(product => {
    let splittedStr = product.split("/")
    let pr = splittedStr[1]

    // console.log('the pr', pr)
    // changedProducts.push(productStr)
    if (!changedProducts.has(pr)) {
        changedProducts.add(pr)
    }
  
  
  })

let arr = [...changedProducts]

  console.log('changed Products', arr)
  return arr
})

// rules, waf
  
  process.stdin.on('end', () => process.exit(0))