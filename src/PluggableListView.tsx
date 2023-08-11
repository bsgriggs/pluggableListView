import classNames from "classnames";
import { ReactElement, createElement } from "react";
import { PluggableListViewContainerProps } from "../typings/PluggableListViewProps";
import "./ui/PluggableListView.css";

export function PluggableListView({
    class: className,
    style,
    dataSource,
    content
}: PluggableListViewContainerProps): ReactElement {
    return (
        <ul className={classNames("pluggable-list-view", className)} style={style}>
            {dataSource.items?.map(objectItem => (
                <li key={objectItem.id}>{content.get(objectItem)}</li>
            ))}
        </ul>
    );
}
