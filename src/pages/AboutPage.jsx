import {Link} from 'react-router-dom';

export default function AboutPage(){
    return (
        <>
            <p>This is a about section</p>

            <Link to='/'>Back to home</Link>
        </>
    );
}