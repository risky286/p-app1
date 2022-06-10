import { useRouter } from "next/router"
import { getFilteredEvents } from "../../dummy-data"
import EventList from "../../components/events/EventList"
import ResultsTitle from "../../components/events/results-title"
import { Fragment } from "react"
import Button from "../../components/ui/button"

function FilteredEventsPage() {
    const router = useRouter()
    const filterData = router.query.slug
    console.log(filterData)
    if(!filterData) {
        return <p className="center">Loading</p>
    }

    const [filteredYear, filteredMonth] = filterData
    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if(isNaN(numYear) || isNaN(numMonth) || numMonth<1 || numMonth>12){
        return (
            <Fragment>
                <p>Invalid Filter!!!</p>
                <div className="center">      
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })
    const date = new Date(numYear, numMonth -1)

    if(!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <p>No Events found for chosen filter</p>
                <div className="center">      
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
        )
    }
    return(
        <div>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </div>
    )
}
export default FilteredEventsPage