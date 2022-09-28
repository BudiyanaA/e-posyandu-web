import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';

export default function VillageForm() {
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
                            Master Village
                        </Button>
                    </div>
                    
                </CardHeader>
                
                <CardBody>
                    <form>
                        <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                            Create
                        </h6>
                        <div className="w-full lg:w-12/12 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="Name"
                                />
                            </div>

                    </form>
                </CardBody>
            </Card>
        </>
    );
}