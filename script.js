const draggables = document.querySelectorAll(".image");
let draggedElement = null;

// Add drag start and drag end event listeners to each div
draggables.forEach(div => {
  div.addEventListener('dragstart', dragStart);
  div.addEventListener('dragend', dragEnd);
  div.addEventListener('dragover', dragOver);
  div.addEventListener('drop', drop);
});

function dragStart(e) {
  draggedElement = e.target;
  e.dataTransfer.effectAllowed = "move";
}

function dragEnd() {
  draggedElement = null;
}

function dragOver(e) {
  e.preventDefault(); // Necessary to allow a drop
  e.dataTransfer.dropEffect = "move";
}

function drop(e) {
  e.preventDefault();
  if (draggedElement && draggedElement !== e.target) {
    // Swap background images
    const draggedStyle = draggedElement.style.backgroundImage;
    draggedElement.style.backgroundImage = e.target.style.backgroundImage;
    e.target.style.backgroundImage = draggedStyle;
  }
}
