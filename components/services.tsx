import image1 from '../public/assets/banner/banner1.jpeg'
import { ServiceIntg } from '@/types/globel'

export const getBusinessSolutions = (): ServiceIntg[] => {
    return [
        {
            id: 1,
            name: 'Utility Payments',
            image:image1,
            define: 'We make everyday utility payments smarter, faster, and more reliable. Through our secure digital platform, users can manage essential services such as electricity, water, gas, broadband, and mobile recharges—all in one place. Our goal is to bring convenience, transparency, and real-time control to the fingertips of our customers, whether they are individuals or businesses.',
            key_features: [
                'Multi-utility bill payment system',
                'Real-time payment confirmations',
                'Secure and encrypted transactions',
                'Integrated support for recurring billing and reminders'
            ]
        },
        {
            id: 2,
            name: 'Business Solutions',
            image:image1,
            define: 'Our business solutions are designed to empower organizations to operate more efficiently in a digital-first world. We offer customized tools and services including cloud-based software, process automation, customer management systems (CRM), invoicing platforms, and analytics dashboards. We partner with businesses to streamline operations, reduce costs, and foster sustainable growth.',
            key_features: [
                'Enterprise resource planning (ERP) solutions',
                'Custom software development',
                'Cloud and IT infrastructure support',
                'Data analytics and performance monitoring'
            ]
        },
        {
            id: 3,
            name: 'E-commerce',
            image:image1,
            define: "We provide end-to-end e-commerce solutions that help brands launch, manage, and scale their online presence. Whether you're a startup or an established retailer, our digital commerce solutions enable you to connect with customers, manage inventory, and process transactions with ease.",
            key_features: [
                'E-commerce website and mobile app development',
                'Secure payment gateway integration',
                'Product catalog and inventory management',
                'Logistics and fulfillment coordination'
            ]
        },
        {
            id: 4,
            name: 'Retail Market',
            image:image1,
            define: "We support the modern retail landscape with a combination of digital tools and traditional commerce insights. From small retailers to large marketplaces, we enable retailers to optimize operations, personalize customer experiences, and stay competitive in both physical and digital environments.",
            key_features: [
                'Point-of-sale (POS) solutions',
                'Inventory and supply chain management',
                'Loyalty and customer engagement programs',
                'Omnichannel retail support'
            ]
        },
        {
            id: 5,
            name: 'Sales and Development',
            image:image1,
            define: 'Our sales and development services are focused on helping businesses identify new markets, drive customer acquisition, and build sustainable revenue models. We provide both strategic consulting and hands-on execution in areas such as market research, product development, brand positioning, and channel sales optimization.',
            key_features: [
                'Go-to-market strategy planning',
                'Lead generation and B2B/B2C sales support',
                'Product innovation and lifecycle management',
                'Business development partnerships'
            ]
        }
    ]

}
