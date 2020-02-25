import * as React from 'react';
import ChildrenTest from './childrenTest';

const ParentTest: React.FC = () => {
    return (
        <>
            <ChildrenTest
                text="keen"
                name={{firstName: 'kim', lastName: 'yonghoon'}}
            />
        </>
    )
};

export default ParentTest;