import Diary from '../components/Diary.tsx';
import PageTitle from '../components/PageTitle.tsx';
import NavBar from '../components/NavBar.tsx'

const DiaryPage = () =>
{
    return(
        <div>
            <NavBar />
            <PageTitle />
            <Diary />
        </div>
    );
};

export default DiaryPage;