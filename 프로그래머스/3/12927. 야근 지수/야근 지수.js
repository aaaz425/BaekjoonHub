class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this._bubbleUp();
    }

    extractMax() {
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown();
        return max;
    }

    _bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] >= this.heap[index]) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    _bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let largest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left < length && this.heap[left] > this.heap[largest]) largest = left;
            if (right < length && this.heap[right] > this.heap[largest]) largest = right;

            if (largest === index) break;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }

    getAll() {
        return this.heap;
    }
}

function solution(n, works) {
    const heap = new MaxHeap();
    
    for (let w of works) {
        heap.insert(w);
    }

    while (n > 0) {
        const max = heap.extractMax();
        if (max === 0) break;
        heap.insert(max - 1);
        n--;
    }

    return heap.getAll().reduce((sum, w) => sum + w ** 2, 0);
}