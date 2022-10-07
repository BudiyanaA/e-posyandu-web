// import Card from '@material-tailwind/react/Card';
import { Button, Card, CardHeader, CardBody, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import PosyanduDataService from "services/PosyanduSevice";
import { Select, Option } from "@material-tailwind/react";

export default function SettingsForm() {
    const initialPosyanduState = {
        id: null,
        name: "",
        rw: "",
        vilage_id: "",
      };
      const [posyandu, setPosyandu] = useState(initialPosyanduState);
      const [submitted, setSubmitted] = useState(false);

      const handleInputChange = event => {
        const { name, value } = event.target;
        setPosyandu({ ...posyandu, [name]: value });
      };
      
      const savePosyandu = () => {
        var data = {
          name: posyandu.name,
          rw: posyandu.rw,
          vilage_id: posyandu.vilage_id,
        };
    
        PosyanduDataService.create(data)
          .then(response => {
            setPosyandu({
              id: response.data.id,
              name: response.data.name,
              rw: response.data.rw,
              vilage_id: response.data.vilage_id,
            });
            setSubmitted(true);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
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
                            Posyandu
                        </Button>
                    </div>
                </CardHeader>
                <CardBody>
                <div className="submit-form">
                {submitted ? (
                    <div>
                      <h4>You submitted successfully!</h4>
                    </div>
                    ) : (
                    <div>                 
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="Name"
                                    id="name"
                                    required
                                    onChange={handleInputChange}
                                    name="name"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="Rw"
                                    id="rw"
                                    required
                                    onChange={handleInputChange}
                                    name="rw"
                                />
                            </div>    
                            <div className="flex w-full items-end gap-4">
      <Select size="md" label="Select Version">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
                            </div>
                            <Button onClick={savePosyandu} className="btn btn-success" color="blue">
                             Submit
                        </Button>              
                        </div>
                    </div>
                     )}
                </div>
                </CardBody>
            </Card>
        </>
    );
}
