alert("JS Activated");

function randomNumber(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 2)) + minCust;
}

const hoursBusy = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];

console.log(table);

//Creating the header
function headerCreation() {
  let headerRow = document.createElement("tr");
  let tblHdr = document.createElement("th");
  tableHdr.textContent = "Locations";
  headerRow.appendChild(tableHdr);
  //
  for (let i = 0; i < hoursBusy.length; i++) {
    tableHdr = document.createElement("th");
    tblHdr.textContent = hoursBusy[i];
    headerRow.appendChild(tableHdr);
  }
  tableHdr = document.createElement("th");
  tableHdr.textContent = "Daily Total for Location";
  headerRow.appendChild(tableHdr);
  table.appendChild(headerRow);
}

createHeader();



//Creating ojects "Seattle"
let seattleLocation = {
  //listing the properties of the object.
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  CookiePH: [],
  CookieSalePH: [],
  SoldPerDay: 0,

  //Random turnout of customer expectations.
  randomTurnoutCE: function () {
    for (let z = 0; z < hoursBusy.length; z++) {
      this.CookiePH.push(randomNumber(this.minCustomers, this.maxCustomers));
    }
  },
  getTheCookiesSPH: function () {
    this.theRandomTurnoutCE();
    for (let c = 0; c < this.CookiePH.length; c++) {
      let todayCookies = Math.floor(this.CookiePH[c] * this.avgCookies);
      this.CookieSalePH.push(todayCookies);
      
      this.SoldPerDay += todayCookies;
    }
  },

  //"Make" is writing out code on the webpage.
  make() {
    this.getTheCookiesSPH();
    let dataRow = document.createElement("tr"); 
    let locationData = document.createElement("td");
    locationData.textContent = "Seattle";
    dataRow.appendChild(seattleData);

    //for loop going through array of busy hours
    for (let i = 0; i < hoursOfBusy.length; i++) {
      locationData = document.createElement("td");
      locationData.textContent = this.CookieSalePH[i];
      dataRow.appendChild(seattleData);
    }
    locationData = document.createElement("td");
    locationData.textContent = this.SoldPerDay;
    dataRow.appendChild(locationData);
    table.appendChild(dataRow);
  },
};



//Creating obejcts "Tokyo"
let tokyoLocation = {
  
  //listing the properties of the object.
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  CookiePH: [],
  CookieSalePH: [],
  SoldPerDay: 0,

  //Random turnout of customer expectations.
  theRandomTurnoutCE: function () {
    for (let z = 0; z < hoursBusy.length; z++) {
      this.CookiePH.push(randomNumber(this.minCustomers, this.maxCustomers));
    }
  },
  getTheCookiesSPH: function () {
    this.theRandomTurnoutCE();
    for (let c = 0; c < this.CookiePH.length; c++) {
      let todayCookies = Math.floor(this.CookiePH[c] * this.avgCookies);
      this.CookieSalePH.push(todayCookies);
      
      this.SoldPerDay += todayCookies;
    }
  },

  //"Make" is writing out code on the webpage.
  make() {
    this.getTheCookiesSPH();
    let dataRow = document.createElement("tr"); 
    let locationData = document.createElement("td");
    locationData.textContent = "Tokyo";
    dataRow.appendChild(locationData);
    
  //for loop going through array of busy hours
    for (let i = 0; i < hoursOfBusy.length; i++) {
      loactionData = document.createElement("td");
      locationData.textContent = this.CookieSalePH[i];
      dataRow.appendChild(locationData);
    }
    locationData = document.createElement("td");
    locationData.textContent = this.totalSoldPerDay;
    dataRow.appendChild(locationData);
    table.appendChild(dataRow);
  },
};

 

//Creating ojects "Dubai"
 let dubaiLocation = {
  
  //listing the properties of the object.
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7,
    CookiePH:[],
    CookieSalePH: [],
    SoldPerDay: 0,
  
    //Random turnout of customer expectations.
    theRandomTurnoutCE: function () {
      for (let z = 0; z < hoursBusy.length; z++) {
        this.CookiePH.push(randomNumber(this.minCust, this.maxCust));
      }
    },
    getTheCookiesSPH: function () {
      this.theRandomTurnoutCE();
      for (let c = 0; c < this.CookiePH.length; c++) {
        let todayCookies = Math.floor(this.CookiePH[c] * this.avgCookies);
        this.CookieSalePH.push(todayCookies);
        
        this.SoldPerDay += todayCookies;
      }
    },
    //"Make" is writing out code on the webpage.
    make() {
      this.getTheCookiesSPH();
      let dataRow = document.createElement("tr"); //this creates a tr node
      let locationData = document.createElement("td");
      locationData.textContent = "Dubai";
      dataRow.appendChild(locationData);
     
      //for loop going through array of busy hours
      for (let i = 0; i < hoursOfBusy.length; i++) {
        locationData = document.createElement("td");
        locationData.textContent = this.CookieSalePH[i];
        dataRow.appendChild(locationData);
      }
      locationData = document.createElement("td");
      locationData.textContent = this.SoldPerDay;
      dataRow.appendChild(locationData);
      table.appendChild(dataRow);
    },
  };



  //Creating ojects "Paris"
let parisLocation = {
  
  //listing the properties of the object.
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3,
    CookiePH:[],
    CookieSalePH: [],
    SoldPerDay: 0,
  
    //Random turnout of customer expectations.
    theRandomTurnoutCE: function () {
      for (let z = 0; z < hoursBusy.length; z++) {
        this.CookiePH.push(randomNumber(this.minCustomers, this.maxCustomers));
      }
    },
    getTheCookiesSPH: function () {
      this.theRandomTurnoutCE();
      for (let c = 0; c < this.CookiePH.length; c++) {
        let todayCookies = Math.floor(this.CookiePH[c] * this.avgCookies);
        this.CookieSalePH.push(todayCookies);
        
        this.SoldPerDay += todayCookies;
      }
    },
    
    //"Make" is writing out code on the webpage.
    make() {
      this.getTheCookiesSPH();
      let dataRow = document.createElement("tr");
      let locationData = document.createElement("td");
      locationData.textContent = "Paris";
      dataRow.appendChild(locationData);
      
    //for loop going through array of busy hours
      for (let i = 0; i < hoursOfBusy.length; i++) {
        locationData = document.createElement("td");
        loctionData.textContent = this.CookieSalePH[i];
        dataRow.appendChild(locationData);
      }
      locationData = document.createElement("td");
      locationData.textContent = this.SoldPerDay;
      dataRow.appendChild(locationData);
      table.appendChild(dataRow);
    },
  };




   //Creating ojects "Lima"
let limaLocation = {
  
  //listing the properties of the object.
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6,
    CookiePH:[],
    CookieSalePH: [],
    SoldPerDay: 0,
  
    //Random turnout of customer expectations.
    theRandomTurnoutCE: function () {
      for (let z = 0; z < hoursOfBusy.length; z++) {
        this.CookiePH.push(randomNumber(this.minCust, this.maxCust));
      }
    },
    getTheCookiesSPH: function () {
      this.theRandomTurnoutCE();
      for (let c = 0; c < this.CookiePH.length; c++) {
        let todayCookies = Math.floor(this.CookiePH[c] * this.avgCookies);
        this.CookieSalePH.push(todayCookies);
        
        this.totalSoldPerDay += todayCookies;
      }
    },
    
    //"Make" is writing out code on the webpage.
    make() {
      this.getTheCookiesSPH();
      let dataRow = document.createElement("tr");
      let seattleData = document.createElement("td");
      seattleData.textContent = "Lima";
      dataRow.appendChild(seattleData);
      
      //for loop going through array of busy hours
      for (let i = 0; i < hoursOfBusy.length; i++) {
        seattleData = document.createElement("td");
        seattleData.textContent = this.CookieSalePH[i];
        dataRow.appendChild(seattleData);
      }
      seattleData = document.createElement("td");
      seattleData.textContent = this.totalSoldPerDay;
      dataRow.appendChild(seattleData);
      table.appendChild(dataRow);
    },
  };





