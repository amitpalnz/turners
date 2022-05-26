import { Route, Routes } from "react-router-dom";
import Claims from "./pages/Claims";
import FaqClaim from './pages/FaqClaim';
import Faq from "./pages/Faq";
import OurPolicies from "./pages/OurPolicies";
import FaqOurPolicy from "./pages/FaqOurPolicy";
import ManagePolicy from "./pages/ManagePolicy";
import ManagePolicyFaq from "./pages/ManagePolicyFaq";
import Navigate from "./component/Navigate";



function App() {
  return (
    <div>
      <Navigate />
      <Routes>
        
        <Route path="/" exact element={<OurPolicies />} />
        <Route path="/managepolicy" exact element={<ManagePolicy />} />
        <Route path="/claims" exact element={<Claims />} />
        <Route path="/ourpolicyfaq" element={<FaqOurPolicy />} />
        <Route path="/managepolicyfaq" exact element={<ManagePolicyFaq />} />
        <Route path="/faqclaim" element={<FaqClaim />} />
      </Routes>
    </div>
  );
}

export default App;
