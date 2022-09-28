import { Switch, Route, Redirect } from 'react-router-dom';
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
import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function App() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/mastervilage" component={Mastervilage} />
                    <Route exact path="/mom" component={Mom} />
                    <Route exact path="/dad" component={Dad} />
                    <Route exact path="/imunization" component={Imunization} />
                    <Route exact path="/child" component={Child} />
                    <Route exact path="/kms" component={Kms} />
                    <Route exact path="/birthrecord" component={Birthrecord} />
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/posyandu" component={Posyandu} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/tables" component={Tables} />
                    <Route exact path="/maps" component={Maps} />
                    <Route exact path="/MasterVilage/create" component={Createmastervillage} />
                    <Route exact path="/mom/create" component={CreateMom} />
                    <Route exact path="/dad/create" component={CreateDad} />
                    <Route exact path="/imunization/create" component={CreateImunization} />
                    <Route exact path="/child/create" component={CreateChild} />
                    <Route exact path="/kms/create" component={CreateKms} />
                    <Route exact path="/birthrecord/create" component={CreateBirthrecord} />
                    <Route exact path="/admin/create" component={CreateAdmin} />
                    <Route exact path="/posyandu/create" component={CreatePosyandu} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default App;
