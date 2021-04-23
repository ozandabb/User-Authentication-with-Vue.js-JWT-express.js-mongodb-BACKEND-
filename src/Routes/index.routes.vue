<script>
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Home from '../Pages/Home'

const routes = [
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/', component: Home },
];

export default routes;
</script>