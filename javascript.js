//const edifile = require('./node_modules/edifact/messages/DESADV.json')
import myJson from './Edifact-JSON-ORDERS-PurchaseOrder.json' assert {type: 'json'};
//------------------------------------------
function csvToArray(str, delimiter = ",") {

  // slice from start of text to the first \n index
  // use split to create an array from string by delimiter
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  
  // slice from \n index + 1 to the end of the text
  // use split to create an array of each csv value row
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  
  // Map the rows
  // split values from each row into an array
  // use headers.reduce to create an object
  // object properties derived from headers:values
  // the object passed as an element of the array
  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
    object[header] = values[index];
    return object;
    }, {});
    return el;
  });
  
  // return the array
  return arr;
  }
  
  myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = csvFile.files[0];
  const reader = new FileReader();
  
  reader.onload = function (e) {
    const text = e.target.result;
    const csvdata = csvToArray(text);
    var testid;
    var testvs;
   // document.write(JSON.stringify(data));
   csvdata.forEach(function(attendeeInformation){
    $('#list-of-attendees').append(
    '<div class="well attendee-entry">' +
             //'<b>ID: </b>' + JSON.stringify(data) + '<br>' +
          //     '<b>Symbol: </b>' + attendeeInformation.name + '<br>' +
          //     '<b>Name: </b>' + attendeeInformation.role + '<br>' +
          //    '<b>Image: </b>' + attendeeInformation.country + '<br>' +
      //    '<b>Current Price: </b>' + attendeeInformation.current_price + '<br>' +
      '<b>Symbol: </b>' + attendeeInformation.id + '<br>' +
      '<b>Symbol: </b>' + attendeeInformation.vscoin + '<br>' +
           '</div>'
      , 
    )
    testid = attendeeInformation.id
   testvs=attendeeInformation.vscoin
      
      ,console.log(testid,testvs)
  
     // taking data from csv file and loading it into API url request
  		const settings = {
  	"async": true,
  	"crossDomain": true,
  	"url": "https://coingecko.p.rapidapi.com/simple/price?ids="+testid+"&"+"vs_currencies="+testvs,
  	"method": "GET",
  	"headers": {
  		"X-RapidAPI-Key": "834035ec6dmsha17893c5c3a5c27p1260a1jsn7dc20ec0c632",
  		"X-RapidAPI-Host": "coingecko.p.rapidapi.com"
  	}
  };
  
  $.ajax(settings).done(function (response) {
  	console.log(response);
  });
  
  //const axios = require("axios");
  
  const options = {
    method: 'GET',
    url: 'https://coingecko.p.rapidapi.com/simple/price',
    params: {ids: testid, vs_currencies: testvs},
    headers: {
      'X-RapidAPI-Key': '834035ec6dmsha17893c5c3a5c27p1260a1jsn7dc20ec0c632',
      'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
    }
  };
  
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });
  
  },
  
  
   )}
   
  ;
  
  reader.readAsText(input);
  
  });
  
  
  // const input = document.querySelector('input')
  // const fileReader = new FileReader()
  // fileReader.onload = (e) => {
  //   console.log(e.target.result)
  // }
  
  // input.onchange = (e) => {
  //   const [file] = e.target.files
  //   fileReader.readAsBinaryString(file)
  // }
  $(document).ready(function apiCall(){
    $('#get-attendees-button').click(function apiCall() {
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc",
    "method": "GET",
    "headers": {
      "X-RapidAPI-Key": "834035ec6dmsha17893c5c3a5c27p1260a1jsn7dc20ec0c632",
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com"
    }
      
  };
  
  $.ajax(settings).done(function (response,res,data) {
   // $('#method').html(response)
  
   //Looping through each response in the file 
   response.forEach(function(attendeeInformation){
  
  //append to the html file 
   $('#list-of-attendees').append(
    
        
      '<div class="well attendee-entry">' +
             '<b>ID: </b>' + attendeeInformation.id + '<br>' +
             '<b>Symbol: </b>' + attendeeInformation.symbol + '<br>' +
             '<b>Name: </b>' + attendeeInformation.name + '<br>' +
             '<b>Image: </b>' + attendeeInformation.image + '<br>' +
         '<b>Current Price: </b>' + attendeeInformation.current_price + '<br>' +
           '</div>'
   
  
          );
    
  //console.log(csvBlob);
  
  const keys = Object.keys(response[0]);
  //spitting json response and adding them to an array
 // const commaSeparatedString =[attendeeInformation.current_price,attendeeInformation.name]
  const commaSeparatedString = [keys.join(",") , response.map(row => keys.map(key => row[key]).join(",")).join("\n")].join("\n")
  const csvBlob = new Blob([commaSeparatedString])

    const a2 = document.getElementById("a2")
  a2.href = URL.createObjectURL(csvBlob)
  });
  
  
    // //Taking Json Key name and using it as CSV header 
    // const keys = Object.keys(response[0]);
    // //spitting json response and adding them to an array
    // const commaSeparatedString = [keys.join(",") , response.map(row => keys.map(key => row[key]).join(",")).join("\n")].join("\n")
    // const csvBlob = new Blob([commaSeparatedString])
  
    //   const a2 = document.getElementById("a2")
    // a2.href = URL.createObjectURL(csvBlob)
  });
  });



  //passing assigned values to json array
  //Can output edi file with assigned values
  myJson.FTX[0].Textsubjectqualifier_01= 'fff'
 
  console.log(myJson);
  })

  //-----------------------Testing json
 
 
  const orderjson = '{"QTY":["48","32","27"]}'
  
 // '{"QTY":[{"QUANTITYDETAILS_01": { "Quantityqualifier_01": "21", "Quantity_02": "48", "Measureunitqualifier_03": null  } } ]}'
 
 
  const myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
  const myObj = JSON.parse(orderjson);
  //myObj.QTY[2]="toy"
  document.getElementById("demo").innerHTML = myObj.QTY[2];







  //-----------------------------------------------------//
  //Stead EDI API KEY sE8OXrl.0uOJd6KCCfLaOOQLZHZxXmXh
  // SFTP Username BUWSDB73
  //sftp connection string sftp BUWSDB73@transfer.us.stedi.com
  //password oFhINuUzfdbdJdvu