import classNames from "classnames";
import { ReactElement, createElement, useEffect } from "react";
import { PluggableListViewContainerProps } from "../typings/PluggableListViewProps";
import "./ui/PluggableListView.scss";
import Pagination from "./components/Pagination";

export function PluggableListView({
    class: className,
    style,
    tabIndex,
    dataSource,
    content,
    noResultsText,
    onClickRow,
    pageSize,
    pagination,
    showMoreText,
    buttonPosition
}: PluggableListViewContainerProps): ReactElement {
    useEffect(() => {
        if (pagination !== "OFF") {
            dataSource.setLimit(pageSize);
            if (pagination === "BUTTONS") {
                dataSource.requestTotalCount(true);
            }
        }
    }, []);

    return (
        <div className={classNames("pluggable-list-view", className)} style={style}>
            {pagination === "BUTTONS" && buttonPosition !== "BOTTOM" && (
                <Pagination
                    offset={dataSource.offset}
                    setOffset={newOffset => dataSource.setOffset(newOffset)}
                    totalCount={dataSource.totalCount || 0}
                    pageSize={pageSize}
                    onRefresh={() => dataSource.reload()}
                />
            )}
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
            {pagination === "SHOWMORE" && dataSource.hasMoreItems && (
                <button
                    className="btn mx-button btn-block"
                    onClick={() => dataSource.setLimit(dataSource.limit + pageSize)}
                >
                    {showMoreText?.value}
                </button>
            )}
            {pagination === "BUTTONS" && buttonPosition !== "TOP" && (
                <Pagination
                    offset={dataSource.offset}
                    setOffset={newOffset => dataSource.setOffset(newOffset)}
                    totalCount={dataSource.totalCount || 0}
                    pageSize={pageSize}
                    onRefresh={() => dataSource.reload()}
                />
            )}
        </div>
    );
}
