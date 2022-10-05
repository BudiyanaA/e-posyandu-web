import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';

export default function LoginForm() {
    return (
        <>
            <div className="bg-light-blue-600 pt-10 pb-25 "></div>
                <Card className="w-96">
                    <CardHeader color="blue" contentPosition="center">
                        <div className="w-full flex items-center justify-between">
                            <h2 className=" text-white text-3xl">Login</h2>
                            <Button
                                color="transparent"
                                buttonType="link"
                                size="lg"
                                // style={{ padding: 0 }}
                            >
                            </Button>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <form>
                            <div className="flex flex-wrap ">
                                <div className="w-full lg:w-12/12 mb-10 font-light">
                                    <Input
                                        type="email"
                                        color="purple"
                                        placeholder="Phone"
                                    />
                                </div>            
                            </div>
                            <div className="flex flex-wrap mt-1">
                                <div className="w-full lg:w-12/12 mb-10 font-light">
                                    <Input
                                        type="email"
                                        color="purple"
                                        placeholder="NIK"
                                    />
                                </div>            
                            </div>
                        </form>
                    </CardBody>
                </Card>
        </>
    );
}
