export const CoinsList = ({ coins }) => {
    return (
        <div>
            {coins && (
                <table>
                    <tbody>
                    {coins.map(coin =>
                        <tr key={coin.id}>
                            <td>{coin.name}</td>
                            <td>${coin.price.toFixed(2)}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            )}
        </div>
    );
}
