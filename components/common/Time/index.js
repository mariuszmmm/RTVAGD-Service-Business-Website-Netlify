import { format } from "date-fns";
import { pl } from 'date-fns/locale';
import { FormattedDate } from "./styled";

const Time = ({ time }) => {
  const date = new Date(time * (typeof (time) === "number" ? 1000 : 1));
  const formattedDate = format(date, 'd MMMM yyyy', { locale: pl });

  return (
    <>
      <FormattedDate>
        {time ? formattedDate : ""}
      </FormattedDate>
    </>
  );
};

export default Time;