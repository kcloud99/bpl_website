import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Facility from './pages/Facility'
import Programs from './pages/Programs'
import Founders from './pages/Founders'
import GetInvolved from './pages/GetInvolved'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Route>
    </Routes>
  )
}
