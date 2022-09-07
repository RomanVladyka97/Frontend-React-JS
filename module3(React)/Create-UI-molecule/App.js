import {AppWrapper} from './AppWrapper.js';
import {AppItem} from './AppItem.js';
import {Image} from './Image.js';
import {turtles} from './constants.js';

const App = () => {
    return(
        <div className='app'>
            <AppWrapper 
                title='React Turtles' 
                children={
                    turtles.map(turtle => <AppItem
                        key={turtle.name}
                        name={turtle.name} 
                        description={`${turtle.nickName}kills people who doesn’t learn React with ${turtle.weapon}`}
                        image={<Image imgUrl={turtle.imgUrl}/>}
                    />)
                }
            />
        </div>
    );
}
export  {App};