import EventItem from "./EventItem"
import classes from "./event-list.module.css"

function EventList(props) {
    return(
        <ul className={classes.list}>
            {props.items.map((event) => (
                <EventItem 
                id={event.id}  
                key={event.id}
                image={event.image}
                location={event.location}
                title={event.title}
                date={event.date}
                />
                ))}
        </ul>
    )
}

export default EventList