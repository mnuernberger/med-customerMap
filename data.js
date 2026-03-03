const INITIAL_DATA = [
  {
    "ags": "36",
    "name": "Alb-Donau",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "11",
    "name": "Baden-Baden Städte",
    "bundesland": "Baden-Württemberg",
    "typ": "Kreisfreie Städte",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "37",
    "name": "Biberach",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "38",
    "name": "Bodensee",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "1",
    "name": "Breisgau-Hochschwarzwald",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "23",
    "name": "Böblingen",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "12",
    "name": "Calw",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "2",
    "name": "Emmendingen",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "13",
    "name": "Enz",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "24",
    "name": "Esslingen",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "3",
    "name": "Freiburg",
    "bundesland": "Baden-Württemberg",
    "typ": "Kreisfreie Städte",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "14",
    "name": "Freudenstadt",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "25",
    "name": "Göppingen",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "15",
    "name": "Heidelberg Städte",
    "bundesland": "Baden-Württemberg",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "26",
    "name": "Heidenheim",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "28",
    "name": "Heilbronn",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "27",
    "name": "Heilbronn city Städte",
    "bundesland": "Baden-Württemberg",
    "typ": "Kreisfreie Städte",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "29",
    "name": "Hohenlohe",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "17",
    "name": "Karlsruhe",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "16",
    "name": "Karlsruhe Städte",
    "bundesland": "Baden-Württemberg",
    "typ": "Kreisfreie Städte",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "4",
    "name": "Konstanz",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "30",
    "name": "Ludwigsburg",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "5",
    "name": "Lörrach",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "31",
    "name": "Main-Tauber",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "18",
    "name": "Mannheim Städte",
    "bundesland": "Baden-Württemberg",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "19",
    "name": "Neckar-Odenwald-Kreis",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "6",
    "name": "Ortenaukreis",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "32",
    "name": "Ostalbkreis",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "20",
    "name": "Pforzheim Städte",
    "bundesland": "Baden-Württemberg",
    "typ": "Kreisfreie Städte",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "21",
    "name": "Rastatt",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "39",
    "name": "Ravensburg",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "33",
    "name": "Rems-Murr-Kreis",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "40",
    "name": "Reutlingen",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "22",
    "name": "Rhein-Neckar-Kreis",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "7",
    "name": "Rottweil",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "8",
    "name": "Schwarzwald-Baar-Kreis",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "34",
    "name": "Schwäbisch Hall",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "41",
    "name": "Sigmaringen",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "35",
    "name": "Stuttgart Städte",
    "bundesland": "Baden-Württemberg",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "9",
    "name": "Tuttlingen",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "42",
    "name": "Tübingen",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "43",
    "name": "Ulm Städte",
    "bundesland": "Baden-Württemberg",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "10",
    "name": "Waldshut",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "44",
    "name": "Zollernalbkreis",
    "bundesland": "Baden-Württemberg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "115",
    "name": "Aichach-Friedberg",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "69",
    "name": "Altötting",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "106",
    "name": "Amberg Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "105",
    "name": "Amberg-Sulzbach",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "46",
    "name": "Ansbach",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "45",
    "name": "Ansbach Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "130",
    "name": "Aschaffenburg",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "129",
    "name": "Aschaffenburg Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "117",
    "name": "Augsburg",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "116",
    "name": "Augsburg Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "131",
    "name": "Bad Kissingen",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "70",
    "name": "Bad Tölz-Wolfratshausen",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "93",
    "name": "Bamberg",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "92",
    "name": "Bamberg Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "95",
    "name": "Bayreuth",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "94",
    "name": "Bayreuth Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "71",
    "name": "Berchtesgadener Land",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "107",
    "name": "Cham",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "97",
    "name": "Coburg",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "96",
    "name": "Coburg Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "72",
    "name": "Dachau",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "57",
    "name": "Deggendorf",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "118",
    "name": "Dillingen",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "58",
    "name": "Dingolfing-Landau",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "119",
    "name": "Donau-Ries",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "73",
    "name": "Ebersberg",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "74",
    "name": "Eichstätt",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "75",
    "name": "Erding",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "48",
    "name": "Erlangen Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "47",
    "name": "Erlangen-Höchstadt",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "98",
    "name": "Forchheim",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "76",
    "name": "Freising",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "59",
    "name": "Freyung-Grafenau",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "77",
    "name": "Fürstenfeldbruck",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "50",
    "name": "Fürth",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "49",
    "name": "Fürth Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "78",
    "name": "Garmisch-Partenkirchen",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "120",
    "name": "Günzburg",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "132",
    "name": "Haßberge",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "100",
    "name": "Hof",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "99",
    "name": "Hof Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "79",
    "name": "Ingolstadt Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "121",
    "name": "Kaufbeuren Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "60",
    "name": "Kelheim",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "122",
    "name": "Kempten Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "133",
    "name": "Kitzingen",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "101",
    "name": "Kronach",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "102",
    "name": "Kulmbach",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "80",
    "name": "Landsberg",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "62",
    "name": "Landshut",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "61",
    "name": "Landshut Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "103",
    "name": "Lichtenfels",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "123",
    "name": "Lindau",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "134",
    "name": "Main-Spessart",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "124",
    "name": "Memmingen Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "81",
    "name": "Miesbach",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "135",
    "name": "Miltenberg",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "84",
    "name": "Munich Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "82",
    "name": "Mühldorf",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "83",
    "name": "München",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "125",
    "name": "Neu-Ulm",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "85",
    "name": "Neuburg-Schrobenhausen",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "108",
    "name": "Neumarkt",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "109",
    "name": "Neustadt",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "51",
    "name": "Neustadt-Bad Windsheim",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "52",
    "name": "Nuremberg Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "53",
    "name": "Nürnberger Land",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "126",
    "name": "Oberallgäu",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "127",
    "name": "Ostallgäu",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "64",
    "name": "Passau",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "63",
    "name": "Passau Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "86",
    "name": "Pfaffenhofen",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "65",
    "name": "Regen",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "111",
    "name": "Regensburg",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "110",
    "name": "Regensburg Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "136",
    "name": "Rhön-Grabfeld",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "88",
    "name": "Rosenheim",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "87",
    "name": "Rosenheim Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "54",
    "name": "Roth",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "66",
    "name": "Rottal-Inn",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "55",
    "name": "Schwabach Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "112",
    "name": "Schwandorf",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "138",
    "name": "Schweinfurt",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "137",
    "name": "Schweinfurt Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "89",
    "name": "Starnberg",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "68",
    "name": "Straubing Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "67",
    "name": "Straubing-Bogen",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "113",
    "name": "Tirschenreuth",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "90",
    "name": "Traunstein",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "128",
    "name": "Unterallgäu",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "114",
    "name": "Weiden Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "91",
    "name": "Weilheim-Schongau",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "56",
    "name": "Weißenburg-Gunzenhausen",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "104",
    "name": "Wunsiedel",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "140",
    "name": "Würzburg",
    "bundesland": "Bayern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "139",
    "name": "Würzburg Städte",
    "bundesland": "Bayern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "141",
    "name": "Berlin",
    "bundesland": "Berlin",
    "typ": "Kreisfreie Städte",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "142",
    "name": "Barnim",
    "bundesland": "Brandenburg",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "143",
    "name": "Brandenburg an der Havel Städte",
    "bundesland": "Brandenburg",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "144",
    "name": "Cottbus Städte",
    "bundesland": "Brandenburg",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "145",
    "name": "Dahme-Spreewald",
    "bundesland": "Brandenburg",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "146",
    "name": "Elbe-Elster",
    "bundesland": "Brandenburg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "147",
    "name": "Frankfurt am Oder Städte",
    "bundesland": "Brandenburg",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "148",
    "name": "Havelland",
    "bundesland": "Brandenburg",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "149",
    "name": "Märkisch-Oderland",
    "bundesland": "Brandenburg",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "150",
    "name": "Oberhavel",
    "bundesland": "Brandenburg",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "151",
    "name": "Oberspreewald-Lausitz",
    "bundesland": "Brandenburg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "152",
    "name": "Oder-Spree",
    "bundesland": "Brandenburg",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "153",
    "name": "Ostprignitz-Ruppin",
    "bundesland": "Brandenburg",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "155",
    "name": "Potsdam Städte",
    "bundesland": "Brandenburg",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "154",
    "name": "Potsdam-Mittelmark",
    "bundesland": "Brandenburg",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "156",
    "name": "Prignitz",
    "bundesland": "Brandenburg",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "157",
    "name": "Spree-Neiße",
    "bundesland": "Brandenburg",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "158",
    "name": "Teltow-Fläming",
    "bundesland": "Brandenburg",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "159",
    "name": "Uckermark",
    "bundesland": "Brandenburg",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "160",
    "name": "Bremen Städte",
    "bundesland": "Bremen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "161",
    "name": "Hamburg Städte",
    "bundesland": "Hamburg",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "162",
    "name": "Bergstraße",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "164",
    "name": "Darmstadt Städte",
    "bundesland": "Hessen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "163",
    "name": "Darmstadt-Dieburg",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "165",
    "name": "Frankfurt am Main Städte",
    "bundesland": "Hessen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "181",
    "name": "Fulda",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "176",
    "name": "Gießen",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "166",
    "name": "Groß-Gerau",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "182",
    "name": "Hersfeld-Rotenburg",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "167",
    "name": "Hochtaunuskreis",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "184",
    "name": "Kassel",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "183",
    "name": "Kassel Städte",
    "bundesland": "Hessen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "177",
    "name": "Lahn-Dill-Kreis",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "178",
    "name": "Limburg-Weilburg",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "168",
    "name": "Main-Kinzig-Kreis",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "169",
    "name": "Main-Taunus-Kreis Städte",
    "bundesland": "Hessen",
    "typ": "Kreisfreie Städte",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "179",
    "name": "Marburg-Biedenkopf",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "170",
    "name": "Odenwaldkreis",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "172",
    "name": "Offenbach",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "171",
    "name": "Offenbach am Main Städte",
    "bundesland": "Hessen",
    "typ": "Kreisfreie Städte",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "173",
    "name": "Rheingau-Taunus-Kreis",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "185",
    "name": "Schwalm-Eder-Kreis",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "180",
    "name": "Vogelsbergkreis",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "186",
    "name": "Waldeck-Frankenberg",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "187",
    "name": "Werra-Meißner-Kreis",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "174",
    "name": "Wetteraukreis",
    "bundesland": "Hessen",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "175",
    "name": "Wiesbaden Städte",
    "bundesland": "Hessen",
    "typ": "Kreisfreie Städte",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "188",
    "name": "Bad Doberan",
    "bundesland": "Mecklenburg-Vorpommern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "189",
    "name": "Demmin",
    "bundesland": "Mecklenburg-Vorpommern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "190",
    "name": "Greifswald Städte",
    "bundesland": "Mecklenburg-Vorpommern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "191",
    "name": "Güstrow",
    "bundesland": "Mecklenburg-Vorpommern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "192",
    "name": "Ludwigslust",
    "bundesland": "Mecklenburg-Vorpommern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "193",
    "name": "Mecklenburg-Strelitz",
    "bundesland": "Mecklenburg-Vorpommern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "194",
    "name": "Müritz",
    "bundesland": "Mecklenburg-Vorpommern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "195",
    "name": "Neubrandenburg Städte",
    "bundesland": "Mecklenburg-Vorpommern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "196",
    "name": "Nordvorpommern",
    "bundesland": "Mecklenburg-Vorpommern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "197",
    "name": "Nordwestmecklenburg",
    "bundesland": "Mecklenburg-Vorpommern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "198",
    "name": "Ostvorpommern",
    "bundesland": "Mecklenburg-Vorpommern",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "199",
    "name": "Parchim",
    "bundesland": "Mecklenburg-Vorpommern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "200",
    "name": "Rostock Städte",
    "bundesland": "Mecklenburg-Vorpommern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "201",
    "name": "Rügen",
    "bundesland": "Mecklenburg-Vorpommern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "202",
    "name": "Schwerin Städte",
    "bundesland": "Mecklenburg-Vorpommern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "203",
    "name": "Stralsund Städte",
    "bundesland": "Mecklenburg-Vorpommern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "204",
    "name": "Uecker-Randow",
    "bundesland": "Mecklenburg-Vorpommern",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "205",
    "name": "Wismar Städte",
    "bundesland": "Mecklenburg-Vorpommern",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "235",
    "name": "Ammerland",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "236",
    "name": "Aurich",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "206",
    "name": "Braunschweig Städte",
    "bundesland": "Niedersachsen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "224",
    "name": "Celle",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "237",
    "name": "Cloppenburg",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "225",
    "name": "Cuxhaven",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "217",
    "name": "Diepholz",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "238",
    "name": "Emden Städte",
    "bundesland": "Niedersachsen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "239",
    "name": "Emsland",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "240",
    "name": "Friesland",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "207",
    "name": "Gifhorn",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "208",
    "name": "Goslar",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "241",
    "name": "Grafschaft Bentheim",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "209",
    "name": "Göttingen",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "218",
    "name": "Hamelin-Pyrmont",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "219",
    "name": "Hanover",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "226",
    "name": "Harburg",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "210",
    "name": "Helmstedt",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "220",
    "name": "Hildesheim",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "221",
    "name": "Holzminden",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "242",
    "name": "Leer",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "227",
    "name": "Lüchow-Dannenberg",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "228",
    "name": "Lüneburg",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "222",
    "name": "Nienburg",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "211",
    "name": "Northeim",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "244",
    "name": "Oldenburg",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "243",
    "name": "Oldenburg Städte",
    "bundesland": "Niedersachsen",
    "typ": "Kreisfreie Städte",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "246",
    "name": "Osnabrück",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "245",
    "name": "Osnabrück Städte",
    "bundesland": "Niedersachsen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "229",
    "name": "Osterholz",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "212",
    "name": "Osterode",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "213",
    "name": "Peine",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "230",
    "name": "Rotenburg",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "214",
    "name": "Salzgitter Städte",
    "bundesland": "Niedersachsen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "223",
    "name": "Schaumburg",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "231",
    "name": "Soltau-Fallingbostel",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "232",
    "name": "Stade",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "233",
    "name": "Uelzen",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "247",
    "name": "Vechta",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "234",
    "name": "Verden",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "248",
    "name": "Wesermarsch",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "249",
    "name": "Wilhelmshaven Städte",
    "bundesland": "Niedersachsen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "250",
    "name": "Wittmund",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "215",
    "name": "Wolfenbüttel",
    "bundesland": "Niedersachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "216",
    "name": "Wolfsburg Städte",
    "bundesland": "Niedersachsen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "286",
    "name": "Aachen",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "285",
    "name": "Aachen Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "263",
    "name": "Bielefeld Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "251",
    "name": "Bochum Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "287",
    "name": "Bonn Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "297",
    "name": "Borken",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "298",
    "name": "Bottrop Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "270",
    "name": "Cleves",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "299",
    "name": "Coesfeld",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "288",
    "name": "Cologne Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "252",
    "name": "Dortmund Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "271",
    "name": "Duisburg Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "289",
    "name": "Düren",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "272",
    "name": "Düsseldorf Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "253",
    "name": "Ennepe-Ruhr",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "273",
    "name": "Essen Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "290",
    "name": "Euskirchen",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "300",
    "name": "Gelsenkirchen Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "264",
    "name": "Gütersloh",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "254",
    "name": "Hagen Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "255",
    "name": "Hamm Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "291",
    "name": "Heinsberg",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "265",
    "name": "Herford",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "256",
    "name": "Herne Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "257",
    "name": "Hochsauerlandkreis",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "266",
    "name": "Höxter",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "274",
    "name": "Krefeld Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "292",
    "name": "Leverkusen Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "267",
    "name": "Lippe",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "275",
    "name": "Mettmann",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "268",
    "name": "Minden-Lübbecke",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "258",
    "name": "Märkischer Kreis",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "276",
    "name": "Mönchengladbach Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "277",
    "name": "Mülheim Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "301",
    "name": "Münster Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "293",
    "name": "Oberbergischer Kreis",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "278",
    "name": "Oberhausen Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "259",
    "name": "Olpe",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "269",
    "name": "Paderborn",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "302",
    "name": "Recklinghausen",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "279",
    "name": "Remscheid Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "294",
    "name": "Rhein-Erft-Kreis",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "280",
    "name": "Rhein-Kreis Neuss",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "295",
    "name": "Rhein-Sieg",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "296",
    "name": "Rheinisch-Bergischer Kreis",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "260",
    "name": "Siegen-Wittgenstein",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "261",
    "name": "Soest",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "281",
    "name": "Solingen Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "303",
    "name": "Steinfurt",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "262",
    "name": "Unna",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "282",
    "name": "Viersen",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "304",
    "name": "Warendorf",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "283",
    "name": "Wesel",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Landkreise",
    "anbieter": "Corhelper",
    "farbe": "#22c55e"
  },
  {
    "ags": "284",
    "name": "Wuppertal Städte",
    "bundesland": "Nordrhein-Westfalen",
    "typ": "Kreisfreie Städte",
    "anbieter": "Mobile Retter",
    "farbe": "#e63946"
  },
  {
    "ags": "305",
    "name": "Ahrweiler",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "306",
    "name": "Altenkirchen",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "316",
    "name": "Alzey-Worms",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "317",
    "name": "Bad Dürkheim",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "307",
    "name": "Bad Kreuznach",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "335",
    "name": "Bernkastel-Wittlich",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "308",
    "name": "Birkenfeld",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "336",
    "name": "Bitburg-Prüm",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "309",
    "name": "Cochem-Zell",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "318",
    "name": "Donnersbergkreis",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "319",
    "name": "Frankenthal Städte",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "320",
    "name": "Germersheim",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "322",
    "name": "Kaiserslautern",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "321",
    "name": "Kaiserslautern Städte",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "310",
    "name": "Koblenz Coblenz Städte",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "323",
    "name": "Kusel",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "324",
    "name": "Landau Städte",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "325",
    "name": "Ludwigshafen Städte",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "327",
    "name": "Mainz Städte",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "326",
    "name": "Mainz-Bingen",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "311",
    "name": "Mayen-Koblenz",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "328",
    "name": "Neustadt Städte",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "312",
    "name": "Neuwied",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "313",
    "name": "Rhein-Hunsrück",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "314",
    "name": "Rhein-Lahn",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "329",
    "name": "Rhein-Pfalz-Kreis",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "330",
    "name": "Speyer Spires Städte",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "331",
    "name": "Südliche Weinstraße",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "332",
    "name": "Südwestpfalz",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "338",
    "name": "Trier Städte",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "337",
    "name": "Trier-Saarburg",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "339",
    "name": "Vulkaneifel",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "315",
    "name": "Westerwaldkreis",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "333",
    "name": "Worms Städte",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "334",
    "name": "Zweibrücken Städte",
    "bundesland": "Rheinland-Pfalz",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "340",
    "name": "Merzig-Wadern",
    "bundesland": "Saarland",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "341",
    "name": "Neunkirchen",
    "bundesland": "Saarland",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "342",
    "name": "Saarbrücken Städte",
    "bundesland": "Saarland",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "343",
    "name": "Saarlouis",
    "bundesland": "Saarland",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "344",
    "name": "Saarpfalz",
    "bundesland": "Saarland",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "345",
    "name": "Sankt Wendel",
    "bundesland": "Saarland",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "370",
    "name": "Annaberg",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "371",
    "name": "Aue-Schwarzenberg",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "382",
    "name": "Bautzen",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "372",
    "name": "Chemnitz Städte",
    "bundesland": "Sachsen",
    "typ": "Kreisfreie Städte",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "373",
    "name": "Chemnitzer Land",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "392",
    "name": "Delitzsch",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "383",
    "name": "Dresden Städte",
    "bundesland": "Sachsen",
    "typ": "Kreisfreie Städte",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "393",
    "name": "Döbeln",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "374",
    "name": "Freiberg",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "384",
    "name": "Görlitz Städte",
    "bundesland": "Sachsen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "385",
    "name": "Kamenz",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "394",
    "name": "Leipzig Städte",
    "bundesland": "Sachsen",
    "typ": "Kreisfreie Städte",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "395",
    "name": "Leipziger Land",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "386",
    "name": "Löbau-Zittau",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "387",
    "name": "Meißen",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "375",
    "name": "Mittlerer Erzgebirgskreis",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "376",
    "name": "Mittweida",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "396",
    "name": "Muldentalkreis",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "388",
    "name": "Niederschlesischer Oberlausitzkreis",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "377",
    "name": "Plauen Städte",
    "bundesland": "Sachsen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "389",
    "name": "Riesa-Großenhain",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "378",
    "name": "Stollberg",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "390",
    "name": "Sächsische Schweiz",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "Region der Lebensretter",
    "farbe": "#8b5cf6"
  },
  {
    "ags": "397",
    "name": "Torgau-Oschatz",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "379",
    "name": "Vogtlandkreis",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "391",
    "name": "Weißeritzkreis",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "380",
    "name": "Zwickau Städte",
    "bundesland": "Sachsen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "381",
    "name": "Zwickauer Land",
    "bundesland": "Sachsen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "360",
    "name": "Altmarkkreis Salzwedel",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "346",
    "name": "Anhalt-Zerbst",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "352",
    "name": "Aschersleben-Staßfurt",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "347",
    "name": "Bernburg",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "348",
    "name": "Bitterfeld",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "353",
    "name": "Burgenlandkreis",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "361",
    "name": "Bördekreis",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "349",
    "name": "Dessau Städte",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "362",
    "name": "Halberstadt",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "354",
    "name": "Halle Städte",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Kreisfreie Städte",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "363",
    "name": "Jerichower Land",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "350",
    "name": "Köthen",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "364",
    "name": "Magdeburg Städte",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "355",
    "name": "Mansfelder Land",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "356",
    "name": "Merseburg-Querfurt",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "365",
    "name": "Ohrekreis",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "366",
    "name": "Quedlinburg",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "357",
    "name": "Saalkreis",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "Katretter",
    "farbe": "#f97316"
  },
  {
    "ags": "358",
    "name": "Sangerhausen",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "367",
    "name": "Schönebeck",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "368",
    "name": "Stendal",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "359",
    "name": "Weißenfels",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "369",
    "name": "Wernigerode",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "351",
    "name": "Wittenberg",
    "bundesland": "Sachsen-Anhalt",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "398",
    "name": "Dithmarschen",
    "bundesland": "Schleswig-Holstein",
    "typ": "Landkreise",
    "anbieter": "ASB SCHOCKT",
    "farbe": "#eab308"
  },
  {
    "ags": "399",
    "name": "Flensburg Städte",
    "bundesland": "Schleswig-Holstein",
    "typ": "Kreisfreie Städte",
    "anbieter": "ASB SCHOCKT",
    "farbe": "#eab308"
  },
  {
    "ags": "400",
    "name": "Kiel Städte",
    "bundesland": "Schleswig-Holstein",
    "typ": "Kreisfreie Städte",
    "anbieter": "ASB SCHOCKT",
    "farbe": "#eab308"
  },
  {
    "ags": "401",
    "name": "Lauenburg",
    "bundesland": "Schleswig-Holstein",
    "typ": "Landkreise",
    "anbieter": "ASB SCHOCKT",
    "farbe": "#eab308"
  },
  {
    "ags": "402",
    "name": "Lübeck Städte",
    "bundesland": "Schleswig-Holstein",
    "typ": "Kreisfreie Städte",
    "anbieter": "ASB SCHOCKT",
    "farbe": "#eab308"
  },
  {
    "ags": "403",
    "name": "Neumünster Städte",
    "bundesland": "Schleswig-Holstein",
    "typ": "Kreisfreie Städte",
    "anbieter": "ASB SCHOCKT",
    "farbe": "#eab308"
  },
  {
    "ags": "404",
    "name": "Nordfriesland",
    "bundesland": "Schleswig-Holstein",
    "typ": "Landkreise",
    "anbieter": "ASB SCHOCKT",
    "farbe": "#eab308"
  },
  {
    "ags": "405",
    "name": "Ostholstein",
    "bundesland": "Schleswig-Holstein",
    "typ": "Landkreise",
    "anbieter": "ASB SCHOCKT",
    "farbe": "#eab308"
  },
  {
    "ags": "406",
    "name": "Pinneberg",
    "bundesland": "Schleswig-Holstein",
    "typ": "Landkreise",
    "anbieter": "ASB SCHOCKT",
    "farbe": "#eab308"
  },
  {
    "ags": "407",
    "name": "Plön",
    "bundesland": "Schleswig-Holstein",
    "typ": "Landkreise",
    "anbieter": "ASB SCHOCKT",
    "farbe": "#eab308"
  },
  {
    "ags": "408",
    "name": "Rendsburg-Eckernförde",
    "bundesland": "Schleswig-Holstein",
    "typ": "Landkreise",
    "anbieter": "ASB SCHOCKT",
    "farbe": "#eab308"
  },
  {
    "ags": "409",
    "name": "Schleswig-Flensburg",
    "bundesland": "Schleswig-Holstein",
    "typ": "Landkreise",
    "anbieter": "ASB SCHOCKT",
    "farbe": "#eab308"
  },
  {
    "ags": "410",
    "name": "Segeberg",
    "bundesland": "Schleswig-Holstein",
    "typ": "Landkreise",
    "anbieter": "ASB SCHOCKT",
    "farbe": "#eab308"
  },
  {
    "ags": "411",
    "name": "Steinburg",
    "bundesland": "Schleswig-Holstein",
    "typ": "Landkreise",
    "anbieter": "ASB SCHOCKT",
    "farbe": "#eab308"
  },
  {
    "ags": "412",
    "name": "Stormarn",
    "bundesland": "Schleswig-Holstein",
    "typ": "Landkreise",
    "anbieter": "ASB SCHOCKT",
    "farbe": "#eab308"
  },
  {
    "ags": "413",
    "name": "Altenburger Land",
    "bundesland": "Thüringen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "414",
    "name": "Eichsfeld",
    "bundesland": "Thüringen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "415",
    "name": "Erfurt Städte",
    "bundesland": "Thüringen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "416",
    "name": "Gera Städte",
    "bundesland": "Thüringen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "417",
    "name": "Gotha",
    "bundesland": "Thüringen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "418",
    "name": "Greiz",
    "bundesland": "Thüringen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "419",
    "name": "Hildburghausen",
    "bundesland": "Thüringen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "420",
    "name": "Ilm-Kreis",
    "bundesland": "Thüringen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "421",
    "name": "Jena Städte",
    "bundesland": "Thüringen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "422",
    "name": "Kyffhäuserkreis",
    "bundesland": "Thüringen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "423",
    "name": "Nordhausen",
    "bundesland": "Thüringen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "424",
    "name": "Saale-Holzland",
    "bundesland": "Thüringen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "425",
    "name": "Saale-Orla",
    "bundesland": "Thüringen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "426",
    "name": "Saalfeld-Rudolstadt",
    "bundesland": "Thüringen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "427",
    "name": "Schmalkalden-Meiningen",
    "bundesland": "Thüringen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "429",
    "name": "Sonneberg",
    "bundesland": "Thüringen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "430",
    "name": "Suhl Städte",
    "bundesland": "Thüringen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "428",
    "name": "Sömmerda",
    "bundesland": "Thüringen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "431",
    "name": "Unstrut-Hainich",
    "bundesland": "Thüringen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "432",
    "name": "Wartburgkreis",
    "bundesland": "Thüringen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "433",
    "name": "Weimar Städte",
    "bundesland": "Thüringen",
    "typ": "Kreisfreie Städte",
    "anbieter": "",
    "farbe": ""
  },
  {
    "ags": "434",
    "name": "Weimarer Land",
    "bundesland": "Thüringen",
    "typ": "Landkreise",
    "anbieter": "",
    "farbe": ""
  }
];
