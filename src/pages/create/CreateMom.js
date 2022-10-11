import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import React, { useState, useEffect } from "react";
import MomDataService from "services/MomService";
import MasterreligionDataService from "services/MasterreligionService";
import MastereducationDataService from "services/MastereducationService";

export default function MomsForm() {
    const initialMomState = {
        id: null,
        name: "",
        nik: "",
        address: "",
        city: "",
        districts: "",
        birth_place: "",
        birth_date: "",
        religion_id: "",
        education_id: "",
        blood_type: "",
        profession: "",
        insurance_number: "",
        // user_id: ""
      };
      const [masterreligions, setMasterreligions ] = useState([]);
      const [mastereducations, setMastereducations] = useState([]);
      const [mom, setMom] = useState(initialMomState);
      const [submitted, setSubmitted] = useState(false);

      const handleInputChange = event => {
        const { name, value } = event.target;
        setMom({ ...mom, [name]: value });
      };

      useEffect(() => {
        retrieveMasterreligions();
      }, []);
      const retrieveMasterreligions = () => {
        MasterreligionDataService.getAll()
          .then(response => {
            setMasterreligions(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

      useEffect(() => {
        retrieveMastereducations();
      }, []);
      const retrieveMastereducations = () => {
        MastereducationDataService.getAll()
          .then(response => {
            setMastereducations(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

      const saveMom = () => {
        var data = {
          name: mom.name,
          nik: mom.nik,
          address: mom.address,
          city: mom.city,
          districts: mom.districts,
          birth_place: mom.birth_place,
          birth_date: mom.birth_date,
          religion_id: mom.religion_id,
          education_id: mom.education_id,
          blood_type: mom.blood_type,
          profession: mom.profession,
          insurance_number: mom.insurance_number,
        //   user_id: mom.user_id
        };

        MomDataService.create(data)
          .then(response => {
            setMom({
              id: response.data.id,
              name: response.data.name,
              nik: response.data.nik,
              address: response.data.address,
              city: response.data.city,
              districts: response.data.districts,
              birth_place: response.data.birth_place,
              birth_date: response.data.birth_date,
              religion_id: response.data.religion_id,
              education_id: response.data.education_id,
              blood_type: response.data.blood_type,
              profession: response.data.profession,
              insurance_number: response.data.insurance_number,
            //   user_id: response.data.user_id
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
                            Mom
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
                                    value={mom.name}
                                    onChange={handleInputChange}
                                    name="name"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="number"
                                    color="purple"
                                    placeholder="NIk"
                                    id="nik"
                                    required
                                    value={mom.nik}
                                    onChange={handleInputChange}
                                    name="nik"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="Address"
                                    id="address"
                                    required
                                    value={mom.address}
                                    onChange={handleInputChange}
                                    name="address"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="City"
                                    id="city"
                                    required
                                    value={mom.city}
                                    onChange={handleInputChange}
                                    name="city"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="districts"
                                    id="districts"
                                    required
                                    value={mom.districts}
                                    onChange={handleInputChange}
                                    name="districts"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="birth_place"
                                    id="birth_place"
                                    required
                                    value={mom.birth_place}
                                    onChange={handleInputChange}
                                    name="birth_place"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="date"
                                    color="purple"
                                    placeholder="birth_date"
                                    id="birth_date"
                                    required
                                    value={mom.birth_date}
                                    onChange={handleInputChange}
                                    name="birth_date"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <select onChange={handleInputChange} name="religion_id" id="religion_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {masterreligions &&
                            masterreligions.map((masterreligion, index) => (
                                <option  value= {masterreligion.id}>{masterreligion.name}</option>
                                ))} 
                            </select>
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <select onChange={handleInputChange} name="education_id" id="education_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {mastereducations &&
                            mastereducations.map((mastereducation, index) => (
                                <option  value= {mastereducation.id}>{mastereducation.name}</option>
                                ))} 
                            </select>
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <select name="blood_type" id="blood_type" value={mom.blood_type} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="AB">O</option>
                                <option value="O">AB</option>
                            </select>
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="profession"
                                    id="profession"
                                    required
                                    value={mom.profession}
                                    onChange={handleInputChange}
                                    name="profession"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="insurance_number"
                                    id="insurance_number"
                                    required
                                    value={mom.insurance_number}
                                    onChange={handleInputChange}
                                    name="insurance_number"
                                />
                            </div>
                            {/* <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="user_id "
                                    id="user_id"
                                    required
                                    value={mom.user_id}
                                    onChange={handleInputChange}
                                    name="user_id"
                                />
                            </div> */}
                        </div>
                        <Button onClick={saveMom} className="btn btn-success" color="blue">
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
