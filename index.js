const z2 = () => {
  const arr = Array.prototype.slice.call(document.querySelectorAll(".bgs-table__row"))
  const res = {}
  arr.forEach((item, i) => {
    const name = item.querySelector("span")?.textContent
    const val = item.querySelector(".bgs-table-cell__value")?.textContent
    if (name && val) {
      res[name] = val
    }
  });
  const result = prompt(`Давай своих персов ${arr.length}`, '').split(', ')
  let sort = [];

  for (let herI of result) {
    for (let resI in res) {
      if (resI.toLowerCase().indexOf(herI) >= 0) {
        sort = [...sort, { name: resI, val: res[resI] }]
      }
    }
  }

  sort.sort((a, b) => {
    if (a.val > b.val) {
      return 1
    } else if (a.val < b.val) {
      return -1
    } else {
      return 0
    }
  })
  console.log(sort)
  str = ''
  sort.forEach((item, i) => {
    str += `
    ${item.name} - ${item.val}`
  });

  alert(str)
  z2()
}
