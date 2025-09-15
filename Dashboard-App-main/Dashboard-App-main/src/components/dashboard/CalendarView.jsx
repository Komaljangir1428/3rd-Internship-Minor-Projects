import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarView() {
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>CALENDAR</h3>
      </div>
      <div className='calendar-wrapper'>
        <Calendar />
      </div>
    </main>
  );
}

export default CalendarView;