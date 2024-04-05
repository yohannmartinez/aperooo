import { games } from './data';

const index = () => {
    const length = games.length
    const randomNumber = () => {
      Math.floor(Math.random(length) * length)
    }
    
    return (
        <div>
            {
                games[randomNumber].game
            }
        </div>
    );
};

export default index;