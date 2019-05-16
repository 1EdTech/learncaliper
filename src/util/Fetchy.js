class Fetchy {

    static sessionId() {
        if (window.DEFAULT_SETTINGS && window.DEFAULT_SETTINGS.sessionId){
            return window.DEFAULT_SETTINGS.sessionId
        } else {
            return "shared"
        }
    }

    static apiToken() {
        if (window.DEFAULT_SETTINGS && window.DEFAULT_SETTINGS.apiToken){
            return window.DEFAULT_SETTINGS.apiToken
        } else {
            return ""
        }
    }

    static hostUrl(){
        return location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
    }

    static apiBaseUrl() {
        if (window.DEFAULT_SETTINGS && window.DEFAULT_SETTINGS.apiUrl) {
            return this.hostUrl() + window.DEFAULT_SETTINGS.apiUrl;
        } else {
            return this.hostUrl() + "/api/";
        }
    }

    static apiUrl(subpath) {
        return this.apiBaseUrl() + subpath;
    }


    static eventSendApiBase() {
        return this.apiBaseUrl() + "producer/";
    }


    static receiveApiUrl() {
        return this.apiBaseUrl() + "consumer/" + this.sessionId();
    }


    static handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }


    static get(url = ``, format="json"){
       return fetch(url, {
            method: "GET",
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + this.apiToken()
            },
            redirect: "follow",
            referrer: "no-referrer",
       })
               .then(this.handleErrors)
               .then(response => {
                    if (format === "json") {
                        return response.json()
                    } else if (format === "text") {
                        return response.text()
                    } else {
                        return response;
                    }
                })
    }


    // post(`http://example.com/answer`, {answer: 42})
    //   .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
    //   .catch(error => console.error(error));
    static post(url = ``, data = {}, format='json') {
        // Default options are marked with *
        return fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.apiToken()
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(data),
        })
                .then(this.handleErrors)
                .then(response => {
                    if (format === "json") {
                        return response.json()
                    } else if (format === "text") {
                        return response.text()
                    } else {
                        return response;
                    }
                })
    }

}

module.exports = Fetchy
