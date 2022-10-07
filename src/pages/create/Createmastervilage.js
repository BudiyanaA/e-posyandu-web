// import Card from '@material-tailwind/react/Card';
import { Button, Card, CardHeader, CardBody, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import MastervilageDataService from "services/MastervilageService";

export default function LoginForm() {
    const initialMastervilagelState = {
        id: null,
        name: ""
      };
      const [mastervilage, setMastervilage] = useState(initialMastervilagelState);
      const [submitted, setSubmitted] = useState(false);

      const handleInputChange = event => {
        const { name, value } = event.target;
        setMastervilage({ ...mastervilage, [name]: value });
      };
      
      const saveMastervilage = () => {
        var data = {
          name: mastervilage.name,
        };
    
        MastervilageDataService.create(data)
          .then(response => {
            setMastervilage({
              id: response.data.id,
              name: response.data.name
            });
            setSubmitted(true);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
    
      const newMastervilage = () => {
        setMastervilage(initialMastervilagelState);
        setSubmitted(false);
      };
    return (
        <>
          <div className="bg-light-blue-500 pt-10 pb-25"></div>
          <Card>
            <CardHeader color="purple" className="none">
              <div className="w-full flex items-center justify-between">
                  <h2 className="text-white text-2xl">Create</h2>
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
                <div className="submit-form">
                    {submitted ? (
                    <div>
                      <h4>You submitted successfully!</h4>
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
                                value={mastervilage.name}
                                onChange={handleInputChange}
                                name="name"
                            />
                        </div>
                        <Button onClick={saveMastervilage} className="btn btn-success" color="blue">
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