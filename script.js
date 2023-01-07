var $toggleAbout = document.getElementById('nav-about');
var $toggleServices = document.getElementById('nav-services');
var $toggleContact = document.getElementById('nav-contact');
var $checkbox = document.getElementById('checkbox');

var toggle_checkbox = function() {
    $checkbox.checked = !$checkbox.checked;
}

$toggleAbout.addEventListener('click', toggle_checkbox);
$toggleServices.addEventListener('click', toggle_checkbox);
$toggleContact.addEventListener('click', toggle_checkbox);