// const apiKey = 'keykY5YjFxN23izT6';
// const baseId = 'appU7lYsFSoNH4hGO';
// const tableName = 'Productos';

// // ID del registro que contiene la URL de la imagen en Airtable
// const recordId = 'reczBhSCpnvzOiZWf';

// const apiUrl = `https://api.airtable.com/v0/${baseId}/${tableName}/${recordId}`;

// const requestOptions = {
//     headers: {
//         Authorization: `Bearer ${apiKey}`
//     }
// };

// fetch(apiUrl, requestOptions)
//     .then(response => response.json())
//     .then(data => {

//         const imageUrl = data.fields.logo; 

//         // Actualiza el atributo src de la imagen del div
//         document.getElementById('logoImage').src = imageUrl;
//     })
//     .catch(error => {
//         console.error('Error al cargar la imagen desde Airtable:', error);
//     });