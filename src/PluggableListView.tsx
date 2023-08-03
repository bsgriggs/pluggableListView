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
    content
}: PluggableListViewContainerProps): ReactElement {
    return (
        <ul id={name} className={classNames("pluggable-list-view", className)} style={style} tabIndex={tabIndex}>
            {dataSource.items?.map((objectItem, index) => (
                <li key={objectItem.id} id={name + "_" + index}>
                    {content.get(objectItem)}
                </li>
            ))}
        </ul>
    );
}
