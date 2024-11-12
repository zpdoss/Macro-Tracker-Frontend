import Calendar from '../components/Calendar.tsx';
import PageTitle from '../components/PageTitle.tsx';
import NavBar from '../components/NavBar.tsx'


const CalendarPage = () =>
{
    return(
        <div>
            <NavBar />
            <PageTitle />
            <Calendar />
        </div>
    );
};

export default CalendarPage;