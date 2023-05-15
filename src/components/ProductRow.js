const ProductRow = ({ product }) => {
    const inStock = product.inStock ? <span className="text-success">✔</span> : <span className="text-danger">✖</span>;
    return (
        <tr>
            <td>{product.name}</td>
            <td className="text-end">{product.price}</td>
            <td className="text-center">{inStock}</td>
        </tr>
    )
}

export default ProductRow;