let dataTable;
let dataTableIsInitialized = false;
const formSumitLink = document.getElementById("formSumitLink")

/*Ingresar Datos*/
formcrate.addEventListener("submit", function(event){
	event.preventDefault();

	const url = document.getElementById('url').value; // event.target.username
    const description = document.getElementById('description').value;

	
    const data = {
        url:url,
        description:description
    }

    axios({
        method: 'post', 
        url: 'http://localhost:3000/users/create',
        data: data,
    }).then( response => {
        console.log('response', response);

        if(response.status === 200){
            
        }
    }).catch( error => {
        console.log('error', error);
    });

});
/*Ingresar Datos*/

/*Carga de datos*/
const initDataTable = async () => {
    if(dataTableIsInitialized){
        dataTable.destroy();
    }

    await listUsers();

    dataTable = $("#datatable_user").DataTable({});

    dataTableIsInitialized = true;
}

const listUsers = async () => {
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const link = await response. json();

    let content = ``;
    link.forEach((link, index) => {
        content += `
        <tr>
            <td>${index + 1}</td>
            <td>${link.description}</td>
            <td>${link.url}</td>
            <td>${link.Date}</td>
        </tr>`;
        link_body.innerHtml = content;
    });
        
    } catch (error) {
        
    }
}

window.addEventListener("load",async () => {
    await initDataTable();
})