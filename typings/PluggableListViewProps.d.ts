/**
 * This file was generated from PluggableListView.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { DynamicValue, ListValue, ListActionValue, ListWidgetValue } from "mendix";

export type PaginationEnum = "OFF" | "SHOWMORE" | "BUTTONS";

export type ButtonPositionEnum = "TOP" | "BOTTOM" | "BOTH";

export interface PluggableListViewContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    dataSource: ListValue;
    content: ListWidgetValue;
    noResultsText: DynamicValue<string>;
    pagination: PaginationEnum;
    pageSize: number;
    buttonPosition: ButtonPositionEnum;
    showMoreText?: DynamicValue<string>;
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
    pagination: PaginationEnum;
    pageSize: number | null;
    buttonPosition: ButtonPositionEnum;
    showMoreText: string;
    onClickRow: {} | null;
}
