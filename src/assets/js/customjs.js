$(document).ready(function(){
    $("#gold").click(function(){
        $(this).removeClass('white-back');
        $(this).addClass('bg--primary');
        $("#silver").removeClass('bg--primary');
        $("#silver").addClass('white-back');
        $("#bronze").removeClass('bg--primary');
        $("#bronze").addClass('white-back');
        $("#goldbtn").show();
        $("#silverbtn").hide();
        $("#bronzebtn").hide();
    });
});
$(document).ready(function(){
    $("#silver").click(function(){
        $(this).removeClass('white-back');
        $(this).addClass('bg--primary');
        $("#gold").removeClass('bg--primary');
        $("#gold").addClass('white-back');
        $("#bronze").removeClass('bg--primary');
        $("#bronze").addClass('white-back');
        $("#silverbtn").show();
        $("#goldbtn").hide();
        $("#bronzebtn").hide();
    });
});
$(document).ready(function(){
    $("#bronze").click(function(){
        $(this).removeClass('white-back');
        $(this).addClass('bg--primary');
        $("#silver").removeClass('bg--primary');
        $("#silver").addClass('white-back');
        $("#gold").removeClass('bg--primary');
        $("#gold").addClass('white-back');
        $("#bronzebtn").show();
        $("#silverbtn").hide();
        $("#goldbtn").hide();
    });
});
$(document).ready(function(){
    $("#oopen").click(function(){
        $("#doot").toggle();

    });
});
$(document).ready(function(){
    $("#oopen1").click(function(){
        $("#doot1").toggle();

    });
});
$(document).ready(function(){
    $("#oopen2").click(function(){
        $("#doot2").toggle();

    });
});$(document).ready(function(){
    $("#oopen3").click(function(){
        $("#doot3").toggle();

    });
});




$(document).ready(function(){
    $("#flyer").click(function(){
        $("#flyer1").show();
        $("#flyer2").hide();
    });
});
$(document).ready(function(){
    $("#flyerr").click(function(){
        $("#flyer1").hide();
        $("#flyer2").show();
    });
});

$(document).ready(function(){
    $("#heart").click(function(){
        $(this).addClass('bg--primary');
    });
});

$(document).ready(function(e){
    $(".heartline").click(function(e){
        e.preventDefault();
        $(this).next(".heartfull").show();
        $(this).hide();
    });
    $(".heartfull").click(function(e){
        e.preventDefault();
        $(this).prev(".heartline").show();
        $(this).hide();
    });
});
$(document).ready(function(){
    $("#sli").hover(function(){
        $("#men").slideToggle();
    });
});
$(document).ready(function(){
    $("#slii").click(function(){
        $("#menn").slideToggle(100);
    });
});
$(document).ready(function(){
    $("#slii").click(function(){
        $(".ic1").toggle();
        $(".ic2").toggle();

    });
});
// $(document).ready(function(){
//     $(".onli").click(function(){
//         $(".onli1").show();
//         $(".onli")hide();
//
//
//     });
// });
$(document).ready(function(){
    $(".onn").click(function(){
        $(".onli1").show();
        $(".onli").hide();
    });
});
$(document).ready(function(){
    $(".offf").click(function(){
        $(".onli1").hide();
        $(".onli").show();
    });
});


$(document).ready(function(){
    $("#sli1").hover(function(){
        $(".men1").toggle();
        $("#menn1").toggle();
    });
});
$(document).ready(function(){
    $("#sli").hover(function(){
        $(".men").toggle();
        $("#menn").toggle();
    });
});
$(document).ready(function(){
    $("#sli2").hover(function(){
        $(".men2").toggle();
        $("#menn2").toggle();
    });
});
$(document).ready(function(){
    $("#sli3").hover(function(){
        $("#men3").slideToggle();
    });
});
$(document).ready(function(){
    $("#sli4").hover(function(){
        $("#men4").slideToggle();
    });
});
$(document).ready(function(){
    $("#sli5").hover(function(){
        $("#men5").slideToggle();
    });
});


$(document).ready(function(){
    $("#bank").click(function(){
        $("#bankaccount").show();
    });

});

$(document).ready(function(){
    $("#btn2").click(function(e){
        e.preventDefault();
        $("#extra").append('<div class="row mt-3 roww-addon zero-margg">' +
            '                            <div class="col-md-9 col-sm-7 col-xs-7">'+
            '                                <input type="text" name="name" placeholder="Zusätzliche Dienstleistung eingeben">' +
            '                            </div>' +
            '                            <div class="col-md-2 col-sm-3 col-xs-3 no-padd">' +
            '                                <input type="text" name="name" placeholder="50,-&euro;">' +
            '                            </div>' +
            '                            <div class="col-md-1 col-sm-2 col-xs-2">' +
            '                                <i class="icon material-icons myclass3 remove" icon-class="material-icons"\n' +
            '                                           title="remove_circle" style="cursor: pointer; position: relative; top: 5px;">remove_circle</i>' +
            '                            </div>' +
            '                       </div>');
    });
});


$(document.body).on('click','.remove',function() {
    if($(".roww-addon").length > 1) {
        var row = $(this).parent().parent();
        row.remove();
    }
});

$('#btnrem').on('click','.remove',function() {
    $("#btn5").remove();
});
$(document).ready(function(){
    $("btn3").click(function(){

    });
});


$(document).ready(function () {

    $('#openBtn').click(function () {
        $('#myModal').modal({
            show: true
        })
    });

    $(document).on('show.bs.modal', '.modal', function (event) {
        var zIndex = 1040 + (10 * $('.modal:visible').length);
        $(this).css('z-index', zIndex);
        setTimeout(function() {
            $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
        }, 0);
    });


});

/* Add more Question rows in sugges a favor page*/
var increment = 2;
$(document.body).on('click','.add-more-question',function(e){
    e.preventDefault();
    var questionHtml = '<div class="row mt-4 roww-addon zero-margg">'+
                            '<div class="col-md-11 col-sm-11 col-xs-11 questions no-padd">'+
                                '<label>Frage <span class="count"></span>:</label>'+
                                '<input type="text" name="question[]" placeholder="" class="validate-required" />'+
                            '</div>'+
                            '<div class="col-md-1 col-sm-1 col-xs-1 questions no-padd">'+
                                '<i class="icon material-icons myclass3 set-custom-adjust remove-question-row" icon-class="material-icons" title="remove_circle" style="cursor: pointer; padding-left: 12px; position: relative; top: 34px;">remove_circle</i>'+
                            '</div>'+
                        '</div>'+
                        '<div class="row mt-2 question-type no-padd">'+
                            '<div class="col-md-11 col-sm-11 col-xs-11">'+
                                '<div class="input-select">'+
                                    '<select class="answer-type">'+
                                        '<option selected="" disabled>Anforderungstyp</option>'+
                                        '<option value="text">Text</option>'+
                                        '<option value="file">Dateien</option>'+
                                        '<option value="multi">Mehrere Antwortmöglichkeiten</option>'+
                                        '<option value="single">Eine Antwort auswählbar</option>'+
                                    '</select>'+
                                '</div>'+
                            '</div>'+
                        '</div>';
    increment+=1;
    $(".question-append").append(questionHtml);

});
$(document.body).on("change",".answer-type",function(){
    if($(this).val() == "multi" || $(this).val() == "single") {
        var parent = $(this).parent().parent().parent();

        var html = '<div class="col-md-12 col-sm-12 col-xs-12 add-more-option-box text-left mt-3">' +
            '<button type="button" class="btn btn--primary add-more-option">' +
            '<span class="btn__text">Weitere Optionen hinzugfügen</span>' +
            '</button>' +
            '</div>' +
            '<div class="col-md-12 col-sm-12 col-xs-12 more-option adjust-top">' +
            '<div class="col-md-11 col-sm-11 col-xs-11 no-padd"><input type="text" name="question[][]" placeholder="Option festlegen" class="validate-required" /></div>' +
            '</div>';
parent.find('.add-more-option-box').remove();
parent.find('.more-option').remove();
            parent.append(html);

    }else{
        $(this).parent().parent().parent().find(".more-option").remove();
        $(this).parent().parent().parent().find(".add-more-option-box").remove();
    }
});
$(document.body).on("click",".add-more-option",function(){
    var html = '<div class="row no-padd">' +
                    '<div class="col-md-11 col-sm-11 col-xs-11">'+
                        '<input type="text" name="question[][]" placeholder="Option festlegen" class="validate-required set-option-field adjust-top" />' +
                    '</div>'+
                    '<div class="col-md-1 col-sm-1 col-xs-1 no-padd">'+
                        '<i class="icon material-icons myclass3 set-custom-adjust remove-set-option " icon-class="material-icons" title="remove_circle" style="cursor: pointer; position: relative; top: 15px;">remove_circle</i>' +
                    '</div>' +
                '</div>';
    $(this).parent().parent().find(".more-option").append(html);
})
$(document.body).on("click",".remove-question-row",function(){
    var $this = $(this).parent().parent();
    if($(".questions").length > 2) {
        $this.next(".question-type").remove();
        $this.prev(".divider").remove();
        $this.remove();
    }
})
$(document.body).on("click",".make-cover-default",function () {
    $(".btn--primary").removeClass("btn--primary");
    $(this).addClass("btn--primary");
});

$(document.body).on("click",".remove-set-option",function(){
    var setOption = $(this).parent().parent().find(".set-option-field");
    setOption.remove();
    $(this).remove();
})


$(".butnew").click(function(event){
    $(this).closest('li').remove();
});
$("input").change(function(event) {
    event.stopPropagation();
    this.price = $(this).val();
    this.qty = $(this).parent("td").siblings(".qty").children("input");
    this.total = $(this).parent("td").siblings(".total").children("input");

    this.total.attr("value", this.price * this.qty.val());

    var total = 0;
    $("td.total input").each(function() {
        total = parseInt(total) + parseInt($(this).val());
    });

    $("#sum span").html(total);
});


// $("input").keydown(function(e) {
//     // Allow: backspace, delete, tab, escape, enter and .
//     if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
//         // Allow: Ctrl+A, Command+A
//         (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
//         // Allow: home, end, left, right, down, up
//         (e.keyCode >= 35 && e.keyCode <= 40)) {
//         // let it happen, don't do anything
//         return;
//     }
//     // Ensure that it is a number and stop the keypress
//     if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
//         e.preventDefault();
//     }
// });





$(document).ready(function(){
    $('.forum').hover(function(){$(this).toggleClass('forum_hover');});
});




$('#input-assigned-21').click(function() {
    if ($(this).is(':checked')) {
        $("#extrapoint").append('<div class="row">\n' +
            '                                    <div class="col-sm-6 bankitem agencyitem">\n' +
            '                                        <label>Vorname: <span style="color: red;">*</span></label>\n' +
            '                                        <input type="text" name="name" value="" />\n' +
            '                                    </div>\n' +
            '                                    <div class="col-sm-6 bankitem agencyitem">\n' +
            '                                        <label>Nachname: <span style="color: red;">*</span></label>\n' +
            '                                        <input type="text" name="display-name" value="" />\n' +
            '                                    </div>\n' +
            '                                    <div class="col-sm-12 bankitem agencyitem">\n' +
            '                                        <label>Firmenname:</label>\n' +
            '                                        <input type="email" name="email" value="" />\n' +
            '                                    </div>\n' +
            '                                    <div class="col-sm-12 bankitem agencyitem">\n' +
            '                                        <label>Straße, Hausnummer: <span style="color: red;">*</span></label>\n' +
            '                                        <input type="text" name="location" value="" />\n' +
            '                                    </div>\n' +
            '                                    <div class="col-sm-12 bankitem agencyitem">\n' +
            '                                        <label>PLZ: <span style="color: red;">*</span></label>\n' +
            '                                        <input type="text" name="website" value="" />\n' +
            '                                    </div>\n' +
            '                                    <div class="col-sm-12 bankitem agencyitem">\n' +
            '                                        <label>Stadt: <span style="color: red;">*</span></label>\n' +
            '                                        <input type="text" name="website" value="" />\n' +
            '                                    </div>\n' +
            '                                    <div class="col-sm-12 bankitem agencyitem">\n' +
            '                                        <label>Land: <span style="color: red;">*</span></label>\n' +
            '                                        <div class="input-select">\n' +
            '                                            <select>\n' +
            '                                                <option selected="" value="DE">Germany</option>\n' +
            '                                                <option value="AF">Afghanistan</option>\n' +
            '                                                <option value="AX">Åland Islands</option>\n' +
            '                                                <option value="AL">Albania</option>\n' +
            '                                                <option value="DZ">Algeria</option>\n' +
            '                                                <option value="AS">American Samoa</option>\n' +
            '                                                <option value="AD">Andorra</option>\n' +
            '                                                <option value="AO">Angola</option>\n' +
            '                                                <option value="AI">Anguilla</option>\n' +
            '                                                <option value="AQ">Antarctica</option>\n' +
            '                                                <option value="AG">Antigua and Barbuda</option>\n' +
            '                                                <option value="AR">Argentina</option>\n' +
            '                                                <option value="AM">Armenia</option>\n' +
            '                                                <option value="AW">Aruba</option>\n' +
            '                                                <option value="AU">Australia</option>\n' +
            '                                                <option value="AT">Austria</option>\n' +
            '                                                <option value="AZ">Azerbaijan</option>\n' +
            '                                                <option value="BS">Bahamas</option>\n' +
            '                                                <option value="BH">Bahrain</option>\n' +
            '                                                <option value="BD">Bangladesh</option>\n' +
            '                                                <option value="BB">Barbados</option>\n' +
            '                                                <option value="BY">Belarus</option>\n' +
            '                                                <option value="BE">Belgium</option>\n' +
            '                                                <option value="BZ">Belize</option>\n' +
            '                                                <option value="BJ">Benin</option>\n' +
            '                                                <option value="BM">Bermuda</option>\n' +
            '                                                <option value="BT">Bhutan</option>\n' +
            '                                                <option value="BO">Bolivia, Plurinational State of</option>\n' +
            '                                                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>\n' +
            '                                                <option value="BA">Bosnia and Herzegovina</option>\n' +
            '                                                <option value="BW">Botswana</option>\n' +
            '                                                <option value="BV">Bouvet Island</option>\n' +
            '                                                <option value="BR">Brazil</option>\n' +
            '                                                <option value="IO">British Indian Ocean Territory</option>\n' +
            '                                                <option value="BN">Brunei Darussalam</option>\n' +
            '                                                <option value="BG">Bulgaria</option>\n' +
            '                                                <option value="BF">Burkina Faso</option>\n' +
            '                                                <option value="BI">Burundi</option>\n' +
            '                                                <option value="KH">Cambodia</option>\n' +
            '                                                <option value="CM">Cameroon</option>\n' +
            '                                                <option value="CA">Canada</option>\n' +
            '                                                <option value="CV">Cape Verde</option>\n' +
            '                                                <option value="KY">Cayman Islands</option>\n' +
            '                                                <option value="CF">Central African Republic</option>\n' +
            '                                                <option value="TD">Chad</option>\n' +
            '                                                <option value="CL">Chile</option>\n' +
            '                                                <option value="CN">China</option>\n' +
            '                                                <option value="CX">Christmas Island</option>\n' +
            '                                                <option value="CC">Cocos (Keeling) Islands</option>\n' +
            '                                                <option value="CO">Colombia</option>\n' +
            '                                                <option value="KM">Comoros</option>\n' +
            '                                                <option value="CG">Congo</option>\n' +
            '                                                <option value="CD">Congo, the Democratic Republic of the</option>\n' +
            '                                                <option value="CK">Cook Islands</option>\n' +
            '                                                <option value="CR">Costa Rica</option>\n' +
            '                                                <option value="CI">Côte d\'Ivoire</option>\n' +
            '                                                <option value="HR">Croatia</option>\n' +
            '                                                <option value="CU">Cuba</option>\n' +
            '                                                <option value="CW">Curaçao</option>\n' +
            '                                                <option value="CY">Cyprus</option>\n' +
            '                                                <option value="CZ">Czech Republic</option>\n' +
            '                                                <option value="DK">Denmark</option>\n' +
            '                                                <option value="DJ">Djibouti</option>\n' +
            '                                                <option value="DM">Dominica</option>\n' +
            '                                                <option value="DO">Dominican Republic</option>\n' +
            '                                                <option value="EC">Ecuador</option>\n' +
            '                                                <option value="EG">Egypt</option>\n' +
            '                                                <option value="SV">El Salvador</option>\n' +
            '                                                <option value="GQ">Equatorial Guinea</option>\n' +
            '                                                <option value="ER">Eritrea</option>\n' +
            '                                                <option value="EE">Estonia</option>\n' +
            '                                                <option value="ET">Ethiopia</option>\n' +
            '                                                <option value="FK">Falkland Islands (Malvinas)</option>\n' +
            '                                                <option value="FO">Faroe Islands</option>\n' +
            '                                                <option value="FJ">Fiji</option>\n' +
            '                                                <option value="FI">Finland</option>\n' +
            '                                                <option value="FR">France</option>\n' +
            '                                                <option value="GF">French Guiana</option>\n' +
            '                                                <option value="PF">French Polynesia</option>\n' +
            '                                                <option value="TF">French Southern Territories</option>\n' +
            '                                                <option value="GA">Gabon</option>\n' +
            '                                                <option value="GM">Gambia</option>\n' +
            '                                                <option value="GE">Georgia</option>\n' +
            '                                                <option value="GH">Ghana</option>\n' +
            '                                                <option value="GI">Gibraltar</option>\n' +
            '                                                <option value="GR">Greece</option>\n' +
            '                                                <option value="GL">Greenland</option>\n' +
            '                                                <option value="GD">Grenada</option>\n' +
            '                                                <option value="GP">Guadeloupe</option>\n' +
            '                                                <option value="GU">Guam</option>\n' +
            '                                                <option value="GT">Guatemala</option>\n' +
            '                                                <option value="GG">Guernsey</option>\n' +
            '                                                <option value="GN">Guinea</option>\n' +
            '                                                <option value="GW">Guinea-Bissau</option>\n' +
            '                                                <option value="GY">Guyana</option>\n' +
            '                                                <option value="HT">Haiti</option>\n' +
            '                                                <option value="HM">Heard Island and McDonald Islands</option>\n' +
            '                                                <option value="VA">Holy See (Vatican City State)</option>\n' +
            '                                                <option value="HN">Honduras</option>\n' +
            '                                                <option value="HK">Hong Kong</option>\n' +
            '                                                <option value="HU">Hungary</option>\n' +
            '                                                <option value="IS">Iceland</option>\n' +
            '                                                <option value="IN">India</option>\n' +
            '                                                <option value="ID">Indonesia</option>\n' +
            '                                                <option value="IR">Iran, Islamic Republic of</option>\n' +
            '                                                <option value="IQ">Iraq</option>\n' +
            '                                                <option value="IE">Ireland</option>\n' +
            '                                                <option value="IM">Isle of Man</option>\n' +
            '                                                <option value="IL">Israel</option>\n' +
            '                                                <option value="IT">Italy</option>\n' +
            '                                                <option value="JM">Jamaica</option>\n' +
            '                                                <option value="JP">Japan</option>\n' +
            '                                                <option value="JE">Jersey</option>\n' +
            '                                                <option value="JO">Jordan</option>\n' +
            '                                                <option value="KZ">Kazakhstan</option>\n' +
            '                                                <option value="KE">Kenya</option>\n' +
            '                                                <option value="KI">Kiribati</option>\n' +
            '                                                <option value="KP">Korea, Democratic People\'s Republic of</option>\n' +
            '                                                <option value="KR">Korea, Republic of</option>\n' +
            '                                                <option value="KW">Kuwait</option>\n' +
            '                                                <option value="KG">Kyrgyzstan</option>\n' +
            '                                                <option value="LA">Lao People\'s Democratic Republic</option>\n' +
            '                                                <option value="LV">Latvia</option>\n' +
            '                                                <option value="LB">Lebanon</option>\n' +
            '                                                <option value="LS">Lesotho</option>\n' +
            '                                                <option value="LR">Liberia</option>\n' +
            '                                                <option value="LY">Libya</option>\n' +
            '                                                <option value="LI">Liechtenstein</option>\n' +
            '                                                <option value="LT">Lithuania</option>\n' +
            '                                                <option value="LU">Luxembourg</option>\n' +
            '                                                <option value="MO">Macao</option>\n' +
            '                                                <option value="MK">Macedonia, the former Yugoslav Republic of</option>\n' +
            '                                                <option value="MG">Madagascar</option>\n' +
            '                                                <option value="MW">Malawi</option>\n' +
            '                                                <option value="MY">Malaysia</option>\n' +
            '                                                <option value="MV">Maldives</option>\n' +
            '                                                <option value="ML">Mali</option>\n' +
            '                                                <option value="MT">Malta</option>\n' +
            '                                                <option value="MH">Marshall Islands</option>\n' +
            '                                                <option value="MQ">Martinique</option>\n' +
            '                                                <option value="MR">Mauritania</option>\n' +
            '                                                <option value="MU">Mauritius</option>\n' +
            '                                                <option value="YT">Mayotte</option>\n' +
            '                                                <option value="MX">Mexico</option>\n' +
            '                                                <option value="FM">Micronesia, Federated States of</option>\n' +
            '                                                <option value="MD">Moldova, Republic of</option>\n' +
            '                                                <option value="MC">Monaco</option>\n' +
            '                                                <option value="MN">Mongolia</option>\n' +
            '                                                <option value="ME">Montenegro</option>\n' +
            '                                                <option value="MS">Montserrat</option>\n' +
            '                                                <option value="MA">Morocco</option>\n' +
            '                                                <option value="MZ">Mozambique</option>\n' +
            '                                                <option value="MM">Myanmar</option>\n' +
            '                                                <option value="NA">Namibia</option>\n' +
            '                                                <option value="NR">Nauru</option>\n' +
            '                                                <option value="NP">Nepal</option>\n' +
            '                                                <option value="NL">Netherlands</option>\n' +
            '                                                <option value="NC">New Caledonia</option>\n' +
            '                                                <option value="NZ">New Zealand</option>\n' +
            '                                                <option value="NI">Nicaragua</option>\n' +
            '                                                <option value="NE">Niger</option>\n' +
            '                                                <option value="NG">Nigeria</option>\n' +
            '                                                <option value="NU">Niue</option>\n' +
            '                                                <option value="NF">Norfolk Island</option>\n' +
            '                                                <option value="MP">Northern Mariana Islands</option>\n' +
            '                                                <option value="NO">Norway</option>\n' +
            '                                                <option value="OM">Oman</option>\n' +
            '                                                <option value="PK">Pakistan</option>\n' +
            '                                                <option value="PW">Palau</option>\n' +
            '                                                <option value="PS">Palestinian Territory, Occupied</option>\n' +
            '                                                <option value="PA">Panama</option>\n' +
            '                                                <option value="PG">Papua New Guinea</option>\n' +
            '                                                <option value="PY">Paraguay</option>\n' +
            '                                                <option value="PE">Peru</option>\n' +
            '                                                <option value="PH">Philippines</option>\n' +
            '                                                <option value="PN">Pitcairn</option>\n' +
            '                                                <option value="PL">Poland</option>\n' +
            '                                                <option value="PT">Portugal</option>\n' +
            '                                                <option value="PR">Puerto Rico</option>\n' +
            '                                                <option value="QA">Qatar</option>\n' +
            '                                                <option value="RE">Réunion</option>\n' +
            '                                                <option value="RO">Romania</option>\n' +
            '                                                <option value="RU">Russian Federation</option>\n' +
            '                                                <option value="RW">Rwanda</option>\n' +
            '                                                <option value="BL">Saint Barthélemy</option>\n' +
            '                                                <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>\n' +
            '                                                <option value="KN">Saint Kitts and Nevis</option>\n' +
            '                                                <option value="LC">Saint Lucia</option>\n' +
            '                                                <option value="MF">Saint Martin (French part)</option>\n' +
            '                                                <option value="PM">Saint Pierre and Miquelon</option>\n' +
            '                                                <option value="VC">Saint Vincent and the Grenadines</option>\n' +
            '                                                <option value="WS">Samoa</option>\n' +
            '                                                <option value="SM">San Marino</option>\n' +
            '                                                <option value="ST">Sao Tome and Principe</option>\n' +
            '                                                <option value="SA">Saudi Arabia</option>\n' +
            '                                                <option value="SN">Senegal</option>\n' +
            '                                                <option value="RS">Serbia</option>\n' +
            '                                                <option value="SC">Seychelles</option>\n' +
            '                                                <option value="SL">Sierra Leone</option>\n' +
            '                                                <option value="SG">Singapore</option>\n' +
            '                                                <option value="SX">Sint Maarten (Dutch part)</option>\n' +
            '                                                <option value="SK">Slovakia</option>\n' +
            '                                                <option value="SI">Slovenia</option>\n' +
            '                                                <option value="SB">Solomon Islands</option>\n' +
            '                                                <option value="SO">Somalia</option>\n' +
            '                                                <option value="ZA">South Africa</option>\n' +
            '                                                <option value="GS">South Georgia and the South Sandwich Islands</option>\n' +
            '                                                <option value="SS">South Sudan</option>\n' +
            '                                                <option value="ES">Spain</option>\n' +
            '                                                <option value="LK">Sri Lanka</option>\n' +
            '                                                <option value="SD">Sudan</option>\n' +
            '                                                <option value="SR">Suriname</option>\n' +
            '                                                <option value="SJ">Svalbard and Jan Mayen</option>\n' +
            '                                                <option value="SZ">Swaziland</option>\n' +
            '                                                <option value="SE">Sweden</option>\n' +
            '                                                <option value="CH">Switzerland</option>\n' +
            '                                                <option value="SY">Syrian Arab Republic</option>\n' +
            '                                                <option value="TW">Taiwan, Province of China</option>\n' +
            '                                                <option value="TJ">Tajikistan</option>\n' +
            '                                                <option value="TZ">Tanzania, United Republic of</option>\n' +
            '                                                <option value="TH">Thailand</option>\n' +
            '                                                <option value="TL">Timor-Leste</option>\n' +
            '                                                <option value="TG">Togo</option>\n' +
            '                                                <option value="TK">Tokelau</option>\n' +
            '                                                <option value="TO">Tonga</option>\n' +
            '                                                <option value="TT">Trinidad and Tobago</option>\n' +
            '                                                <option value="TN">Tunisia</option>\n' +
            '                                                <option value="TR">Turkey</option>\n' +
            '                                                <option value="TM">Turkmenistan</option>\n' +
            '                                                <option value="TC">Turks and Caicos Islands</option>\n' +
            '                                                <option value="TV">Tuvalu</option>\n' +
            '                                                <option value="UG">Uganda</option>\n' +
            '                                                <option value="UA">Ukraine</option>\n' +
            '                                                <option value="AE">United Arab Emirates</option>\n' +
            '                                                <option value="GB">United Kingdom</option>\n' +
            '                                                <option value="US">United States</option>\n' +
            '                                                <option value="UM">United States Minor Outlying Islands</option>\n' +
            '                                                <option value="UY">Uruguay</option>\n' +
            '                                                <option value="UZ">Uzbekistan</option>\n' +
            '                                                <option value="VU">Vanuatu</option>\n' +
            '                                                <option value="VE">Venezuela, Bolivarian Republic of</option>\n' +
            '                                                <option value="VN">Viet Nam</option>\n' +
            '                                                <option value="VG">Virgin Islands, British</option>\n' +
            '                                                <option value="VI">Virgin Islands, U.S.</option>\n' +
            '                                                <option value="WF">Wallis and Futuna</option>\n' +
            '                                                <option value="EH">Western Sahara</option>\n' +
            '                                                <option value="YE">Yemen</option>\n' +
            '                                                <option value="ZM">Zambia</option>\n' +
            '                                                <option value="ZW">Zimbabwe</option>\n' +
            '                                            </select>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '\n' +
            '\n' +
            '                                </div>');
    } else {
        $("#extrapoint").empty();
    }
});






$(document).ready(function(){
    $("#Einem").hover(function(){
        $(".earn").show();
        $(".GE").hide();
    });
});


$(document).ready(function(){
    $("#Profile").hover(function(){
        $(".experten").show();
    });
});

$(document).ready(function(){
    $("#Pro2").hover(function(){
        $(".experten").show();
    });
});

$(document).ready(function(){
    $("#Pro3").hover(function(){
        $(".experten").show();
    });
});

$(document).ready(function(){
    $("#Pro4").hover(function(){
        $(".experten").show();
    });
});

$(document).ready(function(){
    $("#Pro5").hover(function(){
        $(".experten").show();
    });
});

$(document).ready(function(){
    $("#Pro6").hover(function(){
        $(".experten").show();
    });
});






