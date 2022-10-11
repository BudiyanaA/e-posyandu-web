import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import React, { useState , useEffect } from "react";
import { useParams } from 'react-router-dom';
import MasterbirthconditionDataService from "services/MasterbirthconditionService";

export default function Birthcondition() {
        const { id }= useParams();
        const initialMasterbirthconditionState = {
            id: null,
            name: ""
          };
          const [currentMasterbirthcondition, setCurrentMasterbirthcondition] = useState(initialMasterbirthconditionState);
          const [edit , setEdit] = useState(false);
          const [ setMessage] = useState("");
          const getMasterbirthcondition = id => {
            
            MasterbirthconditionDataService.get(id)
              .then(response => {
                setCurrentMasterbirthcondition(response.data);                
                console.log(response.data);
              })
              .catch(e => {             
                console.log(e);
              });
          };

          const handleInputChange = event => {
            const { name, value } = event.target;
            setCurrentMasterbirthcondition({ ...currentMasterbirthcondition, [name]: value });
          };

          useEffect(() => {
            if (id)
              getMasterbirthcondition(id);
          }, [id]);

          const updateMasterbirthcondition = () => {
            MasterbirthconditionDataService.update(currentMasterbirthcondition.id, currentMasterbirthcondition)
              .then(response => {
                console.log(response.data);
                setMessage("The tutorial was updated successfully!");
              })
              .catch(e => {
                setEdit(true);
                console.log(e);
              });
          };
    return (
        <>
        <div className="bg-light-blue-500 pt-10 pb-25"></div>
        <Card>
            <CardHeader color="purple" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Edit</h2>
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        style={{ padding: 0 }}
                        >
                        Master Birthcondition
                    </Button>
                    </div>                   
                </CardHeader>                
                <CardBody>              
                <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase"></h6> 
                <div className="edit-form">
                {edit   ? (
                    <div>
                      <h4>You edit successfully!</h4>
                    </div>
                    ) : (
                    <div>                                                                  
                        <div className="w-full lg:w-12/12 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Name"
                                id="name"
                                required
                                value={currentMasterbirthcondition.name}
                                onChange={handleInputChange}
                                name="name"
                            />
                        </div>
                        <Button onClick={updateMasterbirthcondition} className="btn btn-success" color="blue">
                             Submit
                        </Button>                   
                    </div>
                     )}
                </div>     
                </CardBody>
            </Card>
        </>
    );
}