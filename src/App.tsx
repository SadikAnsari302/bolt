import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { supabase } from './lib/supabase';
import { useAuthStore } from './store/useStore';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import AlertsPage from './pages/AlertsPage';
import LoginPage from './pages/LoginPage';
import AdminLayout from './pages/admin/AdminLayout';
import DashboardPage from './pages/admin/DashboardPage';
import AgricultureSubcategories from './components/AgricultureSubcategories';
import ApparelSubcategories from './components/ApparelSubcategories';
import AutomobileSubcategories from './components/AutomobileSubcategories';
import BrassHardwareSubcategories from './components/BrassHardwareSubcategories';
import ChemicalsSubcategories from './components/ChemicalsSubcategories';
import ComputerHardwareSubcategories from './components/ComputerHardwareSubcategories';
import ConstructionSubcategories from './components/ConstructionSubcategories';
import ConsumerElectronicsSubcategories from './components/ConsumerElectronicsSubcategories';
import ElectronicsAndElectricalSubcategories from './components/ElectronicsAndElectricalSubcategories';
import EnergyAndPowerSubcategories from './components/EnergyAndPowerSubcategories';
import EnvironmentAndPollutionSubcategories from './components/EnvironmentAndPollutionSubcategories';
import FoodAndBeverageSubcategories from './components/FoodAndBeverageSubcategories';
import FurnitureSubcategories from './components/FurnitureSubcategories';
import GiftAndCraftSubcategories from './components/GiftAndCraftSubcategories';
import HealthAndBeautySubcategories from './components/HealthAndBeautySubcategories';
import HomeSuppliesSubcategories from './components/HomeSuppliesSubcategories';
import HomeTextilesAndFurnishingSubcategories from './components/HomeTextilesAndFurnishingSubcategories';
import HospitalAndMedicalSuppliesSubcategories from './components/HospitalAndMedicalSuppliesSubcategories';
import HotelSuppliesAndEquipmentSubcategories from './components/HotelSuppliesAndEquipmentSubcategories';
import IndustrialSuppliesSubcategories from './components/IndustrialSuppliesSubcategories';
import JewelryAndGemstonesSubcategories from './components/JewelryAndGemstonesSubcategories';
import LeatherAndLeatherProductsSubcategories from './components/LeatherAndLeatherProductsSubcategories';
import MachinerySubcategories from './components/MachinerySubcategories';
import MineralAndMetalsSubcategories from './components/MineralAndMetalsSubcategories';
import OfficeAndSchoolSuppliesSubcategories from './components/OfficeAndSchoolSuppliesSubcategories';
import PackagingAndPaperSubcategories from './components/PackagingAndPaperSubcategories';
import PharmaceuticalsSubcategories from './components/PharmaceuticalsSubcategories';
import PipesTubesAndFittingsSubcategories from './components/PipesTubesAndFittingsSubcategories';
import PlasticsAndProductsSubcategories from './components/PlasticsAndProductsSubcategories';
import PrintingAndPublishingSubcategories from './components/PrintingAndPublishingSubcategories';
import ScientificAndLaboratoryInstrumentsSubcategories from './components/ScientificAndLaboratoryInstrumentsSubcategories';
import SecurityAndProtectionSubcategories from './components/SecurityAndProtectionSubcategories';
import SportAndEntertainmentSubcategories from './components/SportAndEntertainmentSubcategories';
import TelecommunicationsSubcategories from './components/TelecommunicationsSubcategories';
import TextilesAndFabricsSubcategories from './components/TextilesAndFabricsSubcategories';
import ToysSubcategories from './components/ToysSubcategories';
import TransportationSubcategories from './components/TransportationSubcategories';
import { Ruler } from 'lucide-react';

function App() {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    // Set initial user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription }, } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<DashboardPage />} />
              {/* Add other admin routes here */}
            </Route>

            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/category/agriculture" element={<AgricultureSubcategories />} />
            <Route path="/category/apparel" element={<ApparelSubcategories />} />
            <Route path="/category/automobile" element={<AutomobileSubcategories />} />
            <Route path="/category/brass-hardware" element={<BrassHardwareSubcategories />} />
            <Route path="/category/chemicals" element={<ChemicalsSubcategories />} />
            <Route path="/category/computer" element={<ComputerHardwareSubcategories />} />
            <Route path="/category/construction" element={<ConstructionSubcategories />} />
            <Route path="/category/consumer-electronics" element={<ConsumerElectronicsSubcategories />} />
            <Route path="/category/electronics" element={<ElectronicsAndElectricalSubcategories />} />
            <Route path="/category/energy" element={<EnergyAndPowerSubcategories />} />
            <Route path="/category/environment-pollution" element={<EnvironmentAndPollutionSubcategories />} />
            <Route path="/category/food" element={<FoodAndBeverageSubcategories />} />
            <Route path="/category/furniture" element={<FurnitureSubcategories />} />
            <Route path="/category/gifts" element={<GiftAndCraftSubcategories />} />
            <Route path="/category/health" element={<HealthAndBeautySubcategories />} />
            <Route path="/category/home-supplies" element={<HomeSuppliesSubcategories />} />
            <Route path="/category/home-textiles" element={<HomeTextilesAndFurnishingSubcategories />} />
            <Route path="/category/hospital" element={<HospitalAndMedicalSuppliesSubcategories />} />
            <Route path="/category/hotel" element={<HotelSuppliesAndEquipmentSubcategories />} />
            <Route path="/category/industrial" element={<IndustrialSuppliesSubcategories />} />
            <Route path="/category/jewelry" element={<JewelryAndGemstonesSubcategories />} />
            <Route path="/category/leather" element={<LeatherAndLeatherProductsSubcategories />} />
            <Route path="/category/machinery" element={<MachinerySubcategories />} />
            <Route path="/category/mineral" element={<MineralAndMetalsSubcategories />} />
            <Route path="/category/office-supplies" element={<OfficeAndSchoolSuppliesSubcategories />} />
            <Route path="/category/packing" element={<PackagingAndPaperSubcategories />} />
            <Route path="/category/pharmaceuticals" element={<PharmaceuticalsSubcategories />} />
            <Route path="/category/pipes" element={<PipesTubesAndFittingsSubcategories />} />
            <Route path="/category/plastics" element={<PlasticsAndProductsSubcategories />} />
            <Route path="/category/printing" element={<PrintingAndPublishingSubcategories />} />
            <Route path="/category/scientific" element={<ScientificAndLaboratoryInstrumentsSubcategories />} />
            <Route path="/category/security" element={<SecurityAndProtectionSubcategories />} />
            <Route path="/category/sports" element={<SportAndEntertainmentSubcategories />} />
            <Route path="/category/telecommunications" element={<TelecommunicationsSubcategories />} />
            <Route path="/category/textiles" element={<TextilesAndFabricsSubcategories />} />
            <Route path="/category/toys" element={<ToysSubcategories />} />
            <Route path="/category/transportation" element={<TransportationSubcategories />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/notifications" element={<AlertsPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;