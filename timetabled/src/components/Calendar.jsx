import React from 'react';
import Event from './Event.jsx';

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <Event event='Fancy Dinner' color='green' location='Maple & Ash'/>
            <td></td>
            <td></td>
            <Event event='Cheap Dinner' color='purple' location="In n' Out" />
            <td></td>
            <Event event='Awful Dinner' color='red' location="Denny's"/>
            <td></td>
          </tr>
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <Event event='Starbucks' color='orange' location='13921 Potato Lane' />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">11 am</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Lunch' color='blue' location='The Burg' />
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12 pm</td>
            <Event event='Yolk' color='yellow' location='The Loop' />
            <td></td>
            <td></td>
            <td></td>
            <Event event='Subway' color='blue' location='10392 Grilled Avenue' />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='The Bean' color='pink' location='Millennium Park' />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Climb' color='green' location='Sender One' />
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <td></td>
            <Event event='Dinner' color='blue' location='The Gage' />
            <Event event='Codepath' color='red' location='Codepath HQ' />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;