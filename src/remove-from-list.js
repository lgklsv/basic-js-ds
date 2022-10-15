const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let head = l;
  let cur = l;
  let prev = null;

  while(cur.next) {
      if(cur.value == k) {
          if(prev == null){
              head = head.next;
              cur = cur.next;
              continue;
          }
          if (prev != null && cur.next != null){
              while(cur.value == k){
                  prev.next = cur.next;
                  cur = prev.next;
              }
          }
      }
      prev = cur;
      cur = cur.next;
      if(cur.next == null && cur.value == k) {
          prev.next = null;
      }
  }
  return head;
}

module.exports = {
  removeKFromList
};
