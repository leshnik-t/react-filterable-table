const ProductCategoryRow = ({ category }) => {
    return (
        <tr className="table-light">
            <th colSpan= "3">
                <h4>{category}</h4>
            </th>
        </tr>
    )
}

export default ProductCategoryRow;