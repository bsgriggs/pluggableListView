import { createElement, ReactElement } from "react";
import { Icon } from "mendix/components/web/Icon";
import { WebIcon } from "mendix";

interface SearchBarProps {
    tabIndex: number;
    placeholder?: string;
    searchText: string;
    setSearchText: (newSearchText: string) => void;
    customResetIcon: WebIcon | undefined;
}

const SearchBar = (props: SearchBarProps): ReactElement => {
    return (
        <div className="search-bar">
            <input
                className="form-control"
                tabIndex={props.tabIndex}
                placeholder={props.placeholder}
                value={props.searchText}
                onChange={event => props.setSearchText(event.target.value)}
            />
            <button
                className="btn mx-button btn-default"
                tabIndex={props.tabIndex}
                onClick={() => props.setSearchText("")}
            >
                <Icon icon={props.customResetIcon || { type: "glyph", iconClass: "glyphicon-repeat" }} />
            </button>
        </div>
    );
};

export default SearchBar;
