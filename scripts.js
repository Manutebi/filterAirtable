
// const iframe = document.getElementById('myIframe');

// function updateIframeContent() {

//     const airtableUrl = 'https://airtable.com/embed/appU7lYsFSoNH4hGO/shrWxTyCNj6mt6jg1?backgroundColor=yellow&viewControls=on'; // Reemplaza con la URL de tu vista pública de Airtable
    
//     fetch(airtableUrl)
//         .then(response => response.json())
//         .then(data => {
//             const tableHtml = generateTableHtml(data.records); 
            
//             iframe.contentDocument.body.innerHTML = tableHtml;
//         })
//         .catch(error => {
//             console.error('Error fetching data from Airtable:', error);
//         });
// }

// setInterval(updateIframeContent, 3000); 



// const iframe = document.getElementById('myIframe');
// const iframeUrl = document.getElementById('iframeUrl');

// iframe.onload = function() {
//     const currentUrl = iframe.contentWindow.location.href;
//     iframeUrl.textContent = `URL actual: ${currentUrl}`;
// };
