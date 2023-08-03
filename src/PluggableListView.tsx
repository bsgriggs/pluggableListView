import classNames from "classnames";
import { ReactElement, createElement } from "react";
import { PluggableListViewContainerProps } from "../typings/PluggableListViewProps";
import "./ui/PluggableListView.css";

export function PluggableListView({
    name,
    class: className,
    style,
    tabIndex,
    dataSource,
    content,
    noResultsText,
    onClickRow
}: PluggableListViewContainerProps): ReactElement {
    return (
        <ul id={name} className={classNames("pluggable-list-view", className)} style={style} tabIndex={tabIndex}>
            {dataSource.items && dataSource.items?.length > 0 ? (
                dataSource.items.map((objectItem, index) => (
                    <li
                        key={objectItem.id}
                        id={name + "_" + index}
                        className={classNames({ clickable: onClickRow })}
                        onClick={() => onClickRow?.get(objectItem).execute()}
                    >
                        {content.get(objectItem)}
                    </li>
                ))
            ) : (
                <li id={name + "_0"}>{noResultsText.value}</li>
            )}
        </ul>
    );
}
