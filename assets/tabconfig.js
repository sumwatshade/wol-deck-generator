import Search from "../screens/Search";
import Generate from "../screens/Generate";
import Information from "../screens/Information";


const tabConfig = {
    Generate: {
        screen: Generate
    },
    Search: {
        screen: Search
    },
    Information: {
        screen: Information
    }
};



export const tabIconConfig = {
    Generate: {
        key: 'generate',
            icon: 'cards',
        label: 'Generate',
        barColor: '#364f6b',
        pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    Search: {
        key: 'search',
            icon: 'magnify',
        label: 'Search',
        barColor: '#3fc1c9',
        pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    Information: {
        key: 'info',
            icon: 'information-outline',
        label: 'Info',
        barColor: '#fc5185',
        pressColor: 'rgba(255, 255, 255, 0.16)'
    }
};

export default tabConfig;
