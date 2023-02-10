import React from 'react'

function NoUnconfirmedTransaction() {
  return (
    <>
      <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M137.5 69.25V75C137.492 88.4776 133.128 101.592 125.058 112.386C116.989 123.181 105.646 131.078 92.721 134.899C79.7964 138.721 65.9829 138.262 53.3404 133.591C40.698 128.92 29.9041 120.288 22.5685 108.982C15.2329 97.6752 11.7487 84.3004 12.6355 70.852C13.5223 57.4035 18.7325 44.602 27.4892 34.3567C36.246 24.1114 48.0799 16.9711 61.2262 14.0009C74.3725 11.0307 88.1267 12.3896 100.438 17.875" stroke="#D5D5D5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M137.5 25L75 87.5625L56.25 68.8125" stroke="#D5D5D5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

      <p className="mt-[30px]">All transactions have been confirmed</p>
    </>
  )
}

export default NoUnconfirmedTransaction