// import React from 'react'
// import Planning from '../../components/Packages/Planning'
// import Home from '../../components/Packages/Home'
// import Offer from '../../components/Packages/Offer'
// import Packages from '../../components/Packages/Packages'
// import { Route } from 'react-router-dom'
// import PackageDetails from '../../components/Packages/PackagesDetail'

// function PackagesPage() {
//   return (
//     <div>
//         <Home/>
//         <Packages/>
//          <Route path="/package/:id" element={<PackageDetails />} />
//         <Offer/>
//       <Planning/>
//     </div>
//   )
// }

// export default PackagesPage



import React from 'react'
import Planning from '../../components/Packages/Planning'
import Home from '../../components/Packages/Home'
import Offer from '../../components/Packages/Offer'
import Packages from '../../components/Packages/Packages'

function PackagesPage() {
  return (
    <div>
        <Home />
        <Packages />
        <Offer />
        <Planning />
    </div>
  )
}

export default PackagesPage


