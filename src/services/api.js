const mockReferrals = [
  {
    id: '1',
    customerName: 'Rahul Sharma',
    service: 'Home Loan',
    status: 'Active',
    earnings: 250,
    amount: 500000,
    date: '2026-07-01',
  },
  {
    id: '2',
    customerName: 'Priya Reddy',
    service: 'Personal Loan',
    status: 'Pending',
    earnings: 180,
    amount: 250000,
    date: '2026-07-02',
  },
  {
    id: '3',
    customerName: 'Arjun Kumar',
    service: 'Credit Card',
    status: 'Active',
    earnings: 120,
    amount: 100000,
    date: '2026-07-03',
  },
  {
    id: '4',
    customerName: 'Sneha Patel',
    service: 'Insurance',
    status: 'Active',
    earnings: 300,
    amount: 450000,
    date: '2026-07-04',
  },
  {
    id: '5',
    customerName: 'Vikram Singh',
    service: 'Car Loan',
    status: 'Pending',
    earnings: 210,
    amount: 350000,
    date: '2026-07-05',
  },
  {
    id: '6',
    customerName: 'Anjali Verma',
    service: 'Home Loan',
    status: 'Active',
    earnings: 280,
    amount: 550000,
    date: '2026-07-06',
  },
  {
    id: '7',
    customerName: 'Kiran Rao',
    service: 'Insurance',
    status: 'Active',
    earnings: 170,
    amount: 200000,
    date: '2026-07-07',
  },
  {
    id: '8',
    customerName: 'Deepak Yadav',
    service: 'Credit Card',
    status: 'Pending',
    earnings: 110,
    amount: 80000,
    date: '2026-07-08',
  },
  {
    id: '9',
    customerName: 'Meena Joshi',
    service: 'Personal Loan',
    status: 'Active',
    earnings: 240,
    amount: 300000,
    date: '2026-07-09',
  },
  {
    id: '10',
    customerName: 'Rohit Gupta',
    service: 'Car Loan',
    status: 'Active',
    earnings: 260,
    amount: 400000,
    date: '2026-07-10',
  },
  {
    id: '11',
    customerName: 'Pooja Sharma',
    service: 'Home Loan',
    status: 'Pending',
    earnings: 220,
    amount: 480000,
    date: '2026-07-11',
  },
  {
    id: '12',
    customerName: 'Suresh Naidu',
    service: 'Insurance',
    status: 'Active',
    earnings: 195,
    amount: 275000,
    date: '2026-07-12',
  },
  {
    id: '13',
    customerName: 'Lakshmi Devi',
    service: 'Credit Card',
    status: 'Active',
    earnings: 130,
    amount: 95000,
    date: '2026-07-13',
  },
  {
    id: '14',
    customerName: 'Harish Kumar',
    service: 'Personal Loan',
    status: 'Pending',
    earnings: 205,
    amount: 260000,
    date: '2026-07-14',
  },
  {
    id: '15',
    customerName: 'Divya Rani',
    service: 'Home Loan',
    status: 'Active',
    earnings: 310,
    amount: 620000,
    date: '2026-07-15',
  },
  {
    id: '16',
    customerName: 'Manoj Reddy',
    service: 'Car Loan',
    status: 'Active',
    earnings: 225,
    amount: 390000,
    date: '2026-07-16',
  },
  {
    id: '17',
    customerName: 'Keerthi',
    service: 'Insurance',
    status: 'Pending',
    earnings: 175,
    amount: 210000,
    date: '2026-07-17',
  },
  {
    id: '18',
    customerName: 'Sai Teja',
    service: 'Credit Card',
    status: 'Active',
    earnings: 115,
    amount: 90000,
    date: '2026-07-18',
  },
  {
    id: '19',
    customerName: 'Naveen',
    service: 'Personal Loan',
    status: 'Active',
    earnings: 255,
    amount: 315000,
    date: '2026-07-19',
  },
  {
    id: '20',
    customerName: 'Bhavya',
    service: 'Home Loan',
    status: 'Pending',
    earnings: 290,
    amount: 580000,
    date: '2026-07-20',
  },
    {
    id: '21',
    customerName: 'Akhil',
    service: 'Insurance',
    status: 'Active',
    earnings: 180,
    amount: 220000,
    date: '2026-07-21',
  },
  {
    id: '22',
    customerName: 'Sravani',
    service: 'Credit Card',
    status: 'Pending',
    earnings: 125,
    amount: 98000,
    date: '2026-07-22',
  },
  {
    id: '23',
    customerName: 'Praveen',
    service: 'Personal Loan',
    status: 'Active',
    earnings: 240,
    amount: 340000,
    date: '2026-07-23',
  },
  {
    id: '24',
    customerName: 'Swathi',
    service: 'Home Loan',
    status: 'Active',
    earnings: 320,
    amount: 650000,
    date: '2026-07-24',
  },
  {
    id: '25',
    customerName: 'Ramesh',
    service: 'Car Loan',
    status: 'Pending',
    earnings: 230,
    amount: 410000,
    date: '2026-07-25',
  },
  {
    id: '26',
    customerName: 'Anusha',
    service: 'Insurance',
    status: 'Active',
    earnings: 195,
    amount: 250000,
    date: '2026-07-26',
  },
  {
    id: '27',
    customerName: 'Karthik',
    service: 'Credit Card',
    status: 'Active',
    earnings: 140,
    amount: 105000,
    date: '2026-07-27',
  },
  {
    id: '28',
    customerName: 'Sirisha',
    service: 'Personal Loan',
    status: 'Pending',
    earnings: 210,
    amount: 280000,
    date: '2026-07-28',
  },
  {
    id: '29',
    customerName: 'Ganesh',
    service: 'Home Loan',
    status: 'Active',
    earnings: 335,
    amount: 700000,
    date: '2026-07-29',
  },
  {
    id: '30',
    customerName: 'Madhavi',
    service: 'Car Loan',
    status: 'Active',
    earnings: 245,
    amount: 430000,
    date: '2026-07-30',
  },
  {
    id: '31',
    customerName: 'Ajay',
    service: 'Insurance',
    status: 'Pending',
    earnings: 185,
    amount: 235000,
    date: '2026-07-31',
  },
  {
    id: '32',
    customerName: 'Harika',
    service: 'Credit Card',
    status: 'Active',
    earnings: 150,
    amount: 112000,
    date: '2026-08-01',
  },
  {
    id: '33',
    customerName: 'Vamsi',
    service: 'Personal Loan',
    status: 'Active',
    earnings: 255,
    amount: 355000,
    date: '2026-08-02',
  },
  {
    id: '34',
    customerName: 'Niharika',
    service: 'Home Loan',
    status: 'Pending',
    earnings: 340,
    amount: 710000,
    date: '2026-08-03',
  },
  {
    id: '35',
    customerName: 'Sandeep',
    service: 'Car Loan',
    status: 'Active',
    earnings: 260,
    amount: 445000,
    date: '2026-08-04',
  },
  {
    id: '36',
    customerName: 'Bhargavi',
    service: 'Insurance',
    status: 'Active',
    earnings: 205,
    amount: 270000,
    date: '2026-08-05',
  },
  {
    id: '37',
    customerName: 'Mahesh',
    service: 'Credit Card',
    status: 'Pending',
    earnings: 160,
    amount: 118000,
    date: '2026-08-06',
  },
  {
    id: '38',
    customerName: 'Lavanya',
    service: 'Personal Loan',
    status: 'Active',
    earnings: 270,
    amount: 370000,
    date: '2026-08-07',
  },
  {
    id: '39',
    customerName: 'Ravi',
    service: 'Home Loan',
    status: 'Active',
    earnings: 355,
    amount: 735000,
    date: '2026-08-08',
  },
  {
    id: '40',
    customerName: 'Sindhu',
    service: 'Car Loan',
    status: 'Pending',
    earnings: 275,
    amount: 460000,
    date: '2026-08-09',
  },
  {
    id: '41',
    customerName: 'Teja',
    service: 'Insurance',
    status: 'Active',
    earnings: 215,
    amount: 285000,
    date: '2026-08-10',
  },
  {
    id: '42',
    customerName: 'Pavani',
    service: 'Credit Card',
    status: 'Active',
    earnings: 170,
    amount: 124000,
    date: '2026-08-11',
  },
  {
    id: '43',
    customerName: 'Lokesh',
    service: 'Personal Loan',
    status: 'Pending',
    earnings: 280,
    amount: 390000,
    date: '2026-08-12',
  },
  {
    id: '44',
    customerName: 'Shilpa',
    service: 'Home Loan',
    status: 'Active',
    earnings: 365,
    amount: 760000,
    date: '2026-08-13',
  },
  {
    id: '45',
    customerName: 'Rajesh',
    service: 'Car Loan',
    status: 'Active',
    earnings: 285,
    amount: 475000,
    date: '2026-08-14',
  },
  {
    id: '46',
    customerName: 'Sowmya',
    service: 'Insurance',
    status: 'Pending',
    earnings: 225,
    amount: 295000,
    date: '2026-08-15',
  },
  {
    id: '47',
    customerName: 'Chandu',
    service: 'Credit Card',
    status: 'Active',
    earnings: 180,
    amount: 130000,
    date: '2026-08-16',
  },
  {
    id: '48',
    customerName: 'Ramya',
    service: 'Personal Loan',
    status: 'Active',
    earnings: 295,
    amount: 405000,
    date: '2026-08-17',
  },
  {
    id: '49',
    customerName: 'Naresh',
    service: 'Home Loan',
    status: 'Pending',
    earnings: 375,
    amount: 780000,
    date: '2026-08-18',
  },
  {
    id: '50',
    customerName: 'Deepthi',
    service: 'Car Loan',
    status: 'Active',
    earnings: 300,
    amount: 500000,
    date: '2026-08-19',
  },
];
export const loginUser = async userDetails => {
  if (
    userDetails.email === 'admin@example.com' &&
    userDetails.password === 'admin123'
  ) {
    return {
      ok: true,
      data: {
        jwt_token: 'mock_jwt_token_123456',
      },
    }
  }

  return {
    ok: false,
    data: {
      error_msg: 'Invalid Credentials',
    },
  }
}

export const getReferralsData = async (
  jwtToken,
  search = '',
  sort = 'desc',
) => {
  let referrals = [...mockReferrals]

  if (search.trim() !== '') {
    const value = search.toLowerCase()

    referrals = referrals.filter(
      each =>
        each.customerName.toLowerCase().includes(value) ||
        each.service.toLowerCase().includes(value),
    )
  }

  referrals.sort((a, b) => {
    if (sort === 'asc') {
      return new Date(a.date) - new Date(b.date)
    }
    return new Date(b.date) - new Date(a.date)
  })

  const totalReferrals = referrals.length

  const activeReferrals = referrals.filter(
    each => each.status === 'Active',
  ).length

  const totalRefEarnings = referrals.reduce(
    (sum, each) => sum + each.earnings,
    0,
  )

  return {
    ok: true,
    data: {
      data: {
        metrics: [
          {
            title: 'Total Referrals',
            value: totalReferrals,
          },
          {
            title: 'Active Referrals',
            value: activeReferrals,
          },
          {
            title: 'Total Earnings',
            value: totalRefEarnings,
          },
        ],

        referral: {
          referralCode: 'GOBIZ2026',
          referralLink:
            'https://go-business.com/referral/GOBIZ2026',
        },

        referrals: referrals,
      },
    },
  }
}

export const getReferralById = async (jwtToken, id) => {
  const referral = mockReferrals.find(each => each.id === id)

  if (referral) {
    return {
      ok: true,
      data: {
        data: referral,
      },
    }
  }

  return {
    ok: false,
    data: {
      error_msg: 'Referral Not Found',
    },
  }
}