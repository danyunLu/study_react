import React from 'react';
import { Clock, LoginControl, NameForm, FlavorForm, Reservation } from '../pages/test';
export const HomeComponent = () => {
    return (
        <div>
            {/* <Clock num={1} /> <br /> */}
            {/* <Clock num={2} /> <br /> */}
            {/* <Clock num={3} /> */}
            <LoginControl />
            <br />
            <br />
            <NameForm />
            <br />
            <br />
            <FlavorForm />
            <br />
            <br />
            <Reservation />
        </div>
    )
}

// export class HomeComponent extends React.Component {
//     render() {
//         console.log(8888);
//         return <div>777</div>
//     }
// }