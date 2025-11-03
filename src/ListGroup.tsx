

function ListGroup(){
    const items=[
        'New york','San Fransisco','Tokyo','London','Paris' 
    ]
    
    return(
        <><>
            <h1>list</h1>
            <ul className="list-group">
                {items.map(item => <li key={item} onClick={()=> console.log(item)}>{item}</li>)}
            </ul>
        </></>
    )
}

export default ListGroup;