import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import React, { useState } from "react";
import MasterbirthconditionDataService from "services/MasterbirthconditionService";

export default function LoginForm() {
    const initialMasterbirthconditionState = {
        id: null,
        name: ""
      };
      const [masterbirthcondition, setMasterbirthcondition] = useState(initialMasterbirthconditionState);
      const [submitted, setSubmitted] = useState(false);

      const handleInputChange = event => {
        const { name, value } = event.target;
        setMasterbirthcondition({ ...masterbirthcondition, [name]: value });
      };
      
      const saveMasterbirthcondition = () => {
        var data = {
          name: masterbirthcondition.name,
        };
    
        MasterbirthconditionDataService.create(data)
          .then(response => {
            setMasterbirthcondition({
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
    
    //   const newMastervilage = () => {
    //     setMastervilage(initialMastervilagelState);
    //     setSubmitted(false);
    //   };
    return (
        <>
          <div className="bg-light-blue-500 pt-10 pb-25"></div>
          <Card>
            <CardHeader color="purple" contentPosition="none">
              <div className="w-full flex items-center justify-between">
                  <h2 className="text-white text-2xl">Create</h2>
                      <Button
                          color="transparent"
                          buttonType="link"
                          size="lg"
                          style={{ padding: 0 }}
                        >
                          Master Birth Condition
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
                                value={masterbirthcondition.name}
                                onChange={handleInputChange}
                                name="name"
                            />
                        </div>
                        <Button onClick={saveMasterbirthcondition} className="btn btn-success" color="blue">
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