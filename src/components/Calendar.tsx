import { useEffect, useState } from "react";
import {
  convertIcsCalendar,
  type IcsCalendar,
  type IcsEvent,
  type NonStandardValuesGeneric,
} from "ts-ics";
import moment from "moment";
import { FaLocationDot, FaUpRightFromSquare } from "react-icons/fa6";
import "./Calendar.scss";
import { CalendarDate } from "./CalendarDate";

const CALENDAR_URL = "https://bitpusher.se/lko/calendar.ics";

type EventProps = {
  event: IcsEvent<NonStandardValuesGeneric>;
};

const formatLocation = (location: string) => {
  return location
    .split(",")
    .map((part) => part.trim())
    .slice(0, 1)
    .join(", ");
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
      address: event.location,
    },
    image: ["https://lindyhopkalmaroland.se/assets/social1.svg"],
  };

  return (
    <div className="event" key={event.uid}>
      <time dateTime={moment(event.start.date).format("yyyy-MM-DD HH:mm")}>
        <CalendarDate date={event.start.date} />
        <div className="summary">
          <h4>{event.summary}</h4>

          <div className="time">
            {moment(event.start.date).format("HH:mm")} -{" "}
            {moment(event?.end?.date).format("HH:mm")}
          </div>
        </div>

        <p className="description">{event.description}</p>
        {event.location && (
          <div className="location">
            <a
              href={
                "https://www.google.com/maps/search/?api=1&query=" +
                encodeURIComponent(event.location!)
              }
              target="_blank"
            >
              <span className="icon">
                <FaLocationDot size="24" />
              </span>
              <span>{formatLocation(event.location)}</span>
            </a>
          </div>
        )}

        {event.url && (
          <div className="url">
            <a
              href={
                "https://www.google.com/maps/search/?api=1&query=" +
                encodeURIComponent(event.location!)
              }
              target="_blank"
            >
              <span className="icon">
                <FaUpRightFromSquare size="18" />
              </span>
              <a href={event.url}>Gå till anmälan</a>
            </a>
          </div>
        )}

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventData) }}
        />
      </time>
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

  const courses: IcsEvent[] = [
    {
      stamp: { date: new Date("2025-10-15 17:20:00") },
      start: { date: new Date("2025-10-15 17:20:00") },
      end: { date: new Date("2025-10-15 18:20:00") },
      summary: "Fortsättning med Joacim och Camilla",
      description:
        " På den här kursen med 6 tillfällen bygger vi vidare på grundstegen och de grundläggande turerna från nybörjarkursen.",
      url: "https://dans.se/spinnrockarna/shop/new?event=248424",
      uid: "248424",
      location:
        "Dansklubben Spinnrockarna, Verkstadsgatan, 392 39 Kalmar, Sweden",
    },
  ];

  const events: IcsEvent[] =
    calendar?.events
      ?.filter((e) => new Date(e.start.date) >= todayStart)
      .sort(
        (e1, e2) =>
          new Date(e1.start.date).getTime() - new Date(e2.start.date).getTime(),
      )
      .slice(0, 2) ?? [];

  return (
    <aside className="calendar">
      {courses.length > 0 && (
        <>
          <h2>Kurser</h2>
          {courses.map((course) => (
            <Event key={course.uid} event={course} />
          ))}
        </>
      )}

      {events.length > 0 && (
        <>
          <h2>Evenemang</h2>
          {events.map((event) => (
            <Event event={event} />
          ))}
        </>
      )}
    </aside>
  );
};

export default Calendar;
