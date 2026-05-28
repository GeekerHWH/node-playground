export default class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

  // for even number of nodes, result will be the one smaller than just the middle
  // for odd number of node, result will be just the middle one
  findMiddle(): ListNode | null{
    if (this === null) {
      return null
    }
    let dummy:ListNode|null = new ListNode(0, this)
    let pior:ListNode|null = dummy, mid:ListNode|null = dummy
    while (pior !== null && pior!.next !== null) {
      pior = pior.next.next
      mid = mid!.next
    }
    return mid
  }

  static reverseList(head: ListNode | null): ListNode | null {
    if (head === null) {
      return null
    }
    let prev: ListNode|null = null
    while (head !== null) {
      let temp: ListNode|null = head.next
      head.next = prev
      prev = head
      head = temp
    }
    return prev
  };

  static valueEqual(l1: ListNode | null, l2: ListNode | null): boolean{
    while (l1 !== null && l2 !== null) {
      if (l1.val !== l2.val) {
        return false
      }
      l1 = l1.next
      l2 = l2.next
    }
    if (l1 === null && l2 === null) {
      return true
    }
    if (l1 === null || l2 === null) {
      return false
    }
    return true
  }

  static FromArray(array: number[]): ListNode | null{
    let [head, _] = ListNode.FromArrayWithTail(array)
    return head
  }

  static FromArrayWithTail(array: number[]): Array<ListNode|null>{
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
    return [dummy.next, tail]
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
