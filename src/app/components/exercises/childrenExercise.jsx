import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ListComponent = ({ children }) => {
    return React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
            ...child.props,
            num: i + 1
        })
    );
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    );
};

const Component = ({ num }) => {
    console.log(num);
    return <div>{num} Компонент списка</div>;
};

Component.propTypes = {
    num: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ChildrenExercise;
