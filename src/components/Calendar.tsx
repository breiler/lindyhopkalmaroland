import { useEffect, useState } from "react";
import {
  convertIcsCalendar,
  type IcsCalendar,
  type IcsEvent,
  type NonStandardValuesGeneric,
} from "ts-ics";
import moment from "moment";
import { FaLocationDot } from "react-icons/fa6";
import "./Calendar.scss";

const CALENDAR_URL = "https://bitpusher.se/lko/calendar.ics";

type EventProps = {
  event: IcsEvent<NonStandardValuesGeneric>;
};

const Event = ({ event }: EventProps) => {
  const eventData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.summary,
    description: event.description,
    startDate: moment(event.start.date).toISOString(),
    endDate: moment(event.end?.date).toISOString(),
    location: {
      "@type": "Place",
      name: event.location,
      address: event.location, // if you have structured address, break it down further
    },
  };

  return (
    <div className="event" key={event.uid}>
      <div className="date">
        <span className="day">{moment(event.start.date).format("DD")}</span>
        <span className="month">{moment(event.start.date).format("MMM")}</span>
      </div>
      <div className="summary">
        <h4>{event.summary}</h4>
        <div className="time">
          {moment(event.start.date).format("HH:mm") +
            " - " +
            moment(event?.end?.date).format("HH:mm")}
        </div>
      </div>
      <p className="description">{event.description}</p>
      <div className="location">
        <a
          href={
            "https://www.google.com/maps/search/?api=1&query=" +
            encodeURIComponent(event.location!)
          }
          target="_blank"
        >
          <FaLocationDot size="32" />
          <span>{event.location}</span>
        </a>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventData) }}
      />
    </div>
  );
};

const Calendar = () => {
  const [calendar, setCalendar] = useState<IcsCalendar>();

  useEffect(() => {
    fetch(CALENDAR_URL).then(async (response) => {
      const calendarString = await response.text();
      const ics = convertIcsCalendar(undefined, calendarString);
      setCalendar(ics);
    });
  }, []);

  const todayStart = moment().startOf("day").toDate();

  return (
    <>
      {calendar?.events
        ?.filter((e) => new Date(e.start.date) >= todayStart)
        .sort(
          (e1, e2) =>
            new Date(e1.start.date).getTime() -
            new Date(e2.start.date).getTime(),
        )
        .slice(0, 3)
        .map((event) => (
          <Event event={event} />
        ))}
    </>
  );
};

export default Calendar;
