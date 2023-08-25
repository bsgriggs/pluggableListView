import classNames from "classnames";
import { ReactElement, createElement, useEffect, useState } from "react";
import { PluggableListViewContainerProps } from "../typings/PluggableListViewProps";
import "./ui/PluggableListView.scss";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import { literal, contains, attribute, startsWith } from "mendix/filters/builders";

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
    buttonPosition,
    name,
    searchAttribute,
    searching,
    searchFunction,
    placeholder,
    resetIcon
}: PluggableListViewContainerProps): ReactElement {
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        // Apply pagination
        if (paginationType !== "OFF") {
            dataSource.setLimit(pageSize);
            if (paginationType === "BUTTONS") {
                dataSource.requestTotalCount(true);
            }
        }
    }, []);

    useEffect(() => {
        // Apply searching
        const debounce = setTimeout(() => {
            if (searching) {
                const filterCondition =
                    searchFunction === "CONTAINS"
                        ? contains(attribute(searchAttribute.id), literal(searchText.trim()))
                        : startsWith(attribute(searchAttribute.id), literal(searchText.trim()));

                dataSource.setFilter(filterCondition);
            }
        }, 500);
        return () => clearTimeout(debounce);
    }, [searchText]);

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
            {searching && (
                <SearchBar
                    name={name}
                    tabIndex={tabIndex || 0}
                    placeholder={placeholder?.value}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    customResetIcon={resetIcon?.value}
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
