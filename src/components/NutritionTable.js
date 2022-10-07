// import Card from '@material-tailwind/react/Card';
// import CardHeader from '@material-tailwind/react/CardHeader';
// import CardBody from '@material-tailwind/react/CardBody';
// import { Button } from "@material-tailwind/react";
// import Icon from '@material-tailwind/react/Icon';
import { Button, Card, CardHeader, CardBody, IconButton } from "@material-tailwind/react";

export default function CardTable() {
    return (
        <Card>
             <CardHeader color="purple" className="#">
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
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    1
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Muhamad Rizki
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Sarah
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Kevin
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <div className="flex w-max items-end gap-4">                                 
                                    <IconButton variant="text" size="sm" color="green">
                                        <i className="create" size="xl"/>
                                    </IconButton>
                                    <IconButton variant="text" size="sm" color="red">
                                        <i className="delete" size="xl"/>
                                    </IconButton>
                                    </div>                                
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
