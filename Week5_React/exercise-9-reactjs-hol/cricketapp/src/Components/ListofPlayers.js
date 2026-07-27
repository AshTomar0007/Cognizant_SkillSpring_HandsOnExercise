function Scorebelow70(props) {

    const players70 = [];

    props.players.map((item) => {
        if (item.score <= 70) {
            players70.push(item);
        }
        return null;
    });

    return (
        <div>
            <ul>
                {
                    players70.map((item, index) => (
                        <li key={index}>
                            Mr. {item.name} {item.score}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

function ListofPlayers(props) {

    return (
        <div>

            <ul>
                {
                    props.players.map((item, index) => (
                        <li key={index}>
                            Mr. {item.name} {item.score}
                        </li>
                    ))
                }
            </ul>

            <hr />

            <h1>List of Players having Scores Less than 70</h1>

            <Scorebelow70 players={props.players} />

        </div>
    );
}

export default ListofPlayers;