import './js/hello'
import './style.scss'
import './js/login-form'
import 'bulma'
import 'animate.css'
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery; // notice the definition of global variables here
require("jquery-ui-dist/jquery-ui.js");

import 'jquery-ui-dist/jquery-ui.css'


const texte = 'Hello Parcel'
console.log(texte)

jQuery('body').addClass("parcel")

jQuery(function() {
    jQuery("#datepicker").datepicker();
  });