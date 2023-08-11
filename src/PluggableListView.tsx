import classNames from "classnames";
import { ReactElement, createElement } from "react";
import { PluggableListViewContainerProps } from "../typings/PluggableListViewProps";
import "./ui/PluggableListView.css";

export function PluggableListView({
    class: className,
    style,
    tabIndex,
    dataSource,
    content,
    noResultsText,
    onClickRow
}: PluggableListViewContainerProps): ReactElement {
    return (
        <ul className={classNames("pluggable-list-view", className)} style={style}>
            {dataSource.items && dataSource.items?.length > 0 ? (
                dataSource.items.map(objectItem => (
                    <li
                        key={objectItem.id}
                        className={classNames({ clickable: onClickRow })}
                        tabIndex={tabIndex}
                        onClick={() => onClickRow?.get(objectItem).execute()}
                    >
                        {content.get(objectItem)}
                    </li>
                ))
            ) : (
                <li>{noResultsText.value}</li>
            )}
        </ul>
    );
}
