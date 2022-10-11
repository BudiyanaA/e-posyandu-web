import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { Button } from "@material-tailwind/react";
import Icon from '@material-tailwind/react/Icon';
import React, { useState, useEffect } from "react";
import NutritionDataService from "services/NutritionService";

export default function CardTable() {
    const [nutrition, setNutrition] = useState([]);

    useEffect(() => {
        retrieveNutrition();
      }, []);
      const retrieveNutrition = () => {
        NutritionDataService.getAll()
          .then(response => {
            setNutrition(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
    return (
        <Card>
             <CardHeader color="purple" contentPosition="#">
                <div className="flex w-max justify-between gap-4">
                    <h2 className="text-white text-2xl">Table Nutrisi</h2>                                 
                    <a href="/#">                      
                        <Button color="green" size="sm">Upload Exel</Button> 
                    </a>
                    <a href="/#">                      
                        <Button color="blue" size="sm">Upload Pdf</Button> 
                    </a>
                </div>
                
            </CardHeader>
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    No
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Child
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Mom
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Dad
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                        {nutrition &&
                            nutrition.map((nutrition, index) => (
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {index+1}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {nutrition.child_id}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {nutrition.child.mom_id}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {nutrition.child.dad_id}
                                </th>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
