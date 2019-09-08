var apiDataA = new XMLHttpRequest();
apiDataA.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
apiDataA.send();
apiDataA.onload = function () {
    var drinkObject = JSON.parse(apiDataA.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksA").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}

var apiDataB = new XMLHttpRequest();
apiDataB.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b');
apiDataB.send();
apiDataB.onload = function () {
    var drinkObject = JSON.parse(apiDataB.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksB").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataC = new XMLHttpRequest();
apiDataC.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c');
apiDataC.send();
apiDataC.onload = function () {
    var drinkObject = JSON.parse(apiDataC.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksC").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataD = new XMLHttpRequest();
apiDataD.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=d');
apiDataD.send();
apiDataD.onload = function () {
    var drinkObject = JSON.parse(apiDataD.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksD").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataE = new XMLHttpRequest();
apiDataE.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=e');
apiDataE.send();
apiDataE.onload = function () {
    var drinkObject = JSON.parse(apiDataE.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksE").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataF = new XMLHttpRequest();
apiDataF.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=f');
apiDataF.send();
apiDataF.onload = function () {
    var drinkObject = JSON.parse(apiDataF.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksF").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataG = new XMLHttpRequest();
apiDataG.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g');
apiDataG.send();
apiDataG.onload = function () {
    var drinkObject = JSON.parse(apiDataG.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksG").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataH = new XMLHttpRequest();
apiDataH.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=h');
apiDataH.send();
apiDataH.onload = function () {
    var drinkObject = JSON.parse(apiDataH.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksH").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataI = new XMLHttpRequest();
apiDataI.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=i');
apiDataI.send();
apiDataI.onload = function () {
    var drinkObject = JSON.parse(apiDataI.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksI").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataJ = new XMLHttpRequest();
apiDataJ.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=j');
apiDataJ.send();
apiDataJ.onload = function () {
    var drinkObject = JSON.parse(apiDataJ.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksJ").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataK = new XMLHttpRequest();
apiDataK.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=k');
apiDataK.send();
apiDataK.onload = function () {
    var drinkObject = JSON.parse(apiDataK.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksK").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataL = new XMLHttpRequest();
apiDataL.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=l');
apiDataL.send();
apiDataL.onload = function () {
    var drinkObject = JSON.parse(apiDataL.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksL").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataM = new XMLHttpRequest();
apiDataM.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m');
apiDataM.send();
apiDataM.onload = function () {
    var drinkObject = JSON.parse(apiDataM.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksM").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataN = new XMLHttpRequest();
apiDataN.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=n');
apiDataN.send();
apiDataN.onload = function () {
    var drinkObject = JSON.parse(apiDataN.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksN").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataO = new XMLHttpRequest();
apiDataO.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=o');
apiDataO.send();
apiDataO.onload = function () {
    var drinkObject = JSON.parse(apiDataO.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksO").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataP = new XMLHttpRequest();
apiDataP.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=p');
apiDataP.send();
apiDataP.onload = function () {
    var drinkObject = JSON.parse(apiDataP.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksP").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataQ = new XMLHttpRequest();
apiDataQ.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=q');
apiDataQ.send();
apiDataQ.onload = function () {
    var drinkObject = JSON.parse(apiDataQ.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksQ").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataR = new XMLHttpRequest();
apiDataR.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=r');
apiDataR.send();
apiDataR.onload = function () {
    var drinkObject = JSON.parse(apiDataR.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksR").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataS = new XMLHttpRequest();
apiDataS.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=s');
apiDataS.send();
apiDataS.onload = function () {
    var drinkObject = JSON.parse(apiDataS.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksS").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataT = new XMLHttpRequest();
apiDataT.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=t');
apiDataT.send();
apiDataT.onload = function () {
    var drinkObject = JSON.parse(apiDataT.response);

    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksT").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataV = new XMLHttpRequest();
apiDataV.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=v');
apiDataV.send();
apiDataV.onload = function () {
    var drinkObject = JSON.parse(apiDataV.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksV").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataW = new XMLHttpRequest();
apiDataW.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=w');
apiDataW.send();
apiDataW.onload = function () {
    var drinkObject = JSON.parse(apiDataW.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksW").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataY = new XMLHttpRequest();
apiDataY.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=y');
apiDataY.send();
apiDataY.onload = function () {
    var drinkObject = JSON.parse(apiDataY.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksY").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataZ = new XMLHttpRequest();
apiDataZ.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z');
apiDataZ.send();
apiDataZ.onload = function () {
    var drinkObject = JSON.parse(apiDataZ.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksZ").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
            "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}


var apiDataAl = new XMLHttpRequest();
apiDataAl.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
apiDataAl.send();
apiDataAl.onload = function () {
    var drinkObject = JSON.parse(apiDataAl.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksAl").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDatanAl = new XMLHttpRequest();
apiDatanAl.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');
apiDatanAl.send();
apiDatanAl.onload = function () {
    var drinkObject = JSON.parse(apiDatanAl.response);


    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksNal").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataOd = new XMLHttpRequest();
apiDataOd.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink');
apiDataOd.send();
apiDataOd.onload = function () {
    var drinkObject = JSON.parse(apiDataOd.response);

    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksOd").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</div>" + "</div>" + "</div>");
    });
}
var apiDataCd = new XMLHttpRequest();
apiDataCd.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
apiDataCd.send();
apiDataCd.onload = function () {
    var drinkObject = JSON.parse(apiDataCd.response);

    drinkObject.drinks.forEach(function (elementDrink) {
        $("#alldrinksCd").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
            "</div>" + "</div>" + "</div>");
    });
}

$("#searchbtn").click(function () {
    var searchStr = $("#searchDrink").val();
    var urlApi = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchStr;
    var apiDataSrc = new XMLHttpRequest();
    apiDataSrc.open('GET', urlApi);
    apiDataSrc.send();
    apiDataSrc.onload = function () {
        var drinkSrc = JSON.parse(apiDataSrc.response);
        drinkSrc.drinks.forEach(function (elementDrink) {
            $("#searchdrinks").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
                "<img  class='card-img-top' src=" + elementDrink.strDrinkThumb + ">" +
                "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + elementDrink.strDrink + "</b>" +
                "</h5>" + "<p class='card-text'>Catogery: " + elementDrink.strCategory + "</p>" +
                "<p class='card-text'>Type: " + elementDrink.strAlcoholic + "</p>" +
                "</div>" + "</div>" + "</div>");
        });
    }
});