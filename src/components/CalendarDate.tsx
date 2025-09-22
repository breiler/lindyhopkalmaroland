import moment from "moment";
import "./CalendarDate.scss";

type Props = {
  date: Date;
};

export const CalendarDate = ({ date }: Props) => {
  return (
    <div className="date">
      <span className="day">{moment(date).format("DD")}</span>
      <span className="month">{moment(date).format("MMM")}</span>
    </div>
  );
};
