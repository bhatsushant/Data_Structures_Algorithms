
function compressed(boxes) {
    boxes.foreach(boxes) { // O(n)
        boxes.foreach(boxes) { // O(n)
            log('...')
        }
    }
}

Big O - O(n * n) = O(n ^ 2)

function compressed(boxes) {
    boxes.foreach(boxes) { // O(n)
        log('...')
    }

    boxes.foreach(boxes) { // O(n)
        log('...')
    }
}

Big O - O(n + n) = O(2n) = O(n)

function compressed(boxes, boxes2) {
    boxes.foreach(boxes) { // O(n)
        log('...')
    }

    boxes2.foreach(boxes) { // O(n)
        log('...')
    }
}

Big O - O(a + b)

function compressed(boxes, boxes2) {
    boxes.foreach(boxes) { // O(n)
        boxes2.foreach(boxes) { // O(n)
            log('...')
        }
    }
}

Big O - O(a * b)