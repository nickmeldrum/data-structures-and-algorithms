const boxes = [1,2,3,4,5];

boxes.forEach((box1, index1) => {
    for(let i = index1 + 1; i < boxes.length; i += 1) {
        console.log(box1, boxes[i]);
    }
});
