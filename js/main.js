if('serviceWorker' in navigator){
    console.log('Puede usar los SW en tu navegador');
    navigator.serviceWorker.register('./sw.js')
                            .then(res=>console.log('serviceWorker cargando correctamente', res))
                            .catch(err => console.log('serviceWorker no se ha podido registrar', err))
}else{
    console.log('No se puede usar el SW en tu navegador');
}