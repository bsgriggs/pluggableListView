import classNames from "classnames";
import { ReactElement, createElement, useEffect } from "react";
import { PluggableListViewContainerProps } from "../typings/PluggableListViewProps";
import "./ui/PluggableListView.scss";

export function PluggableListView({
    class: className,
    style,
    tabIndex,
    dataSource,
    content,
    noResultsText,
    onClickRow,
    limitResults,
    pageSize,
    showMoreText
}: PluggableListViewContainerProps): ReactElement {
    useEffect(() => {
        if (limitResults) {
            dataSource.setLimit(pageSize);
        }
    }, []);

    return (
        <div className={classNames("pluggable-list-view", className)} style={style}>
            <ul>
                {dataSource.items && dataSource.items?.length > 0 ? (
                    dataSource.items.map(objectItem => (
                        <li
                            key={objectItem.id}
                            className={classNames({ clickable: onClickRow })}
                            tabIndex={onClickRow ? tabIndex || 0 : undefined}
                            onClick={() => onClickRow?.get(objectItem).execute()}
                            role={onClickRow ? "button" : undefined}
                            onKeyDown={
                                onClickRow
                                    ? event => {
                                          if (
                                              (event.key === "Enter" || event.key === " ") &&
                                              event.currentTarget === event.target
                                          ) {
                                              event.stopPropagation();
                                              onClickRow.get(objectItem).execute();
                                          }
                                      }
                                    : undefined
                            }
                        >
                            {content.get(objectItem)}
                        </li>
                    ))
                ) : (
                    <li>{noResultsText.value}</li>
                )}
            </ul>
            {limitResults && dataSource.hasMoreItems && (
                <button
                    className="btn mx-button btn-block"
                    onClick={() => dataSource.setLimit(dataSource.limit + pageSize)}
                    tabIndex={tabIndex || 0}
                >
                    {showMoreText.value}
                </button>
            )}
        </div>
    );
}
