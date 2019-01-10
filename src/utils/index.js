export const apiRequest = (url, endpoint, config = {}, success, failure) => 
    fetch(`
            ${url}${endpoint}
        `,
        config
    ).then(
        response => response.json()
    ).then(
        response => success(response)
    ).catch(
        error => failure(error.json())
    );