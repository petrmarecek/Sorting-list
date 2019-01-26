import { List } from 'immutable'

export function mergeSort(list) {
  if (list.size === 1) {
    return list
  }

  const middle = Math.floor(list.size / 2)
  const leftList = list.slice(0, middle)
  const rightList = list.slice(middle)

  return merge(mergeSort(leftList), mergeSort(rightList))
}

function merge(leftList, rightList) {
  let result = List()
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < leftList.size && indexRight < rightList.size) {
    const leftValue = leftList.get(indexLeft)
    const rightValue = rightList.get(indexRight)

    if (leftValue < rightValue) {
      result = result.push(leftValue)
      indexLeft++
    } else {
      result = result.push(rightValue)
      indexRight++
    }
  }

  return result
    .concat(leftList.slice(indexLeft))
    .concat(rightList.slice(indexRight))
}
