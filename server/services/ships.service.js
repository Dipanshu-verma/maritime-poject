 
exports.getShipByName = async (shipName) => {
 
  const mockShipData = {
    ships: [
      {
        id: 1,
        name: 'MAERSK SELETAR',
        imo: '9784271',
        flag: 'Singapore',
        shipType: 'Container Ship',
        grossTonnage: 158000,
        yearBuilt: 2017,
        status: 'Active',
      },
      {
        id: 2,
        name: 'MSC ANNA',
        imo: '9839818',
        flag: 'Liberia',
        shipType: 'Container Ship',
        grossTonnage: 232000,
        yearBuilt: 2020,
        status: 'Active',
      },
      {
        id: 3,
        name: 'EVER GIVEN',
        imo: '9811000',
        flag: 'Panama',
        shipType: 'Container Ship',
        grossTonnage: 220940,
        yearBuilt: 2018,
        status: 'Active',
      },
      {
        id: 4,
        name: 'QUEEN MARY 2',
        imo: '9241061',
        flag: 'United Kingdom',
        shipType: 'Passenger Ship',
        grossTonnage: 149215,
        yearBuilt: 2003,
        status: 'Active',
      },
      {
        id: 5,
        name: 'COSCO SHIPPING UNIVERSE',
        imo: '9795986',
        flag: 'Hong Kong',
        shipType: 'Container Ship',
        grossTonnage: 212000,
        yearBuilt: 2018,
        status: 'Active',
      },
      {
        id: 6,
        name: 'EXXON VALDEZ',
        imo: '8414520',
        flag: 'United States',
        shipType: 'Oil Tanker',
        grossTonnage: 94999,
        yearBuilt: 1986,
        status: 'Inactive',
      },
      {
        id: 7,
        name: 'HARMONY OF THE SEAS',
        imo: '9682875',
        flag: 'Bahamas',
        shipType: 'Passenger Ship',
        grossTonnage: 226963,
        yearBuilt: 2016,
        status: 'Active',
      },
      {
        id: 8,
        name: 'MARAN CANOPUS',
        imo: '9702508',
        flag: 'Greece',
        shipType: 'Oil Tanker',
        grossTonnage: 157947,
        yearBuilt: 2015,
        status: 'Active',
      },
      {
        id: 9,
        name: 'MOL TRIUMPH',
        imo: '9769271',
        flag: 'Japan',
        shipType: 'Container Ship',
        grossTonnage: 210678,
        yearBuilt: 2017,
        status: 'Active',
      },
      {
        id: 10,
        name: 'SEAWISE GIANT',
        imo: '7381154',
        flag: 'Norway',
        shipType: 'Oil Tanker',
        grossTonnage: 260941,
        yearBuilt: 1979,
        status: 'Scrapped',
      },
      {
        id: 11,
        name: 'MAERSK MC-KINNEY MOLLER',
        imo: '9619907',
        flag: 'Denmark',
        shipType: 'Container Ship',
        grossTonnage: 194849,
        yearBuilt: 2013,
        status: 'Active',
      },
      {
        id: 12,
        name: 'MSC GULSUN',
        imo: '9839430',
        flag: 'Panama',
        shipType: 'Container Ship',
        grossTonnage: 232618,
        yearBuilt: 2019,
        status: 'Active',
      }
    ]
  };

 
  const filteredShips = mockShipData.ships.filter(ship => 
    ship.name.toLowerCase().includes(shipName.toLowerCase())
  );

  return {
    count: filteredShips.length,
    ships: filteredShips,
  };
};