class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let tempNode: ListNode | null = null
  let prevNode: ListNode|null = null
  while (head!==null) {
    tempNode = head.next
    head.next = prevNode
    prevNode = head
    head = tempNode
  }
  return prevNode
};

export function testReverseList(): void{
  let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
  console.log(reverseList(head))
}

// testReverseList();
