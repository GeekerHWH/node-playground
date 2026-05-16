export default class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

  static FromArray(array: number[]): ListNode | null{
    let dummy = new ListNode(0)
    let tail = dummy.next
    for (let elem of array) {
      let tempNode = new ListNode(elem)
      if (!tail) {
        dummy.next = tempNode
        tail = dummy.next
      } else {
        tail.next = tempNode
        tail = tail.next
      }
    }
    return dummy.next
  }

  static toArray(ptr: ListNode | null): number[]{
    if (ptr === null) {
      return []
    }
    let res: number[] = []
    while (ptr !== null) {
      res.push(ptr.val)
      if (ptr.next === null) {
        break
      }
      ptr = ptr.next
    }
    return res
  }
}

// TODO: build binary search tree using (sorted) array from root to leaf
