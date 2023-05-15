import { useState, useTransition } from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import Loading from './Loading';

const FilterableProductTable = ({ products }) => {
    const [filterText, setFilterText] = useState('');
    const [filterTextReady, setFilterTextReady] = useState('');
    const [isPendingFilterText, startTransitionFilterText] = useTransition();

    const [inStockOnly, setInStockOnly] = useState(false);
    const [inStockOnlyReady, setInStockOnlyReady] = useState(false);
    const [isPendingInStockOnly, startTransitionInStockOnly] = useTransition();

    const [goods1, setGoods1] = useState(true);
    const [goods1Ready, setGoods1Ready] = useState(true);
    const [isPendingGoods1, startTransitionGoods1] = useTransition();

    const [goods2, setGoods2] = useState(true);
    const [goods2Ready, setGoods2Ready] = useState(true);
    const [isPendingGoods2, startTransitionGoods2] = useTransition();

    const [goods3, setGoods3] = useState(true);
    const [goods3Ready, setGoods3Ready] = useState(true);
    const [isPendingGoods3, startTransitionGoods3] = useTransition();

    const [goods4, setGoods4] = useState(true);
    const [goods4Ready, setGoods4Ready] = useState(true);
    const [isPendingGoods4, startTransitionGoods4] = useTransition();

    const [maxPrice, setMaxPrice] = useState(20);
    const [maxPriceReady, setMaxPriceReady] = useState(20);
    const [isPendingMaxPrice, startTransitionMaxPrice] = useTransition();

    const filterTextChangeHandler = (event) => {
        setFilterText(event.target.value);
        startTransitionFilterText(() => setFilterTextReady(event.target.value));
    }

    const inStockChangeHandler = (event) => {
        setInStockOnly(event.target.checked);
        startTransitionInStockOnly(() => setInStockOnlyReady(event.target.checked));
    }

    const goods1ChangeHandler = (event) => {
        setGoods1(event.target.checked);
        startTransitionGoods1(() => setGoods1Ready(event.target.checked));
    }

    const goods2ChangeHandler = (event) => {
        setGoods2(event.target.checked);
        startTransitionGoods2(() => setGoods2Ready(event.target.checked));
    }

    const goods3ChangeHandler = (event) => {
        setGoods3(event.target.checked);
        startTransitionGoods3(() => setGoods3Ready(event.target.checked));
    }

    const goods4ChangeHandler = (event) => {
        setGoods4(event.target.checked);
        startTransitionGoods4(() => setGoods4Ready(event.target.checked));
    }

    const maxPriceChangeHandler = (event) => {
        setMaxPrice(event.target.value);
        startTransitionMaxPrice(() => setMaxPriceReady(event.target.value));
    }

    return (
        <>
            <SearchBar 
                filterText={filterText}
                inStockOnly={inStockOnly}
                isGoods1={goods1}
                isGoods2={goods2}
                isGoods3={goods3}
                isGoods4={goods4}
                maxPrice={maxPrice}
                onFilterTextChange={filterTextChangeHandler}
                onInStockOnlyChange={inStockChangeHandler}
                onIsGoods1Change={goods1ChangeHandler}
                onIsGoods2Change={goods2ChangeHandler}
                onIsGoods3Change={goods3ChangeHandler}
                onIsGoods4Change={goods4ChangeHandler}
                onMaxPriceChange={maxPriceChangeHandler}
            />
            {(isPendingFilterText
                || isPendingInStockOnly
                || isPendingGoods1
                || isPendingGoods2
                || isPendingGoods3
                || isPendingGoods4
                || isPendingMaxPrice) 
                && <Loading />}
            <ProductTable 
                products={products}
                filterText={filterTextReady}
                inStockOnly={inStockOnlyReady}
                isGoods1={goods1Ready}
                isGoods2={goods2Ready}
                isGoods3={goods3Ready}
                isGoods4={goods4Ready}
                maxPrice={maxPriceReady}
            />
        </>
    )
}

export default FilterableProductTable;