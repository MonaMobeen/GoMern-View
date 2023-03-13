fetch('http://localhost:3600/users', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "firstName": "Marcos",
            "lastName": "Silva",
            "email": "marcos.henrique@toptal.com",
            "password": "s3cr3tp4sswo4rd"
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('Request succeeded with JSON response', data);
    })
    .catch(function(error) {
        console.log('Request failed', error);
    });
