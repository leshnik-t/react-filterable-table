import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ 
    products, 
    filterText, 
    inStockOnly,
    isGoods1,
    isGoods2,
    isGoods3,
    isGoods4,
    maxPrice
}) => {
    const rows = [];
    const categoryMap = new Map();
    const categoryArray = [];

    products.forEach( (product) => {
        if (product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1) return;
        if (!isGoods1 && product.category === 'Goods category 1') return;
        if (!isGoods2 && product.category === 'Goods category 2') return;
        if (!isGoods3 && product.category === 'Goods category 3') return;
        if (!isGoods4 && product.category === 'Goods category 4') return;
        if (inStockOnly && !product.inStock) return;
        if (maxPrice <= parseInt(product.price.slice(1))) return;

        if (!(categoryMap.has(product.category))) {
            categoryMap.set(product.category, []);
            categoryArray.push(product.category);
        }  

        categoryMap.get(product.category).push(
            <ProductRow 
                key={product.id}
                product={product}
            />
        );
    });

    categoryArray.sort((a, b) => a.localeCompare(b));
    categoryArray.forEach(category => {
        rows.push(
            <ProductCategoryRow 
                category={category}
                key={category}
            />
        );

        categoryMap.get(category).forEach( (productRow) => {
            rows.push(productRow);
        });
    });

    return (
        <section className="table-container">
            <div className="table-responsive">
                <table className="table table-hover align-middle">
                    <thead>
                        <tr className="table-primary">
                            <th>Name</th>
                            <th className="text-end">Price</th>
                            <th className="text-center">Stocked</th>
                        </tr>
                    </thead>
                    <tbody>{ rows }</tbody>
                </table>
            </div>
        </section>
    )
}

export default ProductTable;