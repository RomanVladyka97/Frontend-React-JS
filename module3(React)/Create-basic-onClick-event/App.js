import {Menu} from './Menu.js';
import {MenuItem} from './MenuItem.js';
import {links} from './constants.js';

const App = () => {
    return(
        <div className='app'>
            <Menu 
                children={
                    links.map(link => <MenuItem
                        title={link.title} 
                        link={link.link}
                    />)
                }
            />
        </div>
    );
}
export  {App};