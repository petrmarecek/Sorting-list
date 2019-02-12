import { List } from 'immutable'

export function mergeSort(list) {
  if (list.size <= 1) {
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
    const leftItem = leftList.get(indexLeft)
    const rightItem = rightList.get(indexRight)

    if (comparator(leftItem, rightItem) <= 0) {
      leftItem.value = String(leftItem.value)
      result = result.push(leftItem)
      indexLeft++
    } else {
      rightItem.value = String(rightItem.value)
      result = result.push(rightItem)
      indexRight++
    }
  }

  return result.concat(leftList.slice(indexLeft)).concat(rightList.slice(indexRight))
}

function comparatorChecked(leftItem, rightItem) {
  if (leftItem.isChecked && rightItem.isChecked) {
    const numberCmp = comparatorNumber(leftItem, rightItem)
    const valueCmp = comparatorValue(leftItem, rightItem)

    return numberCmp !== null ? numberCmp : valueCmp
  }

  return rightItem.isChecked ? 1 : leftItem.isChecked ? -1 : null
}

function comparatorNumber(leftItem, rightItem) {
  if (leftItem.isNumber && rightItem.isNumber) {
    leftItem.value = Number(leftItem.value)
    rightItem.value = Number(rightItem.value)

    return comparatorValue(leftItem, rightItem)
  }

  return rightItem.isNumber ? 1 : leftItem.isNumber ? -1 : null
}

function comparatorValue(leftItem, rightItem) {
  return leftItem.value < rightItem.value
    ? -1
    : leftItem.value > rightItem.value
    ? 1
    : 0
}

function comparator(leftItem, rightItem) {
  const checkedCmp = comparatorChecked(leftItem, rightItem)
  const numberCmp = comparatorNumber(leftItem, rightItem)
  const valueCmp = comparatorValue(leftItem, rightItem)

  return checkedCmp !== null ? checkedCmp : numberCmp !== null ? numberCmp : valueCmp
}
