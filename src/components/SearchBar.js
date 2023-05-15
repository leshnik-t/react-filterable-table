const SearchBar = ({ 
        filterText,
        inStockOnly,
        onFilterTextChange,
        onInStockOnlyChange,
        isGoods1,
        onIsGoods1Change,
        isGoods2,
        onIsGoods2Change,
        isGoods3,
        onIsGoods3Change,
        isGoods4,
        onIsGoods4Change,
        maxPrice,
        onMaxPriceChange
    }) => {
    return (
        <div className="search-bar-container shadow p-5 mb-5 bg-body rounded">
            <form>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="search" placeholder="search" 
                        value={filterText}
                        onChange={(e) => onFilterTextChange(e)}
                    />
                    <label htmlFor="search">Search for</label>
                </div>
                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" 
                        value={inStockOnly}
                        onChange={(e) => onInStockOnlyChange(e)}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Show products only in stock
                    </label>
                </div>
                <div className="mb-3">
                    <h4>Show by category</h4>
                    <div className="row g-3">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" 
                                    id="flexCheckGoods1"
                                    key="flexCheckGoods1"
                                    value={isGoods1}
                                    onChange={(e) => onIsGoods1Change(e)}
                                    defaultChecked={isGoods1}
                                />
                                <label className="form-check-label" htmlFor="flexCheckGoods1">
                                    Goods 1
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" 
                                    id="flexCheckGoods2"
                                    key="flexCheckGoods2"
                                    value={isGoods2}
                                    onChange={(e) => onIsGoods2Change(e)}
                                    defaultChecked={isGoods2}
                                />
                                <label className="form-check-label" htmlFor="flexCheckGoods2">
                                    Goods 2
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" 
                                    id="flexCheckGoods3"
                                    key="flexCheckGoods3"
                                    value={isGoods3}
                                    onChange={(e) => onIsGoods3Change(e)}
                                    defaultChecked={isGoods3}
                                />
                                <label className="form-check-label" htmlFor="flexCheckGoods3">
                                    Goods 3
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" 
                                    id="flexCheckGoods4"
                                    key="flexCheckGoods4"
                                    value={isGoods4}
                                    onChange={(e) => onIsGoods4Change(e)}
                                    defaultChecked={isGoods4}
                                />
                                <label className="form-check-label" htmlFor="flexCheckGoods4">
                                    Goods 4
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <h4>Show by price</h4>
                    <label htmlFor="customRange" className="form-label">Show products with price up to <span className="fs-5"><strong>${maxPrice}</strong></span></label>
                    <input type="range" className="form-range" min="0" max="20" id="customRange" 
                        value={maxPrice}
                        onChange={(e) => onMaxPriceChange(e)}
                    />
                </div>
                
            </form>
        </div>
        
    )
}

export default SearchBar;