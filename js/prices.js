var mleadsnew = "9ceOZn8iF4HEOYyawfv3hVv4Jqa3pU33";
var cartinfo = {
  country: "UA",
  prices: {
    "6880": {
      AE: {
        price: "149.00",

        old_price: "317",
        geo_code: "AE",

        currency: "AED",
        currency_code: "AED",
        description: "",
        name: "The Cooler Bag SANNE - 8L"
      }
    }
  }
};

function cartTelCheck(id, show_errors, t, e) {
  var div = document.getElementById(id) || null;
  if (div == null) return true;
  if (countOrder > 0) return false;
  var phone = (div.value || "").replace(/[^0-9]+/, "");
  var textName = (div.value || "").replace(/[^0-9]+/, "");

  var phoneLen = phone.length || 0;
  if (phoneLen < 2 || typeof phone != "string") {
    if (show_errors == true) {
      if (navigator && navigator.language) {
        if (navigator.language == "pl") {
          alert("Proszę podać poprawny numer telefonu.");
        } else if (navigator.language == "ru") {
          alert("Укажите корректный номер телефона.");
        } else if (navigator.language == "uk") {
          alert("Укажите корректный номер телефона.");
        } else {
          alert("Please enter a valid phone number.");
        }
      } else {
        alert("Please enter a valid phone number.");
      }
    }
    return false;
  }
  var textNameLen = textName.length || 0;
  if (textNameLen < 2 || typeof textName != "string") {
    if (show_errors == true) {
      if (navigator && navigator.language) {
        if (navigator.language == "pl") {
          alert("Proszę podać poprawny numer telefonu.");
        } else if (navigator.language == "ru") {
          alert("Укажите корректный номер телефона.");
        } else if (navigator.language == "uk") {
          alert("Укажите корректный номер телефона.");
        } else {
          alert("Please enter a valid textName number.");
        }
      } else {
        alert("Please enter a valid textName number.");
      }
    }
    return false;
  }

  if (cartStartTime > 0) {
    var timeLeft = cartTime() - cartStartTime || 0;
    t.action += "&t=" + timeLeft;
  }
  try {
    var cw = parseInt(window.screen.width || 0) || 0;
    var ch = parseInt(window.screen.height || 0) || 0;
    t.action += "&s=" + cw + "x" + ch;
    console.log("&s=" + cw + "x" + ch);
  } catch (e) {
    console.log(e.message);
  }

  if (typeof yandex_goal == "function") {
    yandex_goal();
    for (var i = 0; i < 200; i++) {}
  }
  countOrder++;
}

function pastedData() {
  var land_forms = document.getElementsByTagName("form");
  for (var k = 0; k < land_forms.length; k++) {
    land_forms[k].action = land_forms[k].action + "&copypaste=1";
  }
}
