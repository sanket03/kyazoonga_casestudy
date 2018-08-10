const appConfig = (() => {    
    const eventTypes = [
        {
            name: 'Concerts',
            class: '',
            href: '#',
            imgSrc: 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/concerts-cat1.jpg'
        },
        {
            name: 'Cricket',
            class: 'blue-bg',
            href: '#',
            imgSrc: 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/cricket-cat1.jpg'
        },
        {
            name: 'Events',
            class: 'orange-bg',
            href: '#',
            imgSrc: ''
        },
        {
            name: 'Sports',
            class: 'green-bg',
            href: '#',
            imgSrc: 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/sports-cat.jpg'
        },
        {
            name: 'Amusement Parks',
            class: 'pink-lt-bg',
            href: '#',
            imgSrc: 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/amusementparks-cat.jpg'
        },
        {
            name: 'Restaurants',
            class: 'purple-bg',
            href: '#',
            imgSrc: 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/restaurants-cat.jpg'
        },
        {
            name: 'Theatre & Arts',
            class: 'yellow-bg',
            href: '#',
            imgSrc: 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/theatre-cat.jpg'
        },
        {
            name: 'Parties',
            class: '',
            href: '#',
            imgSrc: ''
        }
    ];

    const carouselItems = [
        {
            imgSrc: 'http://content.kyazoonga.com/Footer/slider-1.jpg',
            videoPoster: 'http://content.kyazoonga.com/Footer/slider-1.jpg',
            videoSrc:'http://content.kyazoonga.com/videos/video9.mp4'
        },
        {
            imgSrc: 'http://content.kyazoonga.com/Footer/slider-1.jpg',
            videoPoster: 'http://content.kyazoonga.com/Footer/slider-1.jpg',
            videoSrc:'http://content.kyazoonga.com/videos/video1.mp4'
        },
        {
            imgSrc: 'http://content.kyazoonga.com/Footer/slider-1.jpg',
            videoPoster: 'http://content.kyazoonga.com/Footer/slider-1.jpg',
            videoSrc:'http://content.kyazoonga.com/videos/video2.mp4'
        },
        {
            imgSrc: 'http://content.kyazoonga.com/Footer/slider-1.jpg',
            videoPoster: 'http://content.kyazoonga.com/Footer/slider-1.jpg',
            videoSrc:'http://content.kyazoonga.com/videos/video3.mp4'
        },
        {
            imgSrc: 'http://content.kyazoonga.com/Footer/slider-1.jpg',
            videoPoster: 'http://content.kyazoonga.com/Footer/slider-1.jpg',
            videoSrc:'http://content.kyazoonga.com/videos/video8.mp4'
        }
    ];

    const tickets = [
        {   
            visitors: [
                {
                    imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg',
                    href: '#'
                },
                {
                    imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg',
                    href: '#'
                },
                {
                    imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg',
                    href: '#'
                },
                {
                    imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg',
                    href: '#'
                },
                {
                    imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg',
                    href: '#'
                },
                {
                    imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg',
                    href: '#'
                },
                {
                    imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg',
                    href: '#'
                },
                {
                    imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg',
                    href: '#'
                },
                {
                    imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg',
                    href: '#'
                }
            ],     
            imgSrc: 'http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif',
            price: 'INR 50 - 2,500',
            time: 'SAT, FEB 10, 2018 20:00 Onward',
            title: 'JamshedpurFC - ISL Season 4',
            venue: 'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur',
        },
        {   
            visitors:[],
            imgSrc: 'http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif',
            price: 'INR 50 - 2,500',
            time: 'SAT, FEB 10, 2018 20:00 Onward',
            title: 'JamshedpurFC - ISL Season 4',
            venue: 'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur',
        },
        {   
            visitors:[],
            imgSrc: 'http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif',
            price: 'INR 50 - 2,500',
            time: 'SAT, FEB 10, 2018 20:00 Onward',
            title: 'JamshedpurFC - ISL Season 4',
            venue: 'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur',
        },
        {   
            visitors:[],
            imgSrc: 'http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif',
            price: 'INR 50 - 2,500',
            time: 'SAT, FEB 10, 2018 20:00 Onward',
            title: 'JamshedpurFC - ISL Season 4',
            venue: 'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur',
        },
        {   
            visitors:[],
            imgSrc: 'http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif',
            price: 'INR 50 - 2,500',
            time: 'SAT, FEB 10, 2018 20:00 Onward',
            title: 'JamshedpurFC - ISL Season 4',
            venue: 'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur',
        },
        {   
            visitors:[],
            imgSrc: 'http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif',
            price: 'INR 50 - 2,500',
            time: 'SAT, FEB 10, 2018 20:00 Onward',
            title: 'JamshedpurFC - ISL Season 4',
            venue: 'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur',
        }
    ];

    const featuredList = [
        {
            imgSrc: 'forbes-logo.jpg',
            href: 'https://www.forbes.com/sites/julianmitchell/2017/06/08/this-ticketing-platform-aims-to-overthrow-ticketmaster-and-stubhub-as-global-leader/#2eee65851bc2',
            alt: 'Forbes'
        },
        {
            imgSrc: 'techco-logo.jp',
            href: 'https://tech.co/technology-upgrading-events-industry-2017-06',
            alt: 'Forbes'
        },
        {
            imgSrc: 'ausleisure-logo.jpg',
            href: 'https://www.ausleisure.com.au/news/forbes-names-kyazoonga-as-the-fastest-growing-international-online-ticket-p/',
            alt: 'INC'
        },
        {
            imgSrc: 'inc-logo.jpg',
            href: 'http://www.inc.com/drew-hendricks/top-3-trends-driving-change-for-the-events-industry.html',
            alt: 'INC'
        },
        {
            imgSrc: 'entrepreneur-magazine.jpg',
            href: 'https://www.entrepreneur.com/article/289909',
            alt: 'Entrepreneur Magazine'
        },
        {
            imgSrc: 'cnbc.jpg',
            href: '"https://www.youtube.com/watch?v=1aSuorjmrRs"',
            alt: 'CNBC'
        },
        {
            imgSrc: 'z-news.jpg',
            href: '"http://zeenews.india.com/exclusive/guns-n-roses-in-delhi-waiting-with-impatience-for-the-next-time_5910.html',
            alt: 'Z News'
        },
        {
            imgSrc: 'the-economic-times.jpg',
            href: 'http://tech.economictimes.indiatimes.com/news/startups/ratan-tata-invests-undisclosed-amount-in-e-ticketing-startup-kyazoonga/52681961',
            alt: 'The Economic Times'
        },
        {
            imgSrc: 'https://static3.kyazoonga.com/Images/featured-logo/the-times-of-india.jpg',
            href: 'http://timesofindia.indiatimes.com/australia-in-india-2009/top-stories/MCA-appoints-KyaZoonga-com-as-the-official-ticketing-partner/articleshow/5196286.cms',
            alt: 'Times of India'
        },
        {
            imgSrc: 'business-standard.jpg',
            href: 'http://www.business-standard.com/article/companies/ratan-tata-invests-in-kyazoonga-116061000326_1.html',
            alt: 'Business Standard'
        },
        {
            imgSrc: 'news18.jpg',
            href: 'http://www.news18.com/news/buzz/guns-n-roses-india-tour-80-tickets-outlets-opened-524376.html',
            alt: 'News 18'
        },
        {
            imgSrc: 'ndtv.jpg',
            href: 'https://sports.ndtv.com/india-vs-west-indies-2013-14/sachin-tendulkars-200th-test-tickets-sold-out-in-15-hours-kyazoongacom-1527446',
            alt: 'NDTV'
        }
    ]

    return {
        eventTypes,
        carouselItems,
        tickets,
        featuredList
    }
})();

export default appConfig;