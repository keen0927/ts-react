import * as React from 'react';

interface Person {
    firstName: string,
    lastName: string
}
interface Props {
    text: string,
    name: Person
}

const ChildrenTest: React.FC<Props> = ({
    text,
    name
}) => {

    const {firstName, lastName} = name;

    return (
        <>
            <p>{text}</p>
            <ul>
                <li>{firstName}</li>
                <li>{lastName}</li>
            </ul>
        </>
    )
};

export default ChildrenTest;