function getData(callback) {
    // Make a network request
    fetch('https://some-api.com/data')
        .then(response => response.json())
        .then(data => {
            console.log("Got data:", data);
            // When the data is received, make another network request
            fetch('https://some-api.com/moreData/' + data.id)
                .then(response => response.json())
                .then(moreData => {
                    console.log("Got more data:", moreData);
                    // When the second request is complete, invoke the callback
                    callback(moreData);
                });
        });
}

// Pass a function as the callback
getData(function(finalData) {
    console.log("Callback function invoked with final data:", finalData);
});


//relate all fetch states sum up callbacks and promises to handle the async
function getData() {
    // Make a network request (fetch data)
    function getData() {
        // Make a network request (fetch data) 
        return new Promise((resolve, reject) => {
            fetch('https://some-api.com/data')
                .then(response => response.json())
                .then(data => {
                    console.log("Got data:", data);
                    // When the data is received, make another network request (fetch POST)
                    fetch('https://some-api.com/submitData', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => response.json())
                        .then(postResponse => {
                            console.log("Data submitted successfully:", postResponse);
                            // Make another network request (fetch data)
                            fetch('https://some-api.com/moreData/' + data.id)
                                .then(response => response.json())
                                .then(moreData => {
                                    console.log("Got more data:", moreData);
                                    // When the second request is complete, make another network request
                                    fetch('https://some-api.com/evenMoreData/' + moreData.id)
                                        .then(response => response.json())
                                        .then(evenMoreData => {
                                            console.log("Got even more data:", evenMoreData);
                                            // When the third request is complete, resolve the promise
                                            resolve(evenMoreData);
                                        });
                                });
                        });
                });
        });
    }
    
    // Use the promise
    getData()
       
}    