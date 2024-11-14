function shuffle(sourceArray) {
  for (var i = 0; i < sourceArray.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (sourceArray.length - i));

    var temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}

var members = [{"company":"City of Vienna","name":"Smart Data Wien","img":"https://www.fiware.org/style/imgs/Marketplace/product/cities4cities/logo_CityOfVienna.svg","fiwareMember":true,"fiwareIhub":false,"companyLink":"../product-details/?category=cities&id=cityofvienna-smartdatawien","domain":["Cities","Government"],"type":"","technology":["Internet of Things","Mobility and Location","Open Data"],"year":2017,"content":"Urban Data Platform of the City of Vienna"}];
var nonMembers = [];
var pageData = shuffle(members).concat(shuffle(nonMembers));

loadProducts();