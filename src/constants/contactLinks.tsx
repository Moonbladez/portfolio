import { LocationMarkerIcon, MailIcon, PhoneIcon } from "@heroicons/react/outline";

export const contactLinks = [
    {
        icon: <LocationMarkerIcon className="h-10 mr-2 text-auroraGreen-200" />,
        text: "Stavanger, Norway",

        link: false,
    },
    {
        icon: <MailIcon className="h-10 mr-2 text-auroraGreen-200" />,
        text: "rebeccayoung17@gmail.com",
        anchor: "mailto:rebeccayoung17@gmail.com",
        link: true,
    },
    {
        icon: <PhoneIcon className="h-10 mr-2 text-auroraGreen-200" />,
        text: "46828694",
        anchor: "tel:+4746828694",
        link: true,
    },
];
