/**
 * This file was generated from PluggableListView.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { DynamicValue, ListValue, ListActionValue, ListWidgetValue } from "mendix";

export interface PluggableListViewContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    dataSource: ListValue;
    content: ListWidgetValue;
    noResultsText: DynamicValue<string>;
    limitResults: boolean;
    pageSize: number;
    showMoreText: DynamicValue<string>;
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
    limitResults: boolean;
    pageSize: number | null;
    showMoreText: string;
    onClickRow: {} | null;
}
