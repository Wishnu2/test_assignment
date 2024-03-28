function submitForm() {
    let form = document.forms['contact-form'];
    let userName = form['user-name'].value.trim();
    console.log('submit form clicked');
    console.log(form);
    console.log(userName);
    if (userName === '') {
        alert('Periksa Kembali Form Anda');
    } else {
        alert('Selamat Datang ' + userName);
    }
}
