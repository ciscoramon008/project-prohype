import React from 'react';
import ContentCarousel from '../ContentCarousel';
import ServicesGrid from '../ServicesGrid';
import MentorsGrid from '../MentorsGrid';
import TeamGrid from '../TeamGrid';
import LgTextBgImage from "../LgTextBgImage/LgTextBgImage";
import Clients from '../Clients';
import WhyUs from '../WhyUs';

const HomePage = () => {
    const clients = [
        {
            logo: 'https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
            name: 'Google',
            id: 1
        },
        {
            logo: 'https://www.freepnglogos.com/uploads/microsoft-logo-microsoft-symbol-meaning-history-png-14.png',
            name: 'Microsoft',
            id: 2
        },
        {
            logo: 'https://cdn3.iconfinder.com/data/icons/picons-social/57/56-apple-512.png',
            name: 'Apple',
            id: 3
        },
        {
            logo: 'https://www.drupal.org/files/project-images/bootstrap-stack.png',
            name: 'Bootstrap',
            id: 4
        },
        {
            logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
            name: 'React',
            id: 5
        },
        {
            logo: 'https://logos-download.com/wp-content/uploads/2016/03/Logitech_logo.png',
            name: 'Logitech',
            id: 6
        },
        {
            logo: 'https://cdn.iconscout.com/icon/free/png-512/msi-282303.png',
            name: 'MSI',
            id: 7
        },
        {
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
            name: 'Javascript',
            id: 8
        },
        {
            logo: 'https://user-images.githubusercontent.com/11978772/40430921-73d53922-5e63-11e8-8dcd-1662136c3212.png',
            name: 'MongoDB',
            id: 9
        },
        {
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Lay%E2%80%99s_Chips_2019_Logo.png/220px-Lay%E2%80%99s_Chips_2019_Logo.png',
            name: 'Lays',
            id: 10
        },
        {
            logo: 'https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png',
            name: 'Spotify',
            id: 11
        },
    ];

    return (
        <div>
            <ContentCarousel />
            <ServicesGrid />
            <MentorsGrid />
            <TeamGrid />
            <WhyUs />
            <LgTextBgImage
                outputClass='grow-biz'
                text='WE CAN HELP YOUR BUSINESS GROW'
                btnText='See all services'
                btnRef='services'
                btnOutline
                headerClass='display-4'
            />
            <Clients clients={clients} />
            <LgTextBgImage
                outputClass='join-us-wrapper'
                text='WORK WITH US'
                btnText='JOIN US'
                btnRef='join-us'
                headerClass='display-3'
            />
        </div>
    );
}

export default HomePage;