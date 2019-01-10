export const apiRequest = (url, endpoint, config = {}, success, failure) => 
    fetch(`
            ${url}${endpoint}
        `,
        config
    ).then(response => success(response.json()))
    .catch(error => failure(error.json()));