import {  BrowserRouter as Router, Routes, Route, Navigate , Outlet } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Mastervilage from 'pages/Mastervilage';
import Mastervaksin from 'pages/Mastervaksin';
import Masterreligion from 'pages/Masterreligion';
import Masterplace from 'pages/Masterplace';
import Mastereducation from 'pages/Mastereducation';
import Masterpuskesmas from 'pages/Masterpuskesmas';
import Masterbirthcondition from 'pages/Masterbirthcondition';
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
import CreateMastervilage from 'pages/create/CreateMastervilage';
import CreateMastervaksin from 'pages/create/CreateMastervaksin';
import CreateMasterreligion from 'pages/create/CreateMasterreligion';
import CreateMasterplace from 'pages/create/CreateMasterplace';
import CreateMastereducation from 'pages/create/CreateMastereducation';
import CreateMasterpuskesmas from 'pages/create/CreateMasterpuskesmas';
import CreateMasterbirthcondition from 'pages/create/CreateMasterbirthcondition';
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
import EditMasterreligion from 'pages/edit/EditMasterreligion';
import EditMasterplace from 'pages/edit/EditMasterplace';
import EditMastereducation from 'pages/edit/EditMastereducation';
import EditMasterpuskesmas from 'pages/edit/EditMasterpuskesmas';
import EditMasterbirthcondition from 'pages/edit/EditMasterbirthcondition';
import EditPosyandu from 'pages/edit/EditPosyandu';
import EditMom from 'pages/edit/EditMom';
import EditDad from 'pages/edit/EditDad';
import EditBirthrecord from 'pages/edit/EditBirthrecord';
import EditChild from 'pages/edit/EditChild';

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
                        <Route exact path="/masterreligion" element={<Masterreligion/>} />
                        <Route exact path="/masterplace" element={<Masterplace/>} />
                        <Route exact path="/mastereducation" element={<Mastereducation/>} />
                        <Route exact path="/masterpuskesmas" element={<Masterpuskesmas/>} />
                        <Route exact path="/masterbirthcondition" element={<Masterbirthcondition/>} />
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
                        <Route exact path="/mastervilage/create" element={<CreateMastervilage/>} />
                        <Route exact path="/mastervaksin/create" element={<CreateMastervaksin/>} />
                        <Route exact path="/masterreligion/create" element={<CreateMasterreligion/>} />
                        <Route exact path="/masterplace/create" element={<CreateMasterplace/>} />
                        <Route exact path="/mastereducation/create" element={<CreateMastereducation/>} />
                        <Route exact path="/masterpuskesmas/create" element={<CreateMasterpuskesmas/>} />
                        <Route exact path="/masterbirthcondition/create" element={<CreateMasterbirthcondition/>} />
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
                        <Route exact path="/masterreligion/edit/:id" element={<EditMasterreligion/>} />
                        <Route exact path="/masterplace/edit/:id" element={<EditMasterplace/>} />
                        <Route exact path="/mastereducation/edit/:id" element={<EditMastereducation/>} />
                        <Route exact path="/masterpuskesmas/edit/:id" element={<EditMasterpuskesmas/>} />
                        <Route exact path="/masterbirthcondition/edit/:id" element={<EditMasterbirthcondition/>} />
                        <Route exact path="/posyandu/edit/:id" element={<EditPosyandu/>} />
                        <Route exact path="/mom/edit/:id" element={<EditMom/>} />
                        <Route exact path="/dad/edit/:id" element={<EditDad/>} />
                        <Route exact path="/birthrecord/edit/:id" element={<EditBirthrecord/>} />
                        <Route exact path="/child/edit/:id" element={<EditChild/>} />
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
