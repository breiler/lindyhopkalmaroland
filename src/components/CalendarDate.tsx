import moment from "moment";
import "./CalendarDate.scss";

type Props = {
  date: Date;
};

const translate = (month: string) => {
  if (month === "May") {
    return "Maj";
  } else if (month === "Oct") {
    return "Okt";
  }

  return month;
};

export const CalendarDate = ({ date }: Props) => {
  return (
    <div className="date">
      <span className="day">{moment(date).format("DD")}</span>
      <span className="month">{translate(moment(date).format("MMM"))}</span>
    </div>
  );
};
