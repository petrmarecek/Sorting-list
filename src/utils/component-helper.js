import { List } from 'immutable'

export function mergeSort(list) {
  if (list.size === 1) {
    return list
  }

  let checkedNumberList = List()
  let checkedDefaultList = List()
  let numberList = List()
  let defaultList = List()

  for (const item of list) {
    // checked items
    if (item.isChecked) {
      if (item.isNumber) {
        checkedNumberList = checkedNumberList.push(item)
        continue
      }

      checkedDefaultList = checkedDefaultList.push(item)
      continue
    }

    // unchecked items
    if (!item.isChecked) {
      if (item.isNumber) {
        numberList = numberList.push(item)
        continue
      }

      defaultList = defaultList.push(item)
      continue
    }
  }

  // merge sort and concat result
  return splitList(checkedNumberList)
    .concat(splitList(checkedDefaultList))
    .concat(splitList(numberList))
    .concat(splitList(defaultList))
}

function splitList(list) {
  if (list.size <= 1) {
    return list
  }

  // left and right side of list
  const middle = Math.floor(list.size / 2)
  const leftList = list.slice(0, middle)
  const rightList = list.slice(middle)

  // merge left and right side of list
  return merge(splitList(leftList), splitList(rightList))
}

function merge(leftList, rightList) {
  let result = List()
  let indexLeft = 0
  let indexRight = 0

  // sorting items of list
  while (indexLeft < leftList.size && indexRight < rightList.size) {
    const leftItem = leftList.get(indexLeft)
    const rightItem = rightList.get(indexRight)

    // number type
    if (leftItem.isNumber && rightItem.isNumber) {
      leftItem.value = Number(leftItem.value)
      rightItem.value = Number(rightItem.value)
    }

    if (leftItem.value < rightItem.value) {
      leftItem.value = String(leftItem.value)
      result = result.push(leftItem)
      indexLeft++
    } else {
      rightItem.value = String(rightItem.value)
      result = result.push(rightItem)
      indexRight++
    }
  }

  // concat sorting left and right side of list
  return result.concat(leftList.slice(indexLeft)).concat(rightList.slice(indexRight))
}
