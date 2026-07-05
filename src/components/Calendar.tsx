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

//const CALENDAR_URL = "https://bitpusher.se/lko/calendar.ics";
const CALENDAR_URL = "/basic.ics";

type EventProps = {
  event: IcsEvent<NonStandardValuesGeneric>;
};

const formatLocation = (location: string) => {
  return location
    .split(",")
    .map((part) => part.trim())
    .slice(0, 2)
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

        <p
          className="description"
          dangerouslySetInnerHTML={{
            __html: event.description?.replaceAll("\n", "<br/>") ?? "",
          }}
        />
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
            <a href={event.url}>
              <span className="icon">
                <FaUpRightFromSquare size="18" />
              </span>
              <span>Gå till anmälan</span>
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
      stamp: { date: new Date("2026-09-30 17:30:00") },
      start: { date: new Date("2026-09-30 17:30:00") },
      end: { date: new Date("2025-11-25 18:30:00") },
      summary: "Nybörjarkurs med Joacim och Camilla",
      description:
        "Kursstart av nybörjarkurs med 8 tillfällen i Lindy Hop där vi går igenom dansens grundsteg, föra- och följateknik samt de vanligaste turerna.",
      uid: "279608",
      url: "https://dans.se/lindyhopkalmaroland/shop/new?event=279608&info=1",
      location:
        "Systraholmen, Kulturhuset Strömmen, Tullslätten 4, 392 53 Kalmar, Sweden",
      recurrenceRule: {
        frequency: "WEEKLY",
        count: 8,
      },
    },
    {
      stamp: { date: new Date("2026-09-30 18:45:00") },
      start: { date: new Date("2026-09-30 18:45:00") },
      end: { date: new Date("2025-11-25 19:45:00") },
      summary: "Fortsättningskurs med Joacim och Camilla",
      description:
        "Kursstart av fortsättningskurs med 8 tillfällen bygger vi vidare på grundstegen och de grundläggande turerna från nybörjarkursen.",
      uid: "279609",
      url: "https://dans.se/lindyhopkalmaroland/shop/new?event=279609&info=1",
      location:
        "Systraholmen, Kulturhuset Strömmen, Tullslätten 4, 392 53 Kalmar, Sweden",
      recurrenceRule: {
        frequency: "WEEKLY",
        count: 8,
      },
    },
    {
      stamp: { date: new Date("2026-09-13 11:00:00") },
      start: { date: new Date("2026-09-13 11:00:00") },
      end: { date: new Date("2025-09-13 16:00:00") },
      summary: "Intensivkurs nybörjare med Tomas",
      description:
        "Dansklubben Spinnrockarna erbjuder en intensivkurs i Lindy Hop, alla är välkomna oavsett nivå!",
      uid: "281635",
      url: "https://dans.se/spinnrockarna/shop/new?event=281635",
      location:
        "Dansklubben Spinnrockarna, Verkstadsgatan 6B, 392 39 KALMAR, Sweden",
    },
  ];

  let events: IcsEvent[] =
    calendar?.events
      ?.filter((e) => new Date(e.start.date) >= todayStart)
      .sort(
        (e1, e2) =>
          new Date(e1.start.date).getTime() - new Date(e2.start.date).getTime(),
      )
      .slice(0, 2) ?? [];

  events = [...events, ...courses].sort(
    (e1, e2) =>
      new Date(e1.start.date).getTime() - new Date(e2.start.date).getTime(),
  );

  return (
    <aside className="calendar">
      {events.length > 0 && (
        <>
          <h2>Aktiviteter</h2>
          {events.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </>
      )}
    </aside>
  );
};

export default Calendar;
