/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let i = 0;
    let now = this.head;
    while (i < index) {
        if (now === null) {
            return -1;
        }

        i++;
        now = now.next;
    }

    return now === null ? -1 : now.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newItem = {
        val: val,
        next: this.head
    }
    this.head = newItem;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let now = this.head;

    if (now === null) {
        this.head = {
            val: val,
            next: null
        }

        return;
    }

    while (now.next !== null) {
        now = now.next;
    }

    now.next = {
        val: val,
        next: null
    }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let now = this.head;
    if (index === 0) {
        this.head = {
            val: val,
            next: now
        }
        return;
    }

    if (now === null) {
        return;
    }

    let i = 1;
    while (i < index) {
        if (now.next === null) {
            return;
        }

        now = now.next;
        i++;
    }

    if (i === index) {
        now.next = {
            val: val,
            next: now.next
        }
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let now = this.head;

    if (index === 0) {
        this.head = null;
        return;
    }

    let i = 1;
    while (i < index) {
        if (now.next === null) {
            return;
        }

        now = now.next;
        i++;
    }

    if (i === index && now.next !== null) {
        if (now.next.next === null) {
            now.next = null;
        } else {
            now.next = now.next.next;
        }
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

