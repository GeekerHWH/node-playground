import assert from 'node:assert/strict';
import { test } from 'node:test';

function canFormTriangle(...nums: number[]): boolean{
  if (nums.length !== 3) {
    return false
  }
  if (nums[0] + nums[1] > nums[2] && nums[2] - nums[0] < nums[1]) {
    return true
  } else {
    return false
  }
}

function largestPerimeter(nums: number[]): number {
  if (nums.length < 3) {
    return 0
  }
  nums.sort((a,b)=>{return a-b})
  let max: number = 0
  for (let i = 2; i < nums.length; i++){
    if (canFormTriangle(nums[i - 2], nums[i - 1], nums[i])) {
      max = Math.max(max, nums[i - 2] + nums[i - 1]+ nums[i])
    }
  }
  return max
};

export default function testAll(): void{
  // test('Case 1', t => {
  //   let nums = [2, 1, 2]
  //   assert.equal(largestPerimeter(nums), 5, 'should be 5')
  // })
  // test('Case 2', t => {
  //   let nums = [1, 2, 1, 10]
  //   assert.equal(largestPerimeter(nums), 0, 'should be 0')
  // })
  test('Case 3', t => {
    let nums = [3,2,3,4]
    assert.equal(largestPerimeter(nums), 10, 'should be 10')
  })
}
