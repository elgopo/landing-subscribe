function add_subscribe() {
    var user = {};
    var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
    var check_rent = document.getElementById('realty');
    var check_cars = document.getElementById('cars');
    var check_metal = document.getElementById('metal');
    var check_other = document.getElementById('other'); 
    var pattern = /^[a-zа-яё\s]+$/iu;
    var pattern_mail = /^[-._A-Za-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;

    if ( !name || !email) {
        $('#answer').text('Заповніть, будь-ласка, всі поля');
    }

    else if (!(check_rent.checked || check_cars.checked || check_metal.checked || check_other.checked)) {
        $('#answer').text('Оберіть категорію, яка вас цікавить');
    }

    else {
        if (pattern.test(name) && pattern_mail.test(email)) {

            check_rent.value = check_rent.checked;
            check_cars.value = check_cars.checked;
            check_metal.value = check_metal.checked;
            check_other.value = check_other.checked;

            cleanForm();

            $('#okModal').modal('show');

            jQuery.post("http://77.123.141.139/DataHandler.ashx?Com"
                + "&name=" + encodeURIComponent(name)
                + "&rent=" + encodeURIComponent(check_rent.value)
                + "&cars=" + encodeURIComponent(check_cars.value)
                + "&other=" + encodeURIComponent(check_other.value)
                + "&metal=" + encodeURIComponent(check_metal.value)
                + "&email=" + encodeURIComponent(email.toLowerCase())
                , HandleRegister);
              
        }
        
        else if (!pattern.test(name)) {
            $('#answer').text("Перевірьте правильність вводу ім'я");
        }

        else if (!pattern_mail.test(email)) {
            $('#answer').text('Адреса електронної пошти введена некоректно');
        }
    }
}

function cleanForm() {
    $('#answer').text('');
    $('#name').val('');
    $('#email').val('');
    document.getElementById('realty').checked = false;
    document.getElementById('cars').checked = false;
    document.getElementById('metal').checked = false;
    document.getElementById('other').checked = false;  
}