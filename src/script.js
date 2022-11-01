if ("serviceWorker" in navigator) {
    console.log("Service Worker supported");
    navigator.serviceWorker.register("./public/sw.js").then(ServiceWorkerRegistration => {
        console.log("SW Registered");
        console.log(ServiceWorkerRegistration);
    }).catch(error => {
        console.log("SW Registration failed");
        console.log(error);
    })
}


function runCode() {
    alert("Hello world");
}