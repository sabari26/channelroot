import {Router} from '../@vaadin/router';

const outlet = document.getElementById('outlet');
const router = new Router(outlet);

// setup a Router instance
//const outlet = document.getElementById('outlet');
//const router = new Router(outlet);

router.setRoutes([
    {
        path: '/',
        component: 'home-view'
    },
    {
        path: '/app-one',
        component: 'x-app-one',
        action: async () => {
            await import('/app/one/app-one.js');
        }
    },
    {
        path: '/app-two',
        component: 'x-app-two',
        action: async () => {
            await import('/app/two/app-two.js');
        }
    },
    {
        path: '/app-three',
        component: 'x-app-three',
        action: async () => {
            await import('/app/three/app-three.js');
        }
    }
]);
