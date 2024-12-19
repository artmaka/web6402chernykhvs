async function fetchTableData() {
    const tableBody = document.querySelector('table tbody');
    try {
        const response = await fetch('http://localhost:8000/table');
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных с сервера');
        }
        const data = await response.json(); 
        
        tableBody.innerHTML = '';
        
        // Предполагается, что данные содержат массив объектов с полями "material", "brand", "type", "description"
        data.data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.material}</td>
                <td>${item.brand}</td>
                <td>${item.type}</td>
                <td>${item.description}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        alert(`Произошла ошибка: ${error.message}`);
    }
}

window.onload = fetchTableData;