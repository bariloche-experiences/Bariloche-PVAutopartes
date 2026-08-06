/**
 * Base de datos de vehículos para el selector en cascada.
 * Estructura: Marca -> Modelo -> { minYear, maxYear, versions[] }
 * "versions" combina Versión / Motor / Caja en un solo dato,
 * tal como se muestra en el 4to selector del formulario.
 *
 * app.js agrega automáticamente la opción "Otra versión / No estoy
 * seguro" al final de cada modelo, así que no hace falta repetirla acá.
 *
 * Para agregar o corregir un vehículo alcanza con tocar este archivo:
 * no requiere cambios en app.js ni en el HTML. Si un vehículo no está
 * listado, el formulario tiene un link "¿No encontrás tu vehículo?"
 * que permite cargarlo a mano.
 */
const VEHICLE_DATA = {
  "Volkswagen": {
    "Gol": {
      minYear: 1996, maxYear: 2023,
      versions: [
        "1.4 8V Nafta - Manual 5 vel.",
        "1.6 8V Nafta - Manual 5 vel.",
        "1.6 Power - Manual 5 vel.",
        "1.6 Power - Automática"
      ]
    },
    "Voyage": {
      minYear: 2008, maxYear: 2021,
      versions: ["1.6 8V Nafta - Manual 5 vel.", "1.6 MSI - Manual 5 vel.", "1.6 MSI - Automática"]
    },
    "Suran": {
      minYear: 2006, maxYear: 2018,
      versions: ["1.6 8V Nafta - Manual 5 vel.", "1.9 SDI Diesel - Manual 5 vel."]
    },
    "Fox": {
      minYear: 2004, maxYear: 2018,
      versions: ["1.6 8V Nafta - Manual 5 vel."]
    },
    "Polo": {
      minYear: 1996, maxYear: 2023,
      versions: ["1.6 8V Nafta - Manual 5 vel.", "1.6 MSI - Manual 5 vel.", "1.6 MSI - Automática", "1.0 TSI Nafta - Automática"]
    },
    "Virtus": {
      minYear: 2018, maxYear: 2023,
      versions: ["1.6 MSI - Manual 5 vel.", "1.6 MSI - Automática", "1.0 TSI Nafta - Automática"]
    },
    "Vento": {
      minYear: 2007, maxYear: 2015,
      versions: ["2.0 TSI Nafta - Manual 6 vel.", "2.0 TSI Nafta - DSG", "2.5 Nafta - Automática"]
    },
    "Bora": {
      minYear: 2000, maxYear: 2010,
      versions: ["2.0 8V Nafta - Manual 5 vel.", "1.8T Nafta - Manual 5 vel.", "2.0 8V Nafta - Automática"]
    },
    "Golf": {
      minYear: 1995, maxYear: 2023,
      versions: ["1.6 8V Nafta - Manual 5 vel.", "1.8T Nafta - Manual/Automática", "1.4 TSI Nafta - Automática"]
    },
    "Passat": {
      minYear: 1996, maxYear: 2023,
      versions: [
        "1.8T Nafta - Manual 5 vel.",
        "2.0 Nafta - Manual/Automática",
        "1.8T Nafta - Tiptronic",
        "3.6 V6 FSI - Automática (4Motion)",
        "2.0 TDI Diesel - Manual/DSG"
      ]
    },
    "Passat Variant": {
      minYear: 1998, maxYear: 2015,
      versions: ["1.8T Nafta - Manual/Tiptronic", "2.0 TDI Diesel - Manual/DSG"]
    },
    "Amarok": {
      minYear: 2010, maxYear: 2023,
      versions: ["2.0 TDI Diesel - Manual 6 vel.", "2.0 TDI Diesel - Automática 8 vel.", "3.0 V6 TDI Diesel - Automática 8 vel."]
    },
    "Saveiro": {
      minYear: 2000, maxYear: 2023,
      versions: ["1.6 8V Nafta - Manual 5 vel.", "1.9 Diesel - Manual 5 vel."]
    },
    "Crossfox": {
      minYear: 2006, maxYear: 2015,
      versions: ["1.6 8V Nafta - Manual 5 vel."]
    },
    "Parati": {
      minYear: 1996, maxYear: 2007,
      versions: ["1.6 8V Nafta - Manual 5 vel.", "1.8 8V Nafta - Manual 5 vel."]
    },
    "Santana": {
      minYear: 1985, maxYear: 1996,
      versions: ["1.8 Nafta - Manual 5 vel.", "2.0 Nafta - Manual 5 vel."]
    },
    "T-Cross": {
      minYear: 2019, maxYear: 2023,
      versions: ["1.6 MSI - Automática", "1.4 TSI Nafta - Automática"]
    },
    "Nivus": {
      minYear: 2020, maxYear: 2023,
      versions: ["1.0 TSI Nafta - Automática", "1.4 TSI Nafta - Automática"]
    },
    "Taos": {
      minYear: 2022, maxYear: 2023,
      versions: ["1.4 TSI Nafta - Automática (4Motion)"]
    },
    "Tiguan": {
      minYear: 2009, maxYear: 2023,
      versions: ["2.0 TSI Nafta - Automática (4Motion)"]
    },
    "New Beetle": {
      minYear: 1998, maxYear: 2010,
      versions: ["2.0 8V Nafta - Manual/Automática"]
    }
  },

  "Ford": {
    "Fiesta": {
      minYear: 1996, maxYear: 2017,
      versions: ["1.6 8V Nafta - Manual 5 vel.", "1.6 Kinetic - Manual 5 vel.", "1.6 Kinetic - Automática"]
    },
    "Focus": {
      minYear: 1999, maxYear: 2018,
      versions: ["1.6 Nafta - Manual 5 vel.", "2.0 Nafta - Manual 5 vel.", "2.0 Nafta - Automática", "1.8 TDCi Diesel - Manual 5 vel."]
    },
    "Ka": {
      minYear: 1997, maxYear: 2020,
      versions: ["1.0 Nafta - Manual 5 vel.", "1.5 Nafta - Manual 5 vel.", "1.5 Nafta - Automática"]
    },
    "EcoSport": {
      minYear: 2003, maxYear: 2022,
      versions: ["1.6 Nafta - Manual 5 vel.", "2.0 Nafta - Manual 5 vel.", "2.0 Nafta - Automática", "1.5 Diesel - Manual 5 vel."]
    },
    "Ranger": {
      minYear: 1998, maxYear: 2023,
      versions: ["2.2 TDCi Diesel - Manual 6 vel.", "2.2 TDCi Diesel - Automática", "3.2 TDCi Diesel - Automática"]
    },
    "Falcon": {
      minYear: 1962, maxYear: 1991,
      versions: ["3.0 Nafta - Manual", "3.6 Nafta - Manual"]
    },
    "Mondeo": {
      minYear: 1996, maxYear: 2014,
      versions: ["2.0 Nafta - Manual/Automática", "2.5 V6 Nafta - Automática"]
    },
    "Escort": {
      minYear: 1990, maxYear: 2003,
      versions: ["1.6 8V Nafta - Manual 5 vel.", "1.8 Diesel - Manual 5 vel."]
    },
    "Orion": {
      minYear: 1991, maxYear: 1996,
      versions: ["1.6 8V Nafta - Manual 5 vel."]
    },
    "Transit": {
      minYear: 1996, maxYear: 2023,
      versions: ["2.2 TDCi Diesel - Manual 6 vel."]
    },
    "F-100": {
      minYear: 1961, maxYear: 1996,
      versions: ["Diesel - Manual", "Nafta - Manual"]
    },
    "Territory": {
      minYear: 2021, maxYear: 2023,
      versions: ["1.5 Turbo Nafta - Automática"]
    },
    "Maverick": {
      minYear: 1973, maxYear: 1988,
      versions: ["2.3 Nafta - Manual", "2.8 Nafta - Manual"]
    }
  },

  "Chevrolet": {
    "Corsa": {
      minYear: 1996, maxYear: 2012,
      versions: ["1.6 8V Nafta - Manual 5 vel.", "1.8 8V Nafta - Manual 5 vel."]
    },
    "Classic": {
      minYear: 2004, maxYear: 2016,
      versions: ["1.4 8V Nafta - Manual 5 vel."]
    },
    "Celta": {
      minYear: 2000, maxYear: 2015,
      versions: ["1.0 8V Nafta - Manual 5 vel.", "1.4 8V Nafta - Manual 5 vel."]
    },
    "Agile": {
      minYear: 2009, maxYear: 2015,
      versions: ["1.4 8V Nafta - Manual 5 vel."]
    },
    "Onix": {
      minYear: 2012, maxYear: 2023,
      versions: ["1.4 Nafta - Manual 5 vel.", "1.4 Nafta - Automática", "1.0 Turbo Nafta - Manual", "1.0 Turbo Nafta - Automática"]
    },
    "Prisma": {
      minYear: 2013, maxYear: 2022,
      versions: ["1.4 Nafta - Manual 5 vel.", "1.4 Nafta - Automática"]
    },
    "Cruze": {
      minYear: 2010, maxYear: 2023,
      versions: ["1.8 Nafta - Manual 6 vel.", "1.8 Nafta - Automática", "1.4 Turbo Nafta - Automática"]
    },
    "S10": {
      minYear: 1996, maxYear: 2023,
      versions: ["2.8 Turbo Diesel - Manual 6 vel.", "2.8 Turbo Diesel - Automática", "2.5 Nafta - Manual 5 vel."]
    },
    "Vectra": {
      minYear: 1997, maxYear: 2011,
      versions: ["2.0 8V Nafta - Manual/Automática", "2.4 Nafta - Automática"]
    },
    "Astra": {
      minYear: 2000, maxYear: 2011,
      versions: ["1.8 8V Nafta - Manual 5 vel.", "2.0 8V Nafta - Manual/Automática"]
    },
    "Meriva": {
      minYear: 2003, maxYear: 2012,
      versions: ["1.8 8V Nafta - Manual/Automática"]
    },
    "Zafira": {
      minYear: 2001, maxYear: 2012,
      versions: ["2.0 8V Nafta - Manual 5 vel.", "2.0 8V Nafta - Automática"]
    },
    "Captiva": {
      minYear: 2007, maxYear: 2018,
      versions: ["2.4 Nafta - Automática", "2.2 Diesel - Automática (4x4)"]
    },
    "Spin": {
      minYear: 2013, maxYear: 2023,
      versions: ["1.8 Nafta - Manual 5 vel.", "1.8 Nafta - Automática"]
    },
    "Tracker": {
      minYear: 2013, maxYear: 2023,
      versions: ["1.8 Nafta - Manual/Automática", "1.2 Turbo Nafta - Automática"]
    },
    "Trailblazer": {
      minYear: 2012, maxYear: 2023,
      versions: ["2.8 Turbo Diesel - Automática (4x4)"]
    },
    "D20": {
      minYear: 1988, maxYear: 1997,
      versions: ["Diesel - Manual", "4.1 Nafta - Manual"]
    }
  },

  "Fiat": {
    "Uno": {
      minYear: 1984, maxYear: 2021,
      versions: ["1.3 8V Nafta - Manual 5 vel.", "1.4 8V Nafta - Manual 5 vel."]
    },
    "147": {
      minYear: 1976, maxYear: 1985,
      versions: ["1.3 8V Nafta - Manual 4 vel."]
    },
    "Palio": {
      minYear: 1996, maxYear: 2017,
      versions: ["1.4 8V Nafta - Manual 5 vel.", "1.6 16V Nafta - Manual 5 vel."]
    },
    "Siena": {
      minYear: 1997, maxYear: 2016,
      versions: ["1.4 8V Nafta - Manual 5 vel."]
    },
    "Regata": {
      minYear: 1984, maxYear: 1994,
      versions: ["1.6 Nafta - Manual 5 vel.", "1.7 Diesel - Manual 5 vel."]
    },
    "Duna": {
      minYear: 1987, maxYear: 1996,
      versions: ["1.3 Nafta - Manual 5 vel.", "1.6 Nafta - Manual 5 vel."]
    },
    "Tempra": {
      minYear: 1990, maxYear: 1999,
      versions: ["2.0 8V Nafta - Manual/Automática"]
    },
    "Marea": {
      minYear: 1997, maxYear: 2007,
      versions: ["2.0 20V Nafta - Manual 5 vel.", "1.9 JTD Diesel - Manual 5 vel."]
    },
    "Punto": {
      minYear: 2007, maxYear: 2018,
      versions: ["1.4 8V Nafta - Manual 5 vel.", "1.4 Turbo T-Jet Nafta - Manual/Automática", "1.3 Multijet Diesel - Manual 5 vel."]
    },
    "Idea": {
      minYear: 2006, maxYear: 2016,
      versions: ["1.4 8V Nafta - Manual 5 vel.", "1.8 8V Nafta - Manual 5 vel."]
    },
    "Doblo": {
      minYear: 2001, maxYear: 2023,
      versions: ["1.4 8V Nafta - Manual 5 vel.", "1.3 Multijet Diesel - Manual 5 vel.", "1.6 16V Nafta - Manual 5 vel."]
    },
    "Fiorino": {
      minYear: 1990, maxYear: 2023,
      versions: ["1.4 8V Nafta - Manual 5 vel.", "1.3 Multijet Diesel - Manual 5 vel."]
    },
    "Ducato": {
      minYear: 1997, maxYear: 2023,
      versions: ["2.3 Multijet Diesel - Manual 6 vel."]
    },
    "Cronos": {
      minYear: 2018, maxYear: 2023,
      versions: ["1.3 Firefly Nafta - Manual/Automática", "1.8 Nafta - Automática"]
    },
    "Mobi": {
      minYear: 2016, maxYear: 2023,
      versions: ["1.0 Firefly Nafta - Manual 5 vel."]
    },
    "Toro": {
      minYear: 2016, maxYear: 2023,
      versions: ["1.8 Nafta - Manual 6 vel.", "1.8 Nafta - Automática", "2.0 Diesel - Manual/Automática"]
    },
    "Pulse": {
      minYear: 2022, maxYear: 2023,
      versions: ["1.3 Firefly Turbo Nafta - Manual/Automática"]
    },
    "Fastback": {
      minYear: 2023, maxYear: 2023,
      versions: ["1.3 Firefly Turbo Nafta - Automática", "2.0 Turbo Diesel - Automática (4x4)"]
    },
    "Strada": {
      minYear: 1998, maxYear: 2023,
      versions: ["1.4 8V Nafta - Manual 5 vel.", "1.3 Multijet Diesel - Manual 5 vel."]
    }
  },

  "Renault": {
    "Clio": {
      minYear: 1996, maxYear: 2016,
      versions: ["1.2 8V Nafta - Manual 5 vel.", "1.6 16V Nafta - Manual 5 vel."]
    },
    "Twingo": {
      minYear: 1993, maxYear: 2012,
      versions: ["1.2 8V Nafta - Manual 5 vel."]
    },
    "Symbol": {
      minYear: 2001, maxYear: 2015,
      versions: ["1.6 8V Nafta - Manual 5 vel."]
    },
    "Sandero": {
      minYear: 2007, maxYear: 2023,
      versions: ["1.6 8V Nafta - Manual 5 vel.", "1.6 16V Nafta - Manual 5 vel.", "1.6 16V Nafta - Automática"]
    },
    "Logan": {
      minYear: 2007, maxYear: 2023,
      versions: ["1.6 8V Nafta - Manual 5 vel."]
    },
    "Duster": {
      minYear: 2011, maxYear: 2023,
      versions: ["1.6 Nafta - Manual 5 vel.", "2.0 Nafta - Manual/Automática", "1.5 dCi Diesel - Manual 6 vel."]
    },
    "Oroch": {
      minYear: 2015, maxYear: 2023,
      versions: ["1.6 Nafta - Manual 5 vel.", "2.0 Nafta - Manual/Automática"]
    },
    "Captur": {
      minYear: 2017, maxYear: 2023,
      versions: ["1.6 Nafta - Manual/Automática", "2.0 Nafta - Automática"]
    },
    "Koleos": {
      minYear: 2008, maxYear: 2023,
      versions: ["2.5 Nafta - Automática (4x4)"]
    },
    "Kangoo": {
      minYear: 1998, maxYear: 2023,
      versions: ["1.6 8V Nafta - Manual 5 vel.", "1.5 dCi Diesel - Manual 5 vel."]
    },
    "Trafic": {
      minYear: 2002, maxYear: 2023,
      versions: ["2.0 dCi Diesel - Manual 6 vel."]
    },
    "Master": {
      minYear: 1998, maxYear: 2023,
      versions: ["2.3 dCi Diesel - Manual 6 vel."]
    },
    "Megane": {
      minYear: 1999, maxYear: 2016,
      versions: ["1.6 16V Nafta - Manual/Automática", "2.0 16V Nafta - Automática"]
    },
    "Fluence": {
      minYear: 2010, maxYear: 2018,
      versions: ["1.6 Nafta - Manual 5 vel.", "2.0 Nafta - Automática"]
    },
    "19": {
      minYear: 1990, maxYear: 1997,
      versions: ["1.6 Nafta - Manual 5 vel.", "1.9 Diesel - Manual 5 vel."]
    },
    "21": {
      minYear: 1990, maxYear: 1996,
      versions: ["2.0 Nafta - Manual 5 vel.", "2.2 Nafta - Manual 5 vel."]
    },
    "Express": {
      minYear: 1993, maxYear: 2015,
      versions: ["1.6 8V Nafta - Manual 5 vel.", "1.9 Diesel - Manual 5 vel."]
    }
  },

  "Peugeot": {
    "205": {
      minYear: 1987, maxYear: 1999,
      versions: ["1.6 Nafta - Manual 5 vel.", "1.9 Diesel - Manual 5 vel."]
    },
    "206": {
      minYear: 1999, maxYear: 2011,
      versions: ["1.4 8V Nafta - Manual 5 vel.", "1.6 16V Nafta - Manual 5 vel."]
    },
    "207": {
      minYear: 2007, maxYear: 2015,
      versions: ["1.4 8V Nafta - Manual 5 vel.", "1.6 16V Nafta - Manual/Automática"]
    },
    "208": {
      minYear: 2013, maxYear: 2023,
      versions: ["1.6 Nafta - Manual 5 vel.", "1.6 Nafta - Automática"]
    },
    "306": {
      minYear: 1994, maxYear: 2001,
      versions: ["1.8 Nafta - Manual 5 vel.", "1.9 Diesel - Manual 5 vel."]
    },
    "307": {
      minYear: 2002, maxYear: 2012,
      versions: ["1.6 16V Nafta - Manual 5 vel.", "2.0 16V Nafta - Manual/Automática", "2.0 HDi Diesel - Manual 5 vel."]
    },
    "308": {
      minYear: 2010, maxYear: 2018,
      versions: ["1.6 Nafta - Manual/Automática", "1.6 HDi Diesel - Manual 5 vel."]
    },
    "405": {
      minYear: 1988, maxYear: 1997,
      versions: ["1.9 Nafta - Manual 5 vel.", "1.9 Diesel - Manual 5 vel."]
    },
    "504": {
      minYear: 1969, maxYear: 1999,
      versions: ["2.0 Nafta - Manual 4 vel.", "2.3 Diesel - Manual 4 vel."]
    },
    "505": {
      minYear: 1980, maxYear: 1995,
      versions: ["2.0 Nafta - Manual 5 vel.", "2.3 Diesel - Manual 5 vel."]
    },
    "2008": {
      minYear: 2015, maxYear: 2023,
      versions: ["1.6 Nafta - Automática"]
    },
    "3008": {
      minYear: 2018, maxYear: 2023,
      versions: ["1.6 Turbo Nafta - Automática"]
    },
    "Partner": {
      minYear: 1998, maxYear: 2023,
      versions: ["1.6 Nafta - Manual 5 vel.", "1.6 HDi Diesel - Manual 5 vel."]
    },
    "Boxer": {
      minYear: 1996, maxYear: 2023,
      versions: ["2.3 HDi Diesel - Manual 6 vel."]
    },
    "Expert": {
      minYear: 1997, maxYear: 2023,
      versions: ["2.0 HDi Diesel - Manual 6 vel."]
    }
  },

  "Citroën": {
    "AX": {
      minYear: 1987, maxYear: 1997,
      versions: ["1.1 Nafta - Manual 5 vel.", "1.4 Nafta - Manual 5 vel."]
    },
    "ZX": {
      minYear: 1991, maxYear: 1998,
      versions: ["1.6 Nafta - Manual 5 vel.", "1.9 Diesel - Manual 5 vel."]
    },
    "Xsara": {
      minYear: 1998, maxYear: 2005,
      versions: ["1.6 Nafta - Manual 5 vel.", "1.8 16V Nafta - Manual 5 vel."]
    },
    "C3": {
      minYear: 2002, maxYear: 2023,
      versions: ["1.4 Nafta - Manual 5 vel.", "1.6 Nafta - Manual/Automática"]
    },
    "C4": {
      minYear: 2005, maxYear: 2015,
      versions: ["1.6 Nafta - Manual/Automática", "2.0 Nafta - Automática"]
    },
    "C4 Lounge": {
      minYear: 2013, maxYear: 2020,
      versions: ["1.6 THP Turbo Nafta - Automática", "2.0 Nafta - Automática"]
    },
    "C4 Cactus": {
      minYear: 2019, maxYear: 2023,
      versions: ["1.6 Nafta - Automática"]
    },
    "Berlingo": {
      minYear: 1998, maxYear: 2023,
      versions: ["1.6 Nafta - Manual 5 vel.", "1.6 HDi Diesel - Manual 5 vel."]
    },
    "Jumpy": {
      minYear: 1996, maxYear: 2023,
      versions: ["2.0 HDi Diesel - Manual 6 vel."]
    },
    "Jumper": {
      minYear: 1996, maxYear: 2023,
      versions: ["2.3 HDi Diesel - Manual 6 vel."]
    }
  },

  "Toyota": {
    "Corolla": {
      minYear: 1998, maxYear: 2023,
      versions: ["1.6 Nafta - Manual 5 vel.", "1.8 Nafta - Manual 6 vel.", "1.8 Nafta - Automática"]
    },
    "Corolla Cross": {
      minYear: 2021, maxYear: 2023,
      versions: ["2.0 Nafta - Automática", "1.8 Híbrido - Automática"]
    },
    "Hilux": {
      minYear: 1998, maxYear: 2023,
      versions: ["2.4 Diesel - Manual/Automática", "2.8 Diesel - Manual/Automática", "3.0 Diesel - Manual/Automática"]
    },
    "SW4": {
      minYear: 1998, maxYear: 2023,
      versions: ["2.8 Diesel - Manual/Automática (4x4)", "3.0 Diesel - Automática (4x4)"]
    },
    "Etios": {
      minYear: 2013, maxYear: 2021,
      versions: ["1.5 Nafta - Manual 5 vel.", "1.5 Nafta - Automática"]
    },
    "Yaris": {
      minYear: 2018, maxYear: 2023,
      versions: ["1.5 Nafta - Manual/Automática"]
    },
    "RAV4": {
      minYear: 1996, maxYear: 2023,
      versions: ["2.0 Nafta - Automática", "2.5 Híbrido - Automática"]
    },
    "Camry": {
      minYear: 1997, maxYear: 2023,
      versions: ["2.5 Nafta - Automática", "2.5 Híbrido - Automática"]
    },
    "Land Cruiser": {
      minYear: 1990, maxYear: 2023,
      versions: ["4.5 Diesel - Manual/Automática (4x4)"]
    }
  },

  "Honda": {
    "Civic": {
      minYear: 1996, maxYear: 2020,
      versions: ["1.7 Nafta - Manual/Automática", "1.8 Nafta - Manual/Automática", "2.0 Nafta - Automática"]
    },
    "Fit": {
      minYear: 2003, maxYear: 2020,
      versions: ["1.4 Nafta - Manual 5 vel.", "1.5 Nafta - Manual/Automática"]
    },
    "City": {
      minYear: 2003, maxYear: 2023,
      versions: ["1.5 Nafta - Manual/Automática"]
    },
    "HR-V": {
      minYear: 2015, maxYear: 2023,
      versions: ["1.8 Nafta - Manual 6 vel.", "1.8 Nafta - Automática"]
    },
    "CR-V": {
      minYear: 1999, maxYear: 2023,
      versions: ["2.0 Nafta - Automática", "2.4 Nafta - Automática"]
    },
    "Accord": {
      minYear: 1998, maxYear: 2015,
      versions: ["2.0 Nafta - Manual/Automática", "3.0 V6 Nafta - Automática"]
    }
  },

  "Nissan": {
    "Sentra": {
      minYear: 1998, maxYear: 2023,
      versions: ["1.8 Nafta - Manual/Automática", "2.0 Nafta - Automática"]
    },
    "Tiida": {
      minYear: 2007, maxYear: 2014,
      versions: ["1.8 Nafta - Manual/Automática"]
    },
    "March": {
      minYear: 2011, maxYear: 2023,
      versions: ["1.6 Nafta - Manual/Automática"]
    },
    "Versa": {
      minYear: 2011, maxYear: 2023,
      versions: ["1.6 Nafta - Manual/Automática"]
    },
    "Note": {
      minYear: 2015, maxYear: 2023,
      versions: ["1.6 Nafta - Manual/Automática"]
    },
    "Kicks": {
      minYear: 2017, maxYear: 2023,
      versions: ["1.6 Nafta - Automática"]
    },
    "X-Trail": {
      minYear: 2001, maxYear: 2023,
      versions: ["2.5 Nafta - Automática (4x4)"]
    },
    "Frontier": {
      minYear: 1998, maxYear: 2023,
      versions: ["2.5 Diesel - Manual/Automática", "2.3 Diesel Bi-Turbo - Automática"]
    },
    "Terrano": {
      minYear: 1990, maxYear: 2005,
      versions: ["2.4 Nafta - Manual", "2.7 Diesel - Manual"]
    }
  },

  "Suzuki": {
    "Fun": {
      minYear: 2002, maxYear: 2015,
      versions: ["1.0 Nafta - Manual 5 vel."]
    },
    "Swift": {
      minYear: 2005, maxYear: 2023,
      versions: ["1.4 Nafta - Manual/Automática", "1.2 Nafta - Manual/Automática"]
    },
    "Vitara": {
      minYear: 1990, maxYear: 2023,
      versions: ["1.6 Nafta - Manual/Automática (4x4)"]
    },
    "Jimny": {
      minYear: 1998, maxYear: 2023,
      versions: ["1.3 Nafta - Manual/Automática (4x4)", "1.5 Nafta - Manual/Automática (4x4)"]
    }
  },

  "Jeep": {
    "Renegade": {
      minYear: 2015, maxYear: 2023,
      versions: ["1.8 Nafta - Manual/Automática", "2.0 Turbo Diesel - Automática (4x4)"]
    },
    "Compass": {
      minYear: 2017, maxYear: 2023,
      versions: ["2.0 Nafta - Automática", "2.0 Turbo Diesel - Automática (4x4)"]
    },
    "Cherokee": {
      minYear: 1994, maxYear: 2014,
      versions: ["2.5 Diesel - Manual", "4.0 Nafta - Automática"]
    },
    "Grand Cherokee": {
      minYear: 1996, maxYear: 2023,
      versions: ["3.6 V6 Nafta - Automática (4x4)", "3.0 V6 Diesel - Automática (4x4)"]
    }
  },

  "Mitsubishi": {
    "Lancer": {
      minYear: 1996, maxYear: 2018,
      versions: ["1.6 Nafta - Manual 5 vel.", "2.0 Nafta - Manual/Automática"]
    },
    "L200": {
      minYear: 1996, maxYear: 2023,
      versions: ["2.5 Diesel - Manual/Automática", "2.4 Diesel - Manual/Automática"]
    },
    "Montero": {
      minYear: 1991, maxYear: 2006,
      versions: ["3.0 V6 Nafta - Automática (4x4)", "2.8 Diesel - Manual (4x4)"]
    },
    "ASX": {
      minYear: 2011, maxYear: 2023,
      versions: ["2.0 Nafta - Manual/Automática"]
    },
    "Outlander": {
      minYear: 2006, maxYear: 2023,
      versions: ["2.0 Nafta - Automática (4x4)", "2.4 Nafta - Automática (4x4)"]
    }
  },

  "Kia": {
    "Rio": {
      minYear: 2000, maxYear: 2023,
      versions: ["1.4 Nafta - Manual/Automática", "1.6 Nafta - Manual/Automática"]
    },
    "Cerato": {
      minYear: 2004, maxYear: 2023,
      versions: ["1.6 Nafta - Manual/Automática", "2.0 Nafta - Automática"]
    },
    "Sportage": {
      minYear: 1995, maxYear: 2023,
      versions: ["2.0 Nafta - Manual/Automática", "2.0 Diesel - Automática (4x4)"]
    },
    "Sorento": {
      minYear: 2003, maxYear: 2023,
      versions: ["2.4 Nafta - Automática (4x4)", "2.2 Diesel - Automática (4x4)"]
    }
  },

  "Hyundai": {
    "HB20": {
      minYear: 2013, maxYear: 2023,
      versions: ["1.0 Nafta - Manual/Automática", "1.6 Nafta - Manual/Automática"]
    },
    "Accent": {
      minYear: 1995, maxYear: 2018,
      versions: ["1.4 Nafta - Manual/Automática", "1.6 Nafta - Manual/Automática"]
    },
    "Elantra": {
      minYear: 1996, maxYear: 2020,
      versions: ["1.6 Nafta - Manual/Automática", "2.0 Nafta - Automática"]
    },
    "Tucson": {
      minYear: 2004, maxYear: 2023,
      versions: ["2.0 Nafta - Automática", "2.0 Diesel - Automática (4x4)"]
    },
    "Santa Fe": {
      minYear: 2001, maxYear: 2023,
      versions: ["2.4 Nafta - Automática", "2.2 Diesel - Automática (4x4)"]
    },
    "Creta": {
      minYear: 2017, maxYear: 2023,
      versions: ["1.6 Nafta - Manual/Automática", "2.0 Nafta - Automática"]
    }
  },

  "Audi": {
    "A3": {
      minYear: 1997, maxYear: 2023,
      versions: ["1.8T Nafta - Manual/Automática", "1.4 TFSI Nafta - Automática"]
    },
    "A4": {
      minYear: 1995, maxYear: 2023,
      versions: ["1.8T Nafta - Manual/Tiptronic", "2.0 TFSI Nafta - Automática"]
    },
    "Q3": {
      minYear: 2012, maxYear: 2023,
      versions: ["1.4 TFSI Nafta - Automática", "2.0 TFSI Nafta - Automática (Quattro)"]
    },
    "Q5": {
      minYear: 2009, maxYear: 2023,
      versions: ["2.0 TFSI Nafta - Automática (Quattro)"]
    }
  },

  "BMW": {
    "Serie 1": {
      minYear: 2005, maxYear: 2023,
      versions: ["1.6 Nafta - Automática", "2.0 Nafta - Automática"]
    },
    "Serie 3": {
      minYear: 1992, maxYear: 2023,
      versions: ["2.0 Nafta - Manual/Automática", "3.0 Diesel - Automática"]
    },
    "X1": {
      minYear: 2010, maxYear: 2023,
      versions: ["2.0 Nafta - Automática (xDrive)"]
    },
    "X3": {
      minYear: 2004, maxYear: 2023,
      versions: ["2.0 Nafta - Automática (xDrive)", "3.0 Diesel - Automática (xDrive)"]
    }
  },

  "Mercedes-Benz": {
    "Clase A": {
      minYear: 1998, maxYear: 2023,
      versions: ["1.6 Nafta - Automática", "2.0 Nafta - Automática"]
    },
    "Clase C": {
      minYear: 1994, maxYear: 2023,
      versions: ["1.8 Nafta - Automática", "2.0 Diesel - Automática"]
    },
    "Sprinter": {
      minYear: 1997, maxYear: 2023,
      versions: ["2.2 Diesel - Manual 6 vel."]
    },
    "Vito": {
      minYear: 1996, maxYear: 2023,
      versions: ["2.2 Diesel - Manual/Automática"]
    }
  },

  "Volvo": {
    "S60": {
      minYear: 2000, maxYear: 2023,
      versions: ["2.0 Turbo Nafta - Automática"]
    },
    "XC60": {
      minYear: 2008, maxYear: 2023,
      versions: ["2.0 Turbo Nafta - Automática (AWD)", "2.0 Diesel - Automática (AWD)"]
    }
  },

  "Alfa Romeo": {
    "147": {
      minYear: 2000, maxYear: 2010,
      versions: ["1.6 16V Nafta - Manual 5 vel.", "1.9 JTD Diesel - Manual 5 vel."]
    },
    "156": {
      minYear: 1997, maxYear: 2007,
      versions: ["1.8 16V Nafta - Manual 5 vel.", "2.4 JTD Diesel - Manual 5 vel."]
    }
  },

  "Land Rover": {
    "Discovery": {
      minYear: 1990, maxYear: 2023,
      versions: ["3.0 Diesel - Automática (4x4)"]
    },
    "Freelander": {
      minYear: 1998, maxYear: 2014,
      versions: ["2.0 Diesel - Manual/Automática (4x4)"]
    },
    "Range Rover Evoque": {
      minYear: 2011, maxYear: 2023,
      versions: ["2.0 Nafta - Automática (4x4)"]
    }
  },

  "Dodge": {
    "Journey": {
      minYear: 2008, maxYear: 2020,
      versions: ["2.4 Nafta - Automática"]
    },
    "Nitro": {
      minYear: 2007, maxYear: 2012,
      versions: ["2.8 Diesel - Automática (4x4)"]
    }
  },

  "RAM": {
    "1500": {
      minYear: 2016, maxYear: 2023,
      versions: ["5.7 V8 Nafta - Automática (4x4)"]
    },
    "700": {
      minYear: 2021, maxYear: 2023,
      versions: ["2.4 Nafta - Manual/Automática"]
    }
  },

  "Subaru": {
    "Impreza": {
      minYear: 1995, maxYear: 2023,
      versions: ["1.6 Nafta - Manual/Automática (4x4)", "2.0 Nafta - Automática (4x4)"]
    },
    "Forester": {
      minYear: 1997, maxYear: 2023,
      versions: ["2.0 Nafta - Automática (4x4)", "2.5 Nafta - Automática (4x4)"]
    },
    "XV": {
      minYear: 2012, maxYear: 2023,
      versions: ["2.0 Nafta - Automática (4x4)"]
    }
  },

  "Chery": {
    "Tiggo": {
      minYear: 2010, maxYear: 2023,
      versions: ["2.0 Nafta - Manual/Automática"]
    },
    "QQ": {
      minYear: 2007, maxYear: 2015,
      versions: ["1.0 Nafta - Manual 5 vel."]
    }
  }
};
