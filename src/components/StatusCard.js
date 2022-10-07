// import Card from '@material-tailwind/react/Card';
// import CardRow from '@material-tailwind/react/CardRow';
// import CardHeader from '@material-tailwind/react/CardHeader';
// import CardStatus from '@material-tailwind/react/CardStatus';
// import CardStatusFooter from '@material-tailwind/react/CardStatusFooter';
// import Icon from '@material-tailwind/react/Icon';
import { Card, CardRow, CardHeader, CardStatus, CardStatusFooter, Icon, IconButton, CardFooter } from "@material-tailwind/react";

export default function StatusCard({
    color,
    icon,
    title,
    amount,
    percentage,
    percentageColor,
    percentageIcon,
    date,
}) {
    return (
        <div className="px-4 mb-10">
            <Card>
                {/* <CardRow> */}
                    <CardHeader color={color}  className="mb-0">
                    <IconButton variant="text" size="lg" color="white">
                        <i className={icon} />
                    </IconButton>
                    </CardHeader>
                    {/* <CardStatus title={title} amount={amount} /> */}
                {/* </CardRow> */}

                <CardFooter
                    amount={percentage}
                    color={percentageColor}
                    date={date}
                >
                    <IconButton variant="text" size="lg" color="white">
                        <i color={percentageColor} name={percentageIcon} />
                    </IconButton>
                    {/* <Icon color={percentageColor} name={percentageIcon} /> */}
                </CardFooter>
            </Card>
        </div>
    );
}
