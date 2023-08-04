/**
 * This file was generated from PluggableListView.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { DynamicValue, ListValue, ListActionValue, ListWidgetValue } from "mendix";

export type DirectionEnum = "VERTICAL" | "HORIZONTAL";

export type PaginationEnum = "OFF" | "SHOWMORE" | "BUTTONS";

export type ButtonPositionEnum = "TOP" | "BOTTOM" | "BOTH";

export interface PluggableListViewContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    noResultsText: DynamicValue<string>;
    direction: DirectionEnum;
    dataSource: ListValue;
    content: ListWidgetValue;
    onClickRow?: ListActionValue;
    pagination: PaginationEnum;
    pageSize: number;
    buttonPosition: ButtonPositionEnum;
    showMoreText?: DynamicValue<string>;
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
    noResultsText: string;
    direction: DirectionEnum;
    dataSource: {} | { caption: string } | { type: string } | null;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    onClickRow: {} | null;
    pagination: PaginationEnum;
    pageSize: number | null;
    buttonPosition: ButtonPositionEnum;
    showMoreText: string;
}
