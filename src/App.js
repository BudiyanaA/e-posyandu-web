import {  BrowserRouter as Router, Routes, Route, Navigate , Outlet } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Mastervilage from 'pages/Mastervilage';
import Mastervaksin from 'pages/Mastervaksin';
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
import Createmastervaksin from 'pages/create/Createmastervaksin';
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
import EditMastervaksin from 'pages/edit/EditMastervaksin';
import EditPosyandu from 'pages/edit/EditPosyandu';

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
                        <Route exact path="/" element={<Dashboard/> } />
                        <Route exact path="/mastervilage" element={<Mastervilage/>} />
                        <Route exact path="/mastervaksin" element={<Mastervaksin/>} />
                        <Route exact path="/mom" element={<Mom/>} />
                        <Route exact path="/dad" element={<Dad/>} />
                        <Route exact path="/imunization" element={<Imunization/>} />
                        <Route exact path="/child" element={<Child/>} />
                        <Route exact path="/kms" element={<Kms/>} />
                        <Route exact path="/birthrecord" element={<Birthrecord/>} />
                        <Route exact path="/user" element={<User/>} />
                        <Route exact path="/posyandu" element={<Posyandu/>} />
                        <Route exact path="/settings" element={<Settings/>} />
                        <Route exact path="/tables" element={<Tables/>} />
                        <Route exact path="/maps" element={<Maps/>} />
                        <Route exact path="/mastervilage/create" element={<Createmastervillage/>} />
                        <Route exact path="/mastervaksin/create" element={<Createmastervaksin/>} />
                        <Route exact path="/mom/create" element={<CreateMom/>} />
                        <Route exact path="/dad/create" element={<CreateDad/>} />
                        <Route exact path="/imunization/create" element={<CreateImunization/>} />
                        <Route exact path="/child/create" element={<CreateChild/>} />
                        <Route exact path="/kms/create" element={<CreateKms/>} />
                        <Route exact path="/birthrecord/create" element={<CreateBirthrecord/>} />
                        <Route exact path="/user/create" element={<CreateUser/>} />
                        <Route exact path="/posyandu/create" element={<CreatePosyandu/>} />
                        <Route exact path="/nutrition" element={<Nutrition/>} />
                        <Route exact path="/mastervilage/edit/:id" element={<EditMastervilage/>} />
                        <Route exact path="/mastervaksin/edit/:id" element={<EditMastervaksin/>} />
                        <Route exact path="/posyandu/edit/:id" element={<EditPosyandu/>} />
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
