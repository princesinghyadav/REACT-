import React from "react";
import AuthPage from "../components/form";
import PricingSection from "../components/pricing"; 
import Content from "../components/content";
import Landing from "../components/landing";

import {   Routes, Route } from "react-router";

 export default function Linkk(){

    return (
<Routes>
 
  <Route path="/" element={<Landing />} />

 
    <Route path="/login" element={<AuthPage />} />
    <Route path="/features" element={< Content  />} />
  
    <Route path="/pricing" element={<PricingSection />} />
  
</Routes>

    )
}
