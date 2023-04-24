const deleteIcon = () => {
    const i = document.createElement('i');
    i.classList.add('fas','fa-trash-alt','trashIcon', 'icon');
    i.addEventListener('click', deleteTasks);
    return i;
};

const deleteTasks = (event) => {
    console.log(event.target);
    const parent = event.target.closest('.card');;
    parent.remove();
};

export default deleteIcon