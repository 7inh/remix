import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { MetaFunction } from "@remix-run/node";
import { lunarCalendar } from "~/lib/LunarCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export const meta: MetaFunction = () => {
  return [
    { title: "Calendar" },
    {
      property: "og:title",
      content: "Very cool app",
    },
    {
      name: "description",
      content: "This app is the best",
    },
  ];
};

const CustomDateCell = ({ value }: { value: object }) => {
  const momentValue = moment(value);

  const [year, month, day] = [
    momentValue.year(),
    momentValue.month() + 1,
    momentValue.date(),
  ];
  const lunarDay = lunarCalendar.toLunarDay(day, month, year);
  const [lunarDayNumber, lunarMonth] = lunarDay.split("/");
  const lunarYearName = lunarDay.split(":::")[1];
  const lunarDayPadStart = lunarDayNumber.padStart(2, "0");

  return (
    <div className={`rbc-day-bg text-red-400 px-1`}>
      <div>
        {lunarDayNumber === "1"
          ? `${lunarDayPadStart}/${lunarMonth.padStart(2, "0")}`
          : lunarDayPadStart}
      </div>
      <div className="text-red-500">
        {lunarDayNumber === "1" && lunarMonth === "1" ? lunarYearName : ""}
      </div>
    </div>
  );
};

export default function CalendarPage() {
  return (
    <section className="relative lg:p-6 lg:pt-4 overflow-auto">
      <h2 className="text-2xl font-bold tracking-tight">Calendar</h2>
      <div className="mt-4">
        <Calendar
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
          style={{
            height: "calc(100vh - 105px)",
          }}
          views={["month", "week", "day"]}
          components={{
            dateCellWrapper: CustomDateCell,
          }}
        />
      </div>
    </section>
  );
}
