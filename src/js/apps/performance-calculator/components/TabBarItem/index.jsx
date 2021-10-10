import classNames from "classnames";
import React from "react";
import styles from './styles.module.scss';

function TabBarItem({ data, clickHandler, active }) {
    return(
        <div
            className={classNames(
                styles.TabBarItem,
                {[styles.active]: active},
                'flex-column',
                'flex-1',
                'align-center',
                'cursor-pointer',
                'pb-2',
                'transition'
            )}
            onClick={clickHandler}
        >
            <img
                className="mb-2"
                src={`${window.EMOFID.theme_url}/dist/images/funds/mofid/${data.iconName}.svg`}
            />
            <span className="text-light t-14">{data.title}</span>
        </div>
    )
}

export default TabBarItem;