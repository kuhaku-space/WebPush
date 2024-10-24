export function getIDToken(messaging) {
    navigator.serviceWorker
        .register("./firebase-messaging-sw.js")
        .then(function (registration) {
            console.log("Registration successful, scope is:", registration.scope);
            messaging.getToken({ vapidKey: 'BJ7potPULcKaMJ5s3p4GgkeQXUS-uqa-UBVtJ-a0oc2L_lcBKbTRR2Ie1JKIHUo3q_5RGQ_qizk57WjksAkpra4', serviceWorkerRegistration: registration })
                .then((currentToken) => {
                    if (currentToken) {
                        console.log('current token for client: ', currentToken);
                        document.getElementById('output').textContent = currentToken;
                    } else {
                        console.log('No registration token available. Request permission to generate one.');
                    }
                }).catch((err) => {
                    console.log('An error occurred while retrieving token. ', err);
                });
        })
        .catch(function (err) {
            console.log("Service worker registration failed, error:", err);
        });
}
