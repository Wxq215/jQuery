document.addEventListener('DOMContentLoaded', function() {
    const editButtons = document.querySelectorAll('.edit-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');
    const modal = document.getElementById('editModal');
    const closeButton = modal.querySelector('.close');
    const saveButton = modal.querySelector('.save-btn');
    const editForm = document.getElementById('editForm');
    let currentRow;

   
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentRow = button.parentNode.parentNode;
            const name = currentRow.querySelector('th').innerText;
            const physics = currentRow.querySelector('td:nth-child(2)').innerText;
            const chemistry = currentRow.querySelector('td:nth-child(3)').innerText;
            const math = currentRow.querySelector('td:nth-child(4)').innerText;

            document.getElementById('editName').value = name;
            document.getElementById('editPhysics').value = physics;
            document.getElementById('editChemistry').value = chemistry;
            document.getElementById('editMath').value = math;

            modal.style.display = 'block';
        });
    });

    
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    
    saveButton.addEventListener('click', function() {
        const newName = document.getElementById('editName').value;
        const newPhysics = document.getElementById('editPhysics').value;
        const newChemistry = document.getElementById('editChemistry').value;
        const newMath = document.getElementById('editMath').value;

        currentRow.querySelector('th').innerText = newName;
        currentRow.querySelector('td:nth-child(2)').innerText = newPhysics;
        currentRow.querySelector('td:nth-child(3)').innerText = newChemistry;
        currentRow.querySelector('td:nth-child(4)').innerText = newMath;

        modal.style.display = 'none';
    });

  
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        });
    });

   
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});