import { createElement, ReactElement, useState, useEffect } from "react";
import { Icon } from "mendix/components/web/Icon";

interface PaginationProps {
    totalCount: number;
    pageSize: number;
    offset: number;
    setOffset: (newOffset: number) => void;
    onRefresh: () => void;
}

const Pagination = ({ totalCount, pageSize, offset, setOffset, onRefresh }: PaginationProps): ReactElement => {
    const [page, setPage] = useState<number>(1);
    const [pageTotal, setPageTotal] = useState<number>(0);

    useEffect(() => {
        setOffset((page - 1) * pageSize);
    }, [page]);

    useEffect(() => {
        setPageTotal(Math.ceil((totalCount || 1) / pageSize));
    }, [totalCount]);
    return (
        <div className="pagination-bar">
            <button
                className="btn pagination-button"
                disabled={page === 1}
                onClick={() => {
                    if (page > 1) {
                        setPage(1);
                    }
                }}
            >
                <Icon
                    icon={{
                        type: "glyph",
                        iconClass: "glyphicon-step-backward"
                    }}
                />
            </button>
            <button
                className="btn pagination-button"
                disabled={page === 1}
                onClick={() => {
                    if (page > 1) {
                        setPage(page - 1);
                    }
                }}
            >
                <Icon
                    icon={{
                        type: "glyph",
                        iconClass: "glyphicon-backward"
                    }}
                />
            </button>
            <span className="paging-status">{`${offset + 1} to ${
                page === pageTotal ? totalCount - offset : offset + pageSize
            } of ${totalCount}`}</span>
            <button
                className="btn pagination-button"
                disabled={page === pageTotal}
                onClick={() => {
                    if (page < pageTotal) {
                        setPage(page + 1);
                    }
                }}
            >
                <Icon
                    icon={{
                        type: "glyph",
                        iconClass: "glyphicon-forward"
                    }}
                />
            </button>
            <button
                className="btn pagination-button"
                disabled={page === pageTotal}
                onClick={() => {
                    if (page < pageTotal) {
                        setPage(pageTotal);
                    }
                }}
            >
                <Icon
                    icon={{
                        type: "glyph",
                        iconClass: "glyphicon-step-forward"
                    }}
                />
            </button>
            <button className="btn pagination-button" onClick={onRefresh}>
                <Icon
                    icon={{
                        type: "glyph",
                        iconClass: "glyphicon-refresh"
                    }}
                />
            </button>
        </div>
    );
};

export default Pagination;
