import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import React, { useState, useEffect } from "react";
import PosyanduDataService from "services/PosyanduService";
import MastervilageDataService from "services/MastervilageService";

export default function PosyanduForm() {
    const initialPosyanduState = {
        id: null,
        name: "",
        rw: "",
        village_id: ""
      };
      const [mastervilages, setMastervilages] = useState([]);
      const [posyandu, setPosyandu] = useState(initialPosyanduState);
      const [submitted, setSubmitted] = useState(false);

      const handleInputChange = event => {
        const { name, value } = event.target;
        setPosyandu({ ...posyandu, [name]: value });
      };
      useEffect(() => {
        retrieveMastervilages();
      }, []);
      const retrieveMastervilages = () => {
        MastervilageDataService.getAll()
          .then(response => {
            setMastervilages(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

      const savePosyandu = () => {
        var data = {
          name: posyandu.name,
          rw: posyandu.rw,
          village_id: posyandu.village_id
        };

        PosyanduDataService.create(data)
          .then(response => {
            setPosyandu({
              id: response.data.id,
              name: response.data.name,
              rw: response.data.rw,
              village_id: response.data.village_id
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
                <CardHeader color="purple" contentPosition="none">
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-white text-2xl">Create</h2>
                        <Button
                            color="transparent"
                            buttonType="link"
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
                                    value={posyandu.name}
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
                                    value={posyandu.rw}
                                    onChange={handleInputChange}
                                    name="rw"
                                />
                            </div>
                             
                            <div className="w-full lg:w-12/12 pr-4 mb-10 font-light">
                            <select onChange={handleInputChange} name="village_id" id="village_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {mastervilages &&
                            mastervilages.map((mastervilage, index) => (
                                <option  value= {mastervilage.id}>{mastervilage.name}</option>
                                ))} 
                            </select>
                         </div>                                        
                        </div>
                        <Button onClick={savePosyandu} className="btn btn-success" color="blue">
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
