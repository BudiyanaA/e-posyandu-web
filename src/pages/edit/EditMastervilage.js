// import Card from '@material-tailwind/react/Card';
import { Button, Card, CardHeader, CardBody, Input } from "@material-tailwind/react";
import React, { useState , useEffect } from "react";
import { useParams } from 'react-router-dom';
import MastervilageDataService from "services/MastervilageService";

export default function VillageForm() {
        const { id }= useParams();
        const initialMastervilageState = {
            id: null,
            name: ""
          };
          const [currentMastervilage, setCurrentMastervilage] = useState(initialMastervilageState);
          const [edit , setEdit] = useState(false);
          const [ setMessage] = useState("");
          const getMastervilage = id => {
            
            MastervilageDataService.get(id)
              .then(response => {
                setCurrentMastervilage(response.data);                
                console.log(response.data);
              })
              .catch(e => {             
                console.log(e);
              });
          };

          const handleInputChange = event => {
            const { name, value } = event.target;
            setCurrentMastervilage({ ...currentMastervilage, [name]: value });
          };

          useEffect(() => {
            if (id)
              getMastervilage(id);
          }, [id]);

          const updateMastervilage = () => {
            MastervilageDataService.update(currentMastervilage.id, currentMastervilage)
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
            <CardHeader color="purple" className="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Edit</h2>
                    <Button
                        color="white"
                        // buttonType="link"
                        size="lg"
                        style={{ padding: 0 }}
                        >
                        Master Village
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
                                value={currentMastervilage.name}
                                onChange={handleInputChange}
                                name="name"
                            />
                        </div>
                        <Button onClick={updateMastervilage} className="btn btn-success" color="blue">
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