import {  BrowserRouter as Router, Routes, Route, Navigate , Outlet } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Mastervilage from 'pages/Mastervilage';
import Mom from 'pages/Mom';
import Dad from 'pages/Dad';
import Imunization from 'pages/Imunization';
import Child from 'pages/Child';
import Kms from 'pages/Kms';
import Birthrecord from 'pages/Birthrecord';
import Admin from 'pages/Admin';
import Posyandu from 'pages/Posyandu';
import Tables from 'pages/Tables';
import Maps from 'pages/Maps';
import Createmastervillage from 'pages/create/Createmastervilage';
import CreateMom from 'pages/create/CreateMom';
import CreateDad from 'pages/create/CreateDad';
import CreateImunization from 'pages/create/CreateImunization';
import CreateChild from 'pages/create/CreateChild';
import CreateKms from 'pages/create/CreateKms';
import CreateBirthrecord from 'pages/create/CreateBirthrecord';
import CreateAdmin from 'pages/create/CreateAdmin';
import CreatePosyandu from 'pages/create/CreatePosyandu';
import Login from 'pages/Login';
import Nutrition from 'pages/Nutrition'
import Footer from 'components/Footer';
import EditMastervilage from 'pages/edit/EditMastervilage';


// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
const SidebarLayout = () => (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
function App() {


    return (
        
        <>
            <div className="md:ml-64">
                <Routes>
                    <Route element={<SidebarLayout/>}>r
                        <Route exact path="/" element={<Dashboard/> } />
                        <Route exact path="/mastervilage" element={<Mastervilage/>} />
                        <Route exact path="/mom" element={<Mom/>} />
                        <Route exact path="/dad" element={<Dad/>} />
                        <Route exact path="/imunization" element={<Imunization/>} />
                        <Route exact path="/child" element={<Child/>} />
                        <Route exact path="/kms" element={<Kms/>} />
                        <Route exact path="/birthrecord" element={<Birthrecord/>} />
                        <Route exact path="/admin" element={<Admin/>} />
                        <Route exact path="/posyandu" element={<Posyandu/>} />
                        <Route exact path="/settings" element={<Settings/>} />
                        <Route exact path="/tables" element={<Tables/>} />
                        <Route exact path="/maps" element={<Maps/>} />
                        <Route exact path="/masterVilage/create" element={<Createmastervillage/>} />
                        <Route exact path="/mom/create" element={<CreateMom/>} />
                        <Route exact path="/dad/create" element={<CreateDad/>} />
                        <Route exact path="/imunization/create" element={<CreateImunization/>} />
                        <Route exact path="/child/create" element={<CreateChild/>} />
                        <Route exact path="/kms/create" element={<CreateKms/>} />
                        <Route exact path="/birthrecord/create" element={<CreateBirthrecord/>} />
                        <Route exact path="/admin/create" element={<CreateAdmin/>} />
                        <Route exact path="/posyandu/create" element={<CreatePosyandu/>} />
                        <Route exact path="/nutrition" element={<Nutrition/>} />
                        <Route exact path="/masterVilage/edit/:id" element={<EditMastervilage/>} />
                    </Route>
                    
                    {/* <Navigate  from="*" to="/" /> */}
                </Routes>
                {/* <Footer /> */}
            </div>
            <Routes>
                <Route exact path="/login" element={<Login/>} />
            </Routes>
            <Footer />
            </>
    );
}

export default App;
