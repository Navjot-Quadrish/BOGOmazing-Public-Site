import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ selectedDate, onChange }) => {
  const [startDate, setStartDate] = useState(new Date('1995-01-01'));

  return (
   
      <DatePicker 
      wrapperClassName="custom-datepicker-wrapper"
         showIcon
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/dd/yyyy"
        showYearDropdown
        showMonthDropdown
        yearDropdownItemNumber={15} // Number of years to show in the year dropdown
        monthDropdownItemNumber={12} // Number of years to show in the year dropdown
        scrollableYearDropdown // Enable scrollable year dropdown
        minDate={new Date('1995-01-01')}
        maxDate={new Date('2008-12-31')}
        customInput={<Form.Control type="text" placeholder="mm/dd/yyyy" />} // Custom input for styling
      /> 
   
  );
};

export default CustomDatePicker;
