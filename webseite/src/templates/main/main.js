export default function Main({ values }) {
    return (
        <div className="infos">
            {values.map((value) => (
                <div key={value.id} className="infos__accordion" onClick={click}>
                    <div className="infos__accordion--info">
                        <p className="infos__accordion--title">{value.title}</p>
                        <div className="infos__content">
                            <p className="infos__accordion--content">{value.content}</p>
                        </div>
                    </div>
                    <div className="infos__accordion--spinner">^</div>
                </div>
            ))}
        </div>
    );
}


function click(event) {
    let element = event.currentTarget.querySelector(".infos__content");
    if (element.style.display == "block") {
        element.style.display = "none";
    }
    else {
        element.style.display = "block";
    }
}
