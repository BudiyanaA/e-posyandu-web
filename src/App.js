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
import User from 'pages/User';
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
import CreateUser from 'pages/create/CreateUser';
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
                    <Route element={<SidebarLayout/>}>
                        <Route index path="/" element={<Dashboard/> } />
                        <Route  path="/mastervilage" element={<Mastervilage/>} />
                        <Route  path="/mom" element={<Mom/>} />
                        <Route  path="/dad" element={<Dad/>} />
                        <Route  path="/imunization" element={<Imunization/>} />
                        <Route  path="/child" element={<Child/>} />
                        <Route exct path="/kms" element={<Kms/>} />
                        <Route path="/birthrecord" element={<Birthrecord/>} />
                        <Route path="/user" element={<User/>} />
                        <Route path="/posyandu" element={<Posyandu/>} />
                        <Route path="/settings" element={<Settings/>} />
                        <Route path="/tables" element={<Tables/>} />
                        <Route path="/maps" element={<Maps/>} />
                        <Route path="/masterVilage/create" element={<Createmastervillage/>} />
                        <Route path="/mom/create" element={<CreateMom/>} />
                        <Route path="/dad/create" element={<CreateDad/>} />
                        <Route path="/imunization/create" element={<CreateImunization/>} />
                        <Route path="/child/create" element={<CreateChild/>} />
                        <Route path="/kms/create" element={<CreateKms/>} />
                        <Route path="/birthrecord/create" element={<CreateBirthrecord/>} />
                        <Route path="/user/create" element={<CreateUser/>} />
                        <Route path="/posyandu/create" element={<CreatePosyandu/>} />
                        <Route path="/nutrition" element={<Nutrition/>} />
                        <Route path="/masterVilage/edit/:id" element={<EditMastervilage/>} />
                    </Route>
                    
                    {/* <Navigate  from="*" to="/" /> */}
                </Routes>
                {/* <Footer /> */}
            </div>
            <Routes>
                <Route  path="/login" element={<Login/>} />
            </Routes>
            <Footer />
            </>
    );
}

export default App;
