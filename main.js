function performDownload() {

    // Perform the GET request when the div is clicked
    fetch('https://raw.githubusercontent.com/alpguvenir/alpguvenir.github.io/main/source/thesis.pdf')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blobData => {
            // Create a Blob and initiate download
            const blob = new Blob([blobData], { type: 'application/octet-stream' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = 'thesis.pdf'; // Set the desired file name
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            // Revoke the Blob URL to free up resources
            URL.revokeObjectURL(url);
        })
        .catch(error => {
            console.error('Error during GET request:', error);
        });

}

/*
  function asyncFunc2() {
    console.log("in Async function 2");
  }
  async function asyncFunc1() {
    console.log("in Async function 1");
    await asyncFunc2();
    console.log('After an await');
  }
  console.log("starting sync code");
  asyncFunc1().then(() => {
    console.log("Received answer from async code");
  });
  console.log("finishing sync code");


  async function asyncFunc2() {
    console.log("in Async function 2");
  }
  async function asyncFunc1() {
    console.log("in Async function 1");
    await asyncFunc2();
    console.log('After an await');
  }
  console.log("starting sync code");
  await asyncFunc1().then(() => {
    console.log("Received answer from async code");
  });
  console.log("finishing sync code");
  */