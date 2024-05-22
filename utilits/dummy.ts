export default {
    InsuranceProvider: [
        {
            'id':1,
            'name':'MUA Insurance Company',
            'insuarenceImage':require(`@/assets/images/imgs/mua.png`)
          },
          {
            'id':2,
            'name':'Radiant Insurance Company',
            'insuarenceImage':require(`@/assets/images/imgs/radiant.png`)
          },
          {
            'id':3,
            'name':'Prime Insurance Company',
            'insuarenceImage':require(`@/assets/images/imgs/prime.png`)
          }
    ],
    insuaranceCompany:[
      {
        'id':'0',
        'name':'Radiant Insurance Company',
        'email':'enquiry@radiant.rw',
        'phone':'+250 788 657 890',
        'officeHours':'Mon-Fri: 9:00am - 6:00pm Sat: 9:00am - 6:00pm Sun: 9:00am - 6:00pm',
        'address':'CHIC Building, KN 2 Ave',
        'companyImage':require(`@/assets/images/imgs/radiant.png`),
        'supportor':{
          'name':'John Mugisha',
          'department':'Claim Department'
        }
      },
      {
        'id':'1',
        'name':'MUA Insurance Company',
        'email':'enquiry@radiant.rw',
        'phone':'+250 788 657 890',
        'officeHours':'Mon-Fri: 9:00am - 6:00pm Sat: 9:00am - 6:00pm Sun: 9:00am - 6:00pm',
        'address':'KN 5 Road, CHIC Building',
        'companyImage':require(`@/assets/images/imgs/mua.png`),
        'supportor':{
          'name':'John Mugisha',
          'department':'Claim Department'
        }
      },
      {
        'id':'2',
        'name':'Prime Insurance Company',
        'email':'enquiry@radiant.rw',
        'phone':'+250 788 657 890',
        'officeHours':'Mon-Fri: 9:00am - 6:00pm Sat: 9:00am - 6:00pm Sun: 9:00am - 6:00pm',
        'address':'KN 5 Road, CHIC Building',
        'companyImage':require(`@/assets/images/imgs/prime.png`),
        'supportor':{
          'name':'John Mugisha',
          'department':'Claim Department'
        }
      },
    ],
    InsuarencePolicy:[
      {
        'id':'0',
        'policyNumber':'2586489',
        'policyStart':'12/08/24',
        'policyEnd':'12/08/2024',
        'status':'active',
        'provider':{
          'id':'2',
          'name':'Prime Insurance Company',
          'providerImage':require(`@/assets/images/imgs/prime.png`)
        },
        'packege':{
          'packegeId':'0'
        },
        'vehicals':[
          {
            'vehicalId':'0',
            'model':'2021 Toyota RAV4'
          },
          {
            'vehicalId':'1',
            'model':'2014 Mercedes B C300'
          }
        ],
        'drivers':[
          {
            'driverId':'0',
            'names':'Manzi Bruno',
            'isOwner':true
          },
          {
            'driverId':'1',
            'names':'Benjamin Rogriguez',
            'isOwner':false
          }
        ]
      },
      {
        'id':'1',
        'policyNumber':'0086489',
        'policyStart':'12/08/2024',
        'policyEnd':'01/08/2025',
        'status':'pending',
        'provider':{
          'id':'2',
          'name':'MUA Insurance Company',
          'providerImage':require(`@/assets/images/imgs/mua.png`)
        },
        'packege':{
          'packegeId':'0'
        },
        'vehicals':[
          {
            'vehicalId':'2',
            'model':'2020 Compressor Benz'
          },
          {
            'vehicalId':'1',
            'model':'2014 Mercedes B C300'
          }
        ],
        'drivers':[
          {
            'driverId':'0',
            'names':'Manzi Bruno',
            'isOwner':true
          },
          {
            'driverId':'1',
            'names':'Benjamin Rogriguez',
            'isOwner':false
          }
        ]
      },
      {
        'id':'2',
        'policyNumber':'1286489',
        'policyStart':'12/08/2023',
        'policyEnd':'02/08/2024',
        'status':'expired',
        'provider':{
          'id':'2',
          'name':'Radiant Insurance Company',
          'providerImage':require(`@/assets/images/imgs/radiant.png`)
        },
        'packege':{
          'packegeId':'0'
        },
        'vehicals':[
          {
            'vehicalId':'2',
            'model':'2020 Compressor Benz'
          }
        ],
        'drivers':[
          {
            'driverId':'0',
            'names':'Manzi Bruno',
            'isOwner':true
          },
          {
            'driverId':'1',
            'names':'Benjamin Rogriguez',
            'isOwner':false
          }
        ]
      }
    ],
    cars:[
      {
        'vehicalId':'0',
        'model':'2021 Toyota RAV4',
        'vin':'25864SDF89RTYJ',
      },
      {
        'vehicalId':'1',
        'model':'2014 Mercedes B C300',
        'vin':'25833SDF89R',
      },
      {
        'vehicalId':'2',
        'model':'2020 Compressor Benz',
        'vin':'25864BMF89R',
      }
    ],
    drivers:[
      {
        'driverId':'0',
        'firstName':'Manzi',
        'lastName':'Bruno',
        'licencseNumber':'25864SDFMMMMMM',
        'nationalId':'1997 8000 1998 055',
        'streetAddress':'KN 123 St',
        'houseNumber':'61'
      },
      {
        'driverId':'1',
        'firstName':'Benjamin',
        'lastName':'Rogriguez',
        'licencseNumber':'25864SDF89RTYJ',
        'nationalId':'1990 8000 1998 055',
        'streetAddress':'KN 112 St',
        'houseNumber':'98'
      }
    ],
    policyPackege:[
      {
        'packegeId':'0',
        'packegeName':'Premium',
        'packegeCost':'Rwf 500,000'
      },
      {
        'packegeId':'1',
        'packegeName':'Full Coverage',
        'packegeCost':'Rwf 1,000,000'
      },
      {
        'packegeId':'2',
        'packegeName':'Starter',
        'packegeCost':'Rwf 300,000'
      },
    ],
    paymentHistory:[
      {
        id:0,
        carModel:'2021 Toyota RAV4',
        dateIssued:'Aug 12, 2023',
        amountPaid:'Rwf 230,000',
        companyImage:require(`@/assets/images/imgs/radiant.png`)
      },
      {
        id:0,
        carModel:'Medicare',
        dateIssued:'Jan 25, 2023',
        amountPaid:'Rwf 100,000',
        companyImage:require(`@/assets/images/imgs/radiant.png`)
      },
      {
        id:0,
        carModel:'2014 Mercedes',
        dateIssued:'Jan 25, 2023',
        amountPaid:'Rwf 800,000',
        companyImage:require(`@/assets/images/imgs/radiant.png`)
      },
      {
        id:0,
        carModel:'Medicare',
        dateIssued:'May 04, 2024',
        amountPaid:'Rwf 80,000',
        companyImage:require(`@/assets/images/imgs/radiant.png`)
      },
    ]

}