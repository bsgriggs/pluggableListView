/**
 * This file was generated from PluggableListView.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { DynamicValue, ListValue, ListActionValue, ListAttributeValue, ListExpressionValue, ListWidgetValue, WebIcon } from "mendix";
import { Big } from "big.js";

export type PaginationTypeEnum = "OFF" | "SHOWMORE" | "BUTTONS";

export type ButtonPositionEnum = "TOP" | "BOTTOM" | "BOTH";

export type SearchFunctionEnum = "CONTAINS" | "STARTS_WITH";

export interface PluggableListViewContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    dataSource: ListValue;
    content: ListWidgetValue;
    noResultsText: DynamicValue<string>;
    dynamicRowClass?: ListExpressionValue<string>;
    paginationType: PaginationTypeEnum;
    pageSize: number;
    buttonPosition: ButtonPositionEnum;
    showMoreText?: DynamicValue<string>;
    searching: boolean;
    searchAttribute: ListAttributeValue<string | Big>;
    searchFunction: SearchFunctionEnum;
    placeholder?: DynamicValue<string>;
    resetIcon?: DynamicValue<WebIcon>;
    onClickRow?: ListActionValue;
}

export interface PluggableListViewPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    dataSource: {} | { caption: string } | { type: string } | null;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    noResultsText: string;
    dynamicRowClass: string;
    paginationType: PaginationTypeEnum;
    pageSize: number | null;
    buttonPosition: ButtonPositionEnum;
    showMoreText: string;
    searching: boolean;
    searchAttribute: string;
    searchFunction: SearchFunctionEnum;
    placeholder: string;
    resetIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; iconUrl: string; } | { type: "icon"; iconClass: string; } | undefined;
    onClickRow: {} | null;
}
