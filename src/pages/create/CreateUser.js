// import Card from '@material-tailwind/react/Card';
// import CardHeader from '@material-tailwind/react/CardHeader';
// import CardBody from '@material-tailwind/react/CardBody';
// import Button from '@material-tailwind/react/Button';
// import Input from '@material-tailwind/react/Input';
import { Button, Card, CardHeader, CardBody, Input } from "@material-tailwind/react";

export default function SettingsForm() {
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
                            Admin
                        </Button>
                    </div>
                </CardHeader>
                <CardBody>
                    <form>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="email"
                                    color="purple"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="User Name "
                                />
                            </div>              
                        </div>
                    </form>
                </CardBody>
            </Card>
        </>
    );
}
