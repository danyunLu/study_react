import React from 'react';
import { Clock, LoginControl, NameForm, FlavorForm, Reservation } from '../pages/test';
import { Calcultor } from '../pages/study.one';
import { SignUpDialog } from '../pages/study.two';
import { FilterableProductTable } from '../pages/study.three';

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
            <br />
            <br />
            <Calcultor />
            <br />
            <br />
            <SignUpDialog />
            <br />
            <br />
            <FilterableProductTable />
        </div>
    )
}

// export class HomeComponent extends React.Component {
//     render() {
//         console.log(8888);
//         return <div>777</div>
//     }
// }