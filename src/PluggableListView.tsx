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
    paginationType,
    showMoreText,
    dynamicRowClass,
    buttonPosition
}: PluggableListViewContainerProps): ReactElement {
    useEffect(() => {
        if (paginationType !== "OFF") {
            dataSource.setLimit(pageSize);
            if (paginationType === "BUTTONS") {
                dataSource.requestTotalCount(true);
            }
        }
    }, []);

    return (
        <div className={classNames("pluggable-list-view", className)} style={style}>
            {paginationType === "BUTTONS" && buttonPosition !== "BOTTOM" && (
                <Pagination
                    onRefresh={dataSource.reload}
                    offset={dataSource.offset}
                    setOffset={newOffset => dataSource.setOffset(newOffset)}
                    totalCount={dataSource.totalCount || 0}
                    pageSize={pageSize}
                />
            )}
            <ul>
                {dataSource.items && dataSource.items?.length > 0 ? (
                    dataSource.items.map(objectItem => (
                        <li
                            key={objectItem.id}
                            className={classNames(
                                { clickable: onClickRow },
                                dynamicRowClass?.get(objectItem).value as string
                            )}
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
            {paginationType === "SHOWMORE" && dataSource.hasMoreItems && (
                <button
                    className="btn mx-button btn-block"
                    onClick={() => dataSource.setLimit(dataSource.limit + pageSize)}
                >
                    {showMoreText?.value}
                </button>
            )}
            {paginationType === "BUTTONS" && buttonPosition !== "TOP" && (
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
