// Code your solution in this file!
const headquartersBlock = 42
const feetPerBlock = 264

function distanceFromHqInBlocks(block) {
  return math.abs(block - headquartersBlock)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * feetPerBlock
}

function distanceTravelledInFeet(block1, block2) {
  return math.abs((block1 * feetPerBlock) - (block2 * feetPerBlock))
}