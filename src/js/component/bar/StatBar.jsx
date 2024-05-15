export default function StatBar(props){
    const value = props.value == null ? 50 : props.value;


    const color = props.color == null ? "rgba(255 255 255 1)" : props.color;

    return (
        <div className={"statBar"}>
            <div className={"value"} style={{
                backgroundImage : "linear-gradient(0deg, "+color+" "+value+"%, rgba(255,255,255,0) "+value+"%)"
            }}>

            </div>
        </div>
    );
}