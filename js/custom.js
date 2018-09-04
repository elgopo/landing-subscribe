function add_subscribe(){
    var user = {};
    var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
    var check_rent = document.getElementById('realty');
    var check_cars = document.getElementById('cars');
    var check_property = document.getElementById('metal');
    var check_other = document.getElementById('other'); 
    var pattern = /^[a-zа-яё\s]+$/iu;
    var pattern_mail = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/
    if ( !name || !email) {
        $('#answer').text('Заповніть, будь-ласка, всі поля');
    }

    else {
        if  ( pattern.test(name) && pattern_mail.test(email)) {

            if (check_cars.checked) {
                check_cars.value = true;
            }
            else {
                check_cars.value = false;
            }
            if (check_rent.checked) {
                check_rent.value = true;
            }
            else {
                check_rent.value = false;
            }
            if (check_property.checked) {
                check_property.value = true;
            }
            else {
                check_property.value = false;
            }
            if (check_other.checked) {
                check_other.value = true;
            }
            else {
                check_other.value = false;
            }
            if (!check_cars.checked && !check_rent.checked && !check_property.checked&&!check_other.checked) {
                check_cars.value = true;
                check_rent.value = true;
                check_property.value = true;
                check_other.value = true;
                
            }        
            
            $('#answer').text('');
			$('#name').val('');
			$('#email').val('');
			$('#okModal').modal('show');

            jQuery.post("http://77.123.141.139/DataHandler.ashx?Com"
                + "&name=" + encodeURIComponent(name)
                + "&rent=" + encodeURIComponent(check_rent.value)
                + "&cars=" + encodeURIComponent(check_cars.value)
                + "&other=" + encodeURIComponent(check_other.value)
                + "&metall=" + encodeURIComponent(check_property.value)
                + "&email=" + encodeURIComponent(email)
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