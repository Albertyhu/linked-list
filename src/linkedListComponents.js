export class LinkedList {
    constructor(num) {
        const newNode = new Node(num); 
        this.head = newNode; 
        this.tail = newNode; 
        this.size++; 
    }
    
    head = null; 
    tail = null; 
    size = 0; 
    append(value) {
        const newNode = new Node(value)
        this.tail.nextNode = newNode; 
        this.tail = newNode; 
        this.size++; 
    }; 
    prepend(value) {
        const newNode = new Node(value); 
        newNode.nextNode = this.head; 
        this.head = newNode; 
        this.size++; 
    }
    at(index) {
        if (index >= 0 && index < this.size) {
            var current = this.head; 
            for (var i = 1; i <= index; i++) {
                current = current.nextNode;
            }
            return current; 
        }
        return null; 
    }
    pop() {
        if (this.head != this.tail) {
            var current = this.tail;
            this.tail = this.at(this.size - 2)
            this.tail.nextNode = null;
            current = null; 
            this.size--; 
        }
        else if (this.head == this.tail) {
            this.head === null;
            this.tail === null;
            this.size = 0;
            
        }
        else if (this.head === null && this.tail === null) {
            alert("There is no data to remove. The linked list is already empty.")
        }
    }
    //removes first element of the linked list
    shift() {
        var current = this.head; 
        this.head = this.head.nextNode; 
        current = null; 
        this.size--; 
    }
    find(value) {
        var count = 0; 
        var current = this.head; 
        var iterate = true; 
        do {
            if (current.value === value) {
                iterate = false; 
                return count; 
            }
            current = current.nextNode; 
            count++; 
        } while (count < this.size && iterate && current != null)
        return null; 
    }
    toString() {
        var current = this.head; 
        var display = ''
        while (current != null) {
            display += `( ${current.value} ) -> `
            current = current.nextNode; 
        }
        display += 'null'; 
        return display; 
    }
    insertAt(value, index) {
        var current = this.at(index); 
        var neighbor = current.nextNode; 
        var newNode = new Node(value); 
        current.nextNode = newNode; 
        newNode.nextNode = neighbor; 
        this.size++; 
    }
    removeAt(index) {
        if (index >= this.size) {
            alert('Your input is out of range.')
            return; 
        }

        if (this.size === 0) {
            alert("The list is already empty")
            return; 
        }

        if (this.size == 1 || index === this.size - 1) {
            this.pop();
        }
        else if (index === 0) {
            this.shift();
        }
        else {
            var frontNode = this.at(index - 1);

            var obsolete = frontNode.nextNode;  
            var backNode = obsolete.nextNode; 
            frontNode.nextNode = backNode; 
            obsolete = null; 
            this.size--; 
        }  
    }
    length() {
        var current = this.head; 
        var count = 0; 
        while (current != null) {
            count++;
            current = current.nextNode; 
        }
        return count; 
    }
} 

class Node {
    constructor(num) {
        this.value = num; 
    }
    value = null; 
    nextNode = null; 
}